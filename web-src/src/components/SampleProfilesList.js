import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  TextArea,
  ProgressCircle,
  Item,
  Text,
  IllustratedMessage,
  Heading,
  Content,
} from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import NotFound from "@spectrum-icons/illustrations/NotFound";

import ProfilesList from "./ProfilesList";
const SampleProfilesList = (props) => {
  let headers = {};
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  const previewJobResults = useActionWebInvoke({
    actionName: "get-preview-job-results",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
      previewJobID: props.previewId,
      limit: props.limit,
      offset: props.offset,
    },
  });

  useEffect(() => {
    if (previewJobResults.data) {
      onData(
        previewJobResults.data.previewSampledResultsCount,
        props.offset + props.limit
      );
    }
  }, [previewJobResults.data]);

  const onData = (previewSampledResultsCount, nextOffset) => {
    props.onDataLoad(previewSampledResultsCount, nextOffset);
  };

  let sampleProfileListContent = null;

  sampleProfileListContent = (
    <ProgressCircle
      data-testid="preview-job-results-progress-circle"
      id="preview-job-results-progress-circle"
      aria-label="Getting Preview Job Results"
      isIndeterminate
      alignSelf="center"
      size="L"
      justifySelf="center"
      isHidden={!previewJobResults.isLoading}
      marginStart="size-100"
    />
  );
  if (previewJobResults.error) {
    sampleProfileListContent = (
      <IllustratedMessage>
        <NotFound />
        <Heading>Error encountered while getting preview job results</Heading>
        <Content>{previewJobResults.error.message}</Content>
      </IllustratedMessage>
    );
  }

  if (
    !previewJobResults.data &&
    !previewJobResults.error &&
    !previewJobResults.isLoading
  ) {
    sampleProfileListContent = <Text>Issues getting Preview Job Results</Text>;
  }

  if (
    previewJobResults.data &&
    !previewJobResults.error &&
    !previewJobResults.isLoading
  ) {
    const previewData = previewJobResults.data.results.map(
      (result) => result.objectId
    );

    sampleProfileListContent = (
      <ProfilesList
        key={`profilelist-${props.previewId}-${props.offset}`}
        ims={props.ims}
        sandboxName={props.sandboxName}
        entityValues={previewData}
        fields={["identities", "person"]}
      />
    );
  }

  return sampleProfileListContent;
};

SampleProfilesList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default React.memo(SampleProfilesList);
