import React from "react";
import PropTypes from "prop-types";
import { TextArea, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import ProfilesList from "./ProfilesList";
const TestProfilesList = (props) => {
  //Identity Namespace State
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const previewJobResults = useActionWebInvoke({
    actionName: "get-preview-job-results",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
      previewJobID: props.previewId,
      limit: 100,
    },
  });

  let testProfileListContent = (
    <ProgressCircle
      id="test-profile-list-progress-circle"
      aria-label="Submitting a Preview Jo Offer Activities"
      isIndeterminate
      isHidden={!previewJobResults.isLoading}
      marginStart="size-100"
    />
  );
  if (previewJobResults.error) {
    console.log(previewJobResults.error.message);
  }

  if (
    !previewJobResults.data &&
    !previewJobResults.error &&
    !previewJobResults.isLoading
  ) {
    testProfileListContent = <Text>Issues Submitting Preview Job</Text>;
  }

  if (previewJobResults.data) {
    const previewData = previewJobResults.data.results.map(
      (result) => result.objectId
    );
    testProfileListContent = (
      <ProfilesList
        ims={props.ims}
        sandboxName={props.sandboxName}
        entityValues={previewData}
        fields={["identities", "person"]}
        limit={100}
      />
    );
  }

  return testProfileListContent;
};

TestProfilesList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default TestProfilesList;
