import React from "react";
import PropTypes from "prop-types";
import {
  TextArea,
  ProgressCircle,
  Item,
  Text,
  View,
  Divider,
  Header,
  Flex,
  Heading,
  Grid,
} from "@adobe/react-spectrum";
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
      expression:
        "_adobedemoamericas270.identification.CRMID.isNotNull() and _adobedemoamericas270.identification.Email.isNotNull()",
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
  console.log(JSON.stringify(previewJob.data));
  if (previewJob.data && previewJob.data.state === "RESULT_READY") {
    testProfilesContent = (
      <TestProfilesList
        ims={props.ims}
        sandboxName={props.sandboxName}
        previewId={previewJob.data.previewId}
      />
    );
  }

  let headerContent = (
    <Grid
      areas={["header header header header header"]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-600"]}
      height="100%"
      // gap="size-100"
      columnGap="size-300"
    >
      <View gridArea="header">
        <Heading level={3}>Test Profiles</Heading>
      </View>
    </Grid>
  );
  return (
    <Flex direction="column" gap="size-50">
      {headerContent}
      <Divider size="M" />
      {testProfilesContent}
    </Flex>
  );
};

TestProfiles.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default TestProfiles;
