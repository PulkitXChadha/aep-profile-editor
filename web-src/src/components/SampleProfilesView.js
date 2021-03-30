import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ProgressCircle,
  Text,
  Flex,
  Grid,
  ActionButton,
  TextField,
  Heading,
  View,
  IllustratedMessage,
  Content,
} from "@adobe/react-spectrum";

import NotFound from "@spectrum-icons/illustrations/NotFound";
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
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

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
      data-testid="preview-job-progress-circle"
      aria-label="Submitting Preview Job"
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
    sampleProfilesContent = (
      <IllustratedMessage>
        <NotFound />
        <Heading>Error encountered while submitting preview job</Heading>
        <Content>{previewJob.error.message}</Content>
      </IllustratedMessage>
    );
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
        }}
        offset={resultsOffset}
        limit={limit}
      />
    );
    if (totalResultsCount) {
      paginationControls = (
        <Flex direction="row" gap="size-50" alignItems="center">
          <ActionButton
            data-testid="previous-page-button"
            aria-labelledby="previous-page-button"
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
            data-testid="current-page-textfield"
            aria-labelledby="current-page-textfield"
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
          <Text data-testid="total-pages-text">
            of {Math.ceil(totalResultsCount / limit)} Pages
          </Text>
          <ActionButton
            data-testid="next-page-button"
            aria-labelledby="next-page-button"
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

export default React.memo(SampleProfileJob);
