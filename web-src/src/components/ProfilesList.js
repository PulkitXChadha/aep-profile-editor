import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  repeat,
  ProgressCircle,
  Text,
  IllustratedMessage,
  Heading,
  Content,
} from "@adobe/react-spectrum";

import NotFound from "@spectrum-icons/illustrations/NotFound";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import ProfileSummaryView from "./ProfileSummaryView";
const ProfilesList = (props) => {
  let headers = {};
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  const profileList = useActionWebInvoke({
    actionName: "get-profile-list",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
      entityValues: props.entityValues,
      fields: props.fields,
    },
  });

  let profileListContent = (
    <ProgressCircle
      id="sample-profile-list-progress-circle"
      data-testid="sample-profile-list-progress-circle"
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
    profileListContent = (
      <IllustratedMessage>
        <NotFound />
        <Heading>
          Error encountered while getting sample profiles from the preview job
          results
        </Heading>
        <Content>{profileList.error.message}</Content>
      </IllustratedMessage>
    );
  }

  if (!profileList.data && !profileList.error && !profileList.isLoading) {
    profileListContent = (
      <Text>Issues getting profile from Preview Job results</Text>
    );
  }

  if (profileList.data) {
    const keys = Object.keys(profileList.data);
    profileListContent = (
      <Grid
        columns={repeat("auto-fit", "19%")}
        justifyContent="center"
        gap="size-100"
        data-testid="profiles-grid"
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

export default React.memo(ProfilesList);
