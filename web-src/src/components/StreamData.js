import PropTypes from "prop-types";
import { ProgressCircle, Text, View, StatusLight } from "@adobe/react-spectrum";
import React from "react";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";
const StreamData = (props) => {
  const profileData = useProfileState();

  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }
  console.log(`profileData = ${JSON.stringify(profileData)}`);
  const streamData = useActionWebInvoke({
    actionName: "stream-data",
    headers: headers,
    params: {
      inletUrl: props.inletURL,
      dataSetId: props.datasetId,
      sandboxName: props.sandboxName,
      schemaRef: props.schemaId,
      payload: profileData,
    },
    cacheResponse: false,
  });

  let content = (
    <ProgressCircle
      id="streaming-Data-progress-circle"
      aria-label="Sending Data"
      isIndeterminate
      isHidden={!streamData.isLoading}
      marginStart="size-100"
    />
  );
  if (!streamData.isLoading && streamData.error) {
    content = (
      <StatusLight variant="negative">{streamData.error.message}</StatusLight>
    );
  }
  if (!streamData.data && !streamData.error && !streamData.isLoading) {
    content = (
      <StatusLight variant="notice">
        No Response received, try Again!!
      </StatusLight>
    );
  }
  if (streamData.data) {
    content = (
      <StatusLight variant="positive">
        Profile Fragment Saved Successfully!!
      </StatusLight>
    );
  }

  return content;
};

StreamData.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default StreamData;
