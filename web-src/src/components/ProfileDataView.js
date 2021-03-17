import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ListBox,
  ProgressCircle,
  Text,
  View,
  Grid,
  Flex,
  Heading,
  ActionGroup,
  Item as SpectrumTab,
} from "@adobe/react-spectrum";

import { Tabs, Item } from "@react-spectrum/tabs";
import EditIcon from "@spectrum-icons/workflow//Edit";

import ProfileJSONView from "./ProfileJSONView";
import ExperienceEventsView from "./ExperienceEventsView";
import UnionSchemaView from "./UnionSchemaView";
const ProfileDataView = (props) => {
  const [eventCount, setEventCount] = useState();
  const [enableProfileFormEdit, setEnableProfileFormEdit] = useState(false);
  const [profileData, setProfileData] = useState();

  let editProfileButton = null;
  editProfileButton = (
    <ActionGroup
      position="end"
      alignSelf="center"
      variant="primary"
      isDisabled={props.isDisabled}
      onAction={() => {
        setEnableProfileFormEdit(true);
      }}
    >
      <SpectrumTab key="addProfile">
        <EditIcon />
        <Text>Edit Profile</Text>
      </SpectrumTab>
    </ActionGroup>
  );

  return (
    <Flex marginStart="size-100" direction="column" gap="size-125">
      <Grid
        areas={["header header header header editButton"]}
        columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        rows={["size-600"]}
        height="100%"
        columnGap="size-300"
      >
        <View gridArea="header">
          <Heading marginStart="size-100" start="size-50" level={4}>
            Profile Data
          </Heading>
        </View>
        <View
          justifySelf="end"
          alignSelf="center"
          marginEnd="size-100"
          gridArea="editButton"
        >
          {editProfileButton}
        </View>
      </Grid>

      <Tabs aria-label="Profile Data">
        <Item title="Profile Form" key="profileForm">
          <UnionSchemaView
            ims={props.ims}
            sandboxName={props.sandboxName}
            schemaId={props.schemaId}
            isDisabled={!enableProfileFormEdit}
            onChange={props.onChange}
            profileData={profileData}
          />
        </Item>
        <Item title="Profile" key="profile">
          <ProfileJSONView
            ims={props.ims}
            identityNamespace={props.identityNamespace}
            identityValue={props.identityValue}
            sandboxName={props.sandboxName}
            onDataLoad={(data) => {
              console.log(`Data = ${data}`);
              setProfileData(data);
            }}
          />
        </Item>
      </Tabs>
    </Flex>
  );
};

ProfileDataView.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default ProfileDataView;
