import React from "react";
import PropTypes from "prop-types";
import { TextArea, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import TestProfilesList from "./TestProfilesList.js";
const TestProfiles = (props) => {
  //Identity Namespace State
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const previewJob = useActionWebInvoke({
    actionName: "post-preview-job",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
      // expression:
      //   "_adobedemoamericas270.creditProfileDetails.creditRating > 2000 and CHAIN(xEvent, timestamp, [C0: WHAT(true)])",
    },
  });

  let testProfilesContent = (
    <ProgressCircle
      id="test-profile-list-progress-circle"
      aria-label="Submitting a Preview Jo Offer Activities"
      isIndeterminate
      isHidden={!previewJob.isLoading}
      marginStart="size-100"
    />
  );
  if (previewJob.error) {
    console.log(previewJob.error.message);
  }

  if (!previewJob.data && !previewJob.error && !previewJob.isLoading) {
    testProfilesContent = <Text>Issues Submitting Preview Job</Text>;
  }

  if (previewJob.data && previewJob.data?.state === "RESULT_READY") {
    testProfilesContent = (
      <TestProfilesList
        ims={props.ims}
        sandboxName={props.sandboxName}
        previewId={previewJob.data.previewId}
      />
    );
  }

  return testProfilesContent;
};

TestProfiles.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default TestProfiles;
