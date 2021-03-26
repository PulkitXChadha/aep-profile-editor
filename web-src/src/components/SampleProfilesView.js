import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ProgressCircle,
  Text,
  View,
  Flex,
  Grid,
  ActionButton,
  TextField,
  Heading,
  Content,
} from "@adobe/react-spectrum";

import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import SampleProfilesList from "./SampleProfilesList.js";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";

const SampleProfileJob = (props) => {
  const [totalResultsCount, setTotalResultsCount] = useState();
  const [resultsOffset, setResultsOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(100);

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
      expression: props.expression,
    },
  });

  let sampleProfilesContent = (
    <ProgressCircle
      id="sample-profile-list-progress-circle"
      aria-label="Submitting a Preview Jo Offer Activities"
      isIndeterminate
      alignSelf="center"
      size="L"
      justifySelf="center"
      isHidden={!previewJob.isLoading}
      marginStart="size-100"
    />
  );
  let paginationControls;
  if (previewJob.error) {
    console.log(previewJob.error.message);
  }

  if (!previewJob.data && !previewJob.error && !previewJob.isLoading) {
    sampleProfilesContent = <Text>Issues Submitting Preview Job</Text>;
  }

  if (previewJob.data) {
    sampleProfilesContent = (
      <SampleProfilesList
        key={`${previewJob.data.previewId}-${resultsOffset}`}
        ims={props.ims}
        sandboxName={props.sandboxName}
        previewId={previewJob.data.previewId}
        onDataLoad={(resultsCount) => {
          setTotalResultsCount(resultsCount);
          console.log(`totalResultsCount = ${totalResultsCount}`);
        }}
        offset={resultsOffset}
        limit={limit}
      />
    );
    if (totalResultsCount) {
      paginationControls = (
        <Flex direction="row" gap="size-50" alignItems="center">
          <ActionButton
            isDisabled={resultsOffset ? false : true}
            isQuiet
            aria-label="previous"
            onPress={() => {
              setResultsOffset(resultsOffset - limit);
              setPageNumber(pageNumber - 1);
            }}
          >
            <ChevronLeft size="S" />
          </ActionButton>
          <TextField
            alignSelf="center"
            justifySelf="center"
            justifyContent="center"
            alignItems="center"
            onChange={(data) => {
              setResultsOffset(limit * data);
              setPageNumber(data);
            }}
            maxWidth="size-25"
            value={pageNumber}
          ></TextField>
          <Text> of {Math.ceil(totalResultsCount / limit)} Pages</Text>
          <ActionButton
            isQuiet
            aria-label="next"
            isDisabled={
              Math.ceil(resultsOffset / limit) + 1 >=
              Math.ceil(totalResultsCount / limit)
                ? true
                : false
            }
            onPress={() => {
              setResultsOffset(resultsOffset + limit);
              setPageNumber(pageNumber + 1);
            }}
          >
            <ChevronRight size="S" />
          </ActionButton>
        </Flex>
      );
    }
  }

  return (
    <Grid
      areas={["header", "mainContent", "pagination"]}
      rows={["size-600", "auto", "size-600"]}
      height="100%"
      columnGap="size-300"
    >
      <View gridArea="header">
        <Flex direction="row" gap="size-100">
          <Heading level={4}>Results</Heading>
          <Content alignSelf="center" alignItems="flex-end">
            {totalResultsCount} Profiles Found
          </Content>
        </Flex>
      </View>

      <View gridArea="mainContent" overflow="auto" backgroundColor="gray-50">
        {sampleProfilesContent}
      </View>
      <View gridArea="pagination" alignSelf="center" justifySelf="center">
        {paginationControls}
      </View>
    </Grid>
  );
};

SampleProfileJob.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default SampleProfileJob;
