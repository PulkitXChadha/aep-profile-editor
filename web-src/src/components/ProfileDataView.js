/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";

import ReactJson from "react-json-view";
import PropTypes from "prop-types";
import {
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
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  let profile = null;
  let dataToDisplay = {};
  let schemaContent,
    profileJSONContent = null;

  profile = useActionWebInvoke({
    actionName: "get-profile",
    headers: headers,
    params: {
      identityNamespace: props.identityNamespace,
      identityValue: props.identityValue,
      sandboxName: props.sandboxName,
    },
    cacheResponse: false,
  });

  profileJSONContent = (
    <ProgressCircle
      data-testid="profile-data-view-progress-circle"
      id="profile-data-view-progress-circle"
      aria-label="Getting Profile"
      isIndeterminate
      isHidden={!profile.isLoading}
      marginStart="size-100"
    />
  );
  schemaContent = profileJSONContent;

  if (!profile.isLoading && profile.error) {
    dataToDisplay = {};
  }
  if (!profile.data && !profile.error && !profile.isLoading) {
    dataToDisplay = {};
  }

  if (!profile.isLoading && profile.data) {
    const keys = Object.keys(profile.data) || "";
    dataToDisplay = profile.data[keys[0]].entity || {};
    delete dataToDisplay._ACP_BATCHID;
    delete dataToDisplay._acp_system_metadata;
    delete dataToDisplay._id;
  }

  if (!profile.isLoading) {
    profileJSONContent = (
      <div
        css={css`
          height: calc(100vh - ${props.overFlowOffset || 325}px);
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
          height: calc(100vh - ${props.overFlowOffset || 325}px);
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
            Data
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
              setEnableProfileFormEdit(!enableProfileFormEdit);
              props.onEditButtonClick(!enableProfileFormEdit);
            }}
          >
            <SpectrumTab key="addProfile" textValue="addProfile">
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

export default React.memo(ProfileDataView);
