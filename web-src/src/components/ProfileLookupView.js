/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  View,
  Flex,
  Heading,
  Text,
  Divider,
  ActionGroup,
  Item as SpectrumTab,
} from "@adobe/react-spectrum";
import { useParams } from "react-router-dom";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";

import SchemaSelectionSideBar from "./SchemaSelectionSideBar";
import AddCircleIcon from "@spectrum-icons/workflow/AddCircle";
import ProfileDataView from "./ProfileDataView";

import DataIngestionView from "./DataIngestionView";
import FindProfileView from "./FindProfileView";
const ProfileLookupView = (props) => {
  let { namespace, identityValue } = useParams();
  const [getProfile, setGetProfile] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [sandboxName, setSandboxName] = useState(null);
  const [selectedNamespace, setSelectedNamespace] = useState(namespace);
  let [entityValue, setEntityValue] = useState(identityValue);
  const [selectedSchema, setSelectedSchema] = useState();
  const [selectedClass, setSelectedClass] = useState();
  const [dataIngestionVisibility, setDataIngestionVisibility] = useState(false);
  //refresh profile and experience events went entity value or selectedNamespace change
  useEffect(() => {
    setGetProfile(false);
  }, [entityValue, selectedNamespace]);

  //Update page if sandbox or container change
  useEffect(() => {
    setSelectedNamespace(null);
    setEntityValue(null);
    setSandboxName(props.sandboxName);
  }, [props.sandboxName]);

  let profileContent = null;
  let schemaSideBar = null;
  let editSideBar = null;

  if (getProfile || createProfile || (namespace && identityValue)) {
    profileContent = (
      <ProfileDataView
        ims={props.ims}
        sandboxName={sandboxName}
        schemaId={selectedSchema || `_xdm.context.profile__union`}
        isDisabled={!selectedSchema}
        identityValue={entityValue || identityValue}
        identityNamespace={selectedNamespace || namespace}
        onChange={() => {
          setDataIngestionVisibility(true);
        }}
      />
    );

    schemaSideBar = (
      <SchemaSelectionSideBar
        ims={props.ims}
        sandboxName={sandboxName}
        defaultSelection="https://ns.adobe.com/xdm/context/profile"
        onSelection={(xdmClass, schema) => {
          setSelectedSchema(schema);
          setSelectedClass(xdmClass);
        }}
      />
    );

    editSideBar = (
      <DataIngestionView
        schemaId={selectedSchema}
        ims={props.ims}
        sandboxName={sandboxName}
        isDisabled={!dataIngestionVisibility}
      />
    );
  }

  let headerContent = (
    <Grid
      areas={["header header header header addButton"]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-600"]}
      height="100%"
      columnGap="size-300"
    >
      <View gridArea="header">
        <Heading level={3}>Profiles</Heading>
      </View>
      <View justifySelf="end" gridArea="addButton">
        <ActionGroup
          position="end"
          alignSelf="center"
          variant="primary"
          onAction={() => {
            setCreateProfile(true);
          }}
        >
          <SpectrumTab key="addProfile">
            <AddCircleIcon />
            <Text>Add Profile</Text>
          </SpectrumTab>
        </ActionGroup>
      </View>
    </Grid>
  );

  let subHeaderContent = (
    <Grid
      areas={["subHeader subHeader subHeader subHeader subHeader"]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-600"]}
      height="100%"
    >
      <View gridArea="subHeader">
        {createProfile && <Heading level={4}>Create Profile</Heading>}
        {!createProfile && <Heading level={4}>Find Profiles</Heading>}
      </View>
    </Grid>
  );

  let mainContent = (
    <Grid
      areas={[
        "schemaSideBar profileContent profileContent profileContent profileContent editProfileContent",
      ]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["auto"]}
      columnGap="size-50"
    >
      <ProfileProvider>
        <View
          gridArea="schemaSideBar"
          overflow="auto"
          height="100%"
          backgroundColor="gray-50"
        >
          {schemaSideBar}
        </View>

        <View gridArea="profileContent" backgroundColor="gray-50">
          {profileContent}
        </View>
        <View
          gridArea="editProfileContent"
          overflow="auto"
          height="100%"
          backgroundColor="gray-50"
        >
          {editSideBar}
        </View>
      </ProfileProvider>
    </Grid>
  );

  return (
    <Flex direction="column" gap="size-50">
      {headerContent}
      <Divider size="M" />
      {subHeaderContent}
      {!createProfile && (
        <FindProfileView
          ims={props.ims}
          sandboxName={sandboxName}
          namespace={namespace}
          identityValue={identityValue}
          onEntityValueChange={(value) => {
            setEntityValue(value);
          }}
          onNamespaceSelection={(selection) => {
            setSelectedNamespace(selection);
          }}
          onButtonClick={() => {
            setGetProfile(true);
          }}
        />
      )}
      <Divider size="M" />
      {mainContent}
    </Flex>
  );
};

ProfileLookupView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default ProfileLookupView;
