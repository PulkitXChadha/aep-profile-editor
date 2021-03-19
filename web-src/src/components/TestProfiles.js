/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
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
  ActionButton,
  TextField,
} from "@adobe/react-spectrum";

import ChevronRight from "@spectrum-icons/workflow/ChevronRight";

import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import TestProfilesList from "./TestProfilesList.js";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
const TestProfiles = (props) => {
  const [totalResultsCount, setTotalResultsCount] = useState();
  const [resultsOffset, setResultsOffset] = useState(0);
  const [limit, setLimit] = useState(100);
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
      expression: "1=1",
      // expression: "testProfile = true",
    },
  });
  let testProfilesContent = (
    <ProgressCircle
      id="test-profile-list-progress-circle"
      aria-label="Submitting a Preview Jo Offer Activities"
      isIndeterminate
      alignSelf="center"
      size="L"
      justifySelf="center"
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
  if (previewJob.data && previewJob.data.state === "RESULT_READY") {
    testProfilesContent = (
      <TestProfilesList
        key={`${previewJob.data.previewId}-${resultsOffset}`}
        ims={props.ims}
        sandboxName={props.sandboxName}
        previewId={previewJob.data.previewId}
        onDataLoad={(resultsCount) => {
          setTotalResultsCount(resultsCount);
        }}
        offset={resultsOffset}
        limit={limit}
      />
    );
  }

  return (
    <div
      css={css`
        height: calc(100vh - var(--spectrum-global-dimension-size-800));
      `}
    >
      <Grid
        areas={[
          "header header header header header",
          "subHeader subHeader subHeader subHeader subHeader",
          "mainContent mainContent mainContent mainContent mainContent",
          "pagination pagination pagination pagination pagination",
        ]}
        columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        rows={["size-600", "size-800", "auto", "size-600"]}
        height="100%"
        // gap="size-100"
        columnGap="size-300"
      >
        <View gridArea="header">
          <Heading level={3}>Test Profiles</Heading>
          <Divider size="M" />
        </View>

        <View gridArea="subHeader">
          <Heading level={4}>Sample Test Profile</Heading>
          <Divider size="M" />
        </View>

        <View gridArea="pagination" alignSelf="center" justifySelf="center">
          <Flex direction="row" gap="size-50" alignItems="center">
            <ActionButton
              isDisabled={resultsOffset ? false : true}
              isQuiet
              aria-label="previous"
              onPress={() => {
                setResultsOffset(resultsOffset - limit);
              }}
            >
              <ChevronLeft size="S" />
            </ActionButton>
            <TextField
              alignSelf="center"
              justifySelf="center"
              justifyContent="center"
              alignItems="center"
              maxWidth="size-25"
              value={Math.round(resultsOffset / limit) + 1}
            ></TextField>
            <Text> of {Math.round(totalResultsCount / limit)} Pages</Text>
            <ActionButton
              isQuiet
              aria-label="next"
              onPress={() => {
                setResultsOffset(resultsOffset + limit);
              }}
            >
              <ChevronRight size="S" />
            </ActionButton>
          </Flex>
        </View>
        <View gridArea="mainContent" overflow="auto">
          {testProfilesContent}
        </View>
      </Grid>
    </div>
  );
};

TestProfiles.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default TestProfiles;
