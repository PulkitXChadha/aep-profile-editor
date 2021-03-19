/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";

import ReactJson from "react-json-view";
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
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import UnionSchemaView from "./UnionSchemaView";
const ProfileDataView = (props) => {
  const [enableProfileFormEdit, setEnableProfileFormEdit] = useState(false);

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
    cacheResponse: false,
  });
  let profileJSONContent = (
    <ProgressCircle
      id="profile-view-progress-circle"
      aria-label="Getting Profile"
      isIndeterminate
      isHidden={!profile.isLoading}
      marginStart="size-100"
    />
  );

  let schemaContent = profileJSONContent;

  if (!profile.isLoading && profile.error) {
    profileJSONContent = <Text>No Profile Data Found</Text>;
  }
  if (!profile.data && !profile.error && !profile.isLoading) {
    profileJSONContent = <Text>No Profile Data Found</Text>;
  }

  if (!profile.isLoading && profile.data) {
    const keys = Object.keys(profile.data);
    let dataToDisplay = profile.data[keys[0]].entity;
    delete dataToDisplay._ACP_BATCHID;
    delete dataToDisplay._acp_system_metadata;
    delete dataToDisplay._id;
    profileJSONContent = (
      <div
        css={css`
          height: calc(100vh - 350px);
          overflow: auto;
        `}
      >
        <ReactJson
          theme="rjv-default"
          src={dataToDisplay}
          name="profile"
          displayObjectSize={false}
          displayDataTypes={false}
          quotesOnKeys={false}
        />
      </div>
    );
    schemaContent = (
      <div
        css={css`
          height: calc(100vh - 350px);
          overflow: auto;
        `}
      >
        <UnionSchemaView
          key={props.schemaId} //important to set a key to re render the component
          ims={props.ims}
          sandboxName={props.sandboxName}
          schemaId={props.schemaId}
          isDisabled={!enableProfileFormEdit}
          profileData={dataToDisplay}
        />
      </div>
    );
  }

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
          <ActionGroup
            position="end"
            alignSelf="center"
            variant="primary"
            isDisabled={props.isDisabled}
            onAction={() => {
              setEnableProfileFormEdit(true);
              props.onEditButtonClick(true);
            }}
          >
            <SpectrumTab key="addProfile">
              <EditIcon />
              <Text>Edit Profile</Text>
            </SpectrumTab>
          </ActionGroup>
        </View>
      </Grid>

      <Tabs aria-label="Profile Data">
        <Item title="Profile Form" key="profileForm">
          {schemaContent}
        </Item>
        <Item title="Profile" key="profile">
          {profileJSONContent}
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
