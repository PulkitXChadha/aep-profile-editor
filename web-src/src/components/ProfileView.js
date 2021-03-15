import React from "react";

import ReactJson from "react-json-view";
import PropTypes from "prop-types";
import { ProgressCircle, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";
const ProfileView = (props) => {
  const userSettings = null;
  const setProfileData = useProfileDispatch();

  let headers = {};
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const profile = useActionWebInvoke({
    actionName: "get-profile",
    headers: headers,
    params: {
      identityNamespace: props.identityNamespace,
      identityValue: props.identityValue,
      sandboxName: props.sandboxName,
    },
  });
  let content = (
    <ProgressCircle
      id="profile-view-progress-circle"
      aria-label="Getting Profile"
      isIndeterminate
      isHidden={!profile.isLoading}
      marginStart="size-100"
    />
  );

  if (!profile.isLoading && profile.error) {
    content = <Text>No Profile Data Found</Text>;
  }
  if (!profile.data && !profile.error && !profile.isLoading) {
    content = <Text>No Profile Data Found</Text>;
  }

  if (!profile.isLoading && profile.data) {
    const keys = Object.keys(profile.data);
    let dataToDisplay = profile.data[keys[0]].entity;
    delete dataToDisplay._ACP_BATCHID;
    delete dataToDisplay._acp_system_metadata;
    delete dataToDisplay._id;
    setProfileData(dataToDisplay);
    content = (
      <ReactJson
        theme={userSettings ? "twilight" : "rjv-default"}
        src={dataToDisplay}
        name="profile"
        displayObjectSize={false}
        displayDataTypes={false}
        quotesOnKeys={false}
      />
    );
  }

  return content;
};

ProfileView.propTypes = {
  offer: PropTypes.any,
};

export default React.memo(ProfileView);
