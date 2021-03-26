import React from "react";
import PropTypes from "prop-types";
import { Grid, repeat, ProgressCircle, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import ProfileSummaryView from "./ProfileSummaryView";
const ProfilesList = (props) => {
  //Identity Namespace State
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const profileList = useActionWebInvoke({
    actionName: "get-profile-list",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
      previewJobID: props.previewId,
      entityValues: props.entityValues,
      fields: props.fields,
    },
  });

  let profileListContent = (
    <ProgressCircle
      id="profile-list-progress-circle"
      aria-label="Getting Profile Data"
      isIndeterminate
      alignSelf="center"
      size="L"
      justifySelf="center"
      isHidden={!profileList.isLoading}
      marginStart="size-100"
    />
  );
  if (profileList.error) {
    console.log(profileList.error.message);
  }

  if (!profileList.data && !profileList.error && !profileList.isLoading) {
    profileListContent = <Text>Issues Submitting Preview Job</Text>;
  }

  if (profileList.data) {
    const keys = Object.keys(profileList.data);
    profileListContent = (
      <Grid
        columns={repeat("auto-fit", "19%")}
        justifyContent="center"
        gap="size-100"
      >
        {keys.map((key) => (
          <ProfileSummaryView
            key={key}
            profileData={profileList.data[key].entity}
          />
        ))}
      </Grid>
    );
  }

  return profileListContent;
};

ProfilesList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default ProfilesList;
