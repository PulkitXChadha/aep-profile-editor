/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  View,
  Flex,
  Heading,
  TextField,
  Button,
  Text,
  Divider,
  Switch,
  ActionGroup,
  Item as SpectrumTab,
} from "@adobe/react-spectrum";
import { Tabs, Item } from "@react-spectrum/tabs";
import { useParams } from "react-router-dom";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";

import SchemaSelectionSideBar from "./SchemaSelectionSideBar";
import EditIcon from "@spectrum-icons/workflow//Edit";
import ImageProfile from "@spectrum-icons/workflow/ImageProfile";
import AddCircleIcon from "@spectrum-icons/workflow/AddCircle";
import NamespaceList from "./NamespaceList";
import ProfileView from "./ProfileView";
import ExperienceEventsView from "./ExperienceEventsView";

import UnionSchemaView from "./UnionSchemaView";

const ProfileLookupView = (props) => {
  let { namespace, identityValue } = useParams();
  const [getProfile, setGetProfile] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [eventCount, setEventCount] = useState();
  const [sandboxName, setSandboxName] = useState(null);
  const [selectedNamespace, setSelectedNamespace] = useState(namespace);
  let [entityValue, setEntityValue] = useState(identityValue);

  const [selectedSchema, setSelectedSchema] = useState();
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

  let valueInput = null;
  let identityNamespace = null;

  if (sandboxName) {
    identityNamespace = (
      <NamespaceList
        ims={props.ims}
        sandboxName={sandboxName}
        onSelectionChange={(id) => {
          setSelectedNamespace(id);
        }}
        initialSelection={namespace}
      />
    );
    valueInput = (
      <TextField
        width="100%"
        maxWidth="100%"
        // isDisabled={selectedNamespace ? false : true}
        label={`Enter ID value`}
        labelPosition="top"
        labelAlign="start"
        isRequired={true}
        onChange={setEntityValue}
        inputMode="text"
        maxLength="255"
        defaultValue={identityValue}
      />
    );
  }

  let findProfileButton = null;
  findProfileButton = (
    <Button
      variant="primary"
      onPress={() => {
        setGetProfile(true);
      }}
    >
      <Text>View</Text>
    </Button>
  );
  let editProfileButton = null;
  editProfileButton = (
    <ActionGroup
      position="end"
      alignSelf="center"
      variant="primary"
      onAction={() => {
        //TODO: Enable Form
        //TODO: Display Streaming View
      }}
    >
      <SpectrumTab key="addProfile">
        <EditIcon />
        <Text>Edit Profile</Text>
      </SpectrumTab>
    </ActionGroup>
  );

  let saveProfileButton = null;
  saveProfileButton = (
    <Button
      variant="cta"
      onPress={() => {
        //TODO: Call Data inlet
      }}
    >
      <Text>Save</Text>
    </Button>
  );
  let profileContent = null;
  let schemaSideBar = null;
  let editSideBar = null;

  if (getProfile || createProfile || (namespace && identityValue)) {
    profileContent = (
      <Flex
        marginStart="size-100"
        // overflow="auto"
        direction="column"
        gap="size-125"
      >
        <Heading marginStart="size-100" start="size-50" level={4}>
          Profile Data
        </Heading>

        <Tabs aria-label="Profile Data">
          <Item title="Profile Form" key="profileForm">
            <UnionSchemaView
              ims={props.ims}
              sandboxName={sandboxName}
              schemaId={selectedSchema || `_xdm.context.profile__union`}
            />
          </Item>
          <Item title="Profile" key="profile">
            <ProfileView
              ims={props.ims}
              identityNamespace={selectedNamespace || namespace}
              identityValue={entityValue || identityValue}
              sandboxName={sandboxName}
            />
          </Item>
          <Item
            title={`Experience Events ${eventCount ? `(${eventCount})` : ``}`}
            key="ee"
          >
            <ExperienceEventsView
              ims={props.ims}
              identityNamespace={selectedNamespace || namespace}
              identityValue={entityValue || identityValue}
              sandboxName={sandboxName}
              onLoad={(count) => {
                setEventCount(count);
              }}
            />
          </Item>
        </Tabs>
      </Flex>
    );

    schemaSideBar = (
      <SchemaSelectionSideBar
        ims={props.ims}
        sandboxName={sandboxName}
        defaultSelection="https://ns.adobe.com/xdm/context/profile"
        onSchemaSelection={(id) => {
          console.log(`selected Schema= ${id}`);
          setSelectedSchema(id);
        }}
      />
    );

    editSideBar = (
      <View marginStart="size-100">
        <Flex direction="column" gap="size-300">
          <View>
            <Heading start="size-50" level={4}>
              Data Ingestion
            </Heading>
          </View>
          <View alignSelf="end">{editProfileButton}</View>
          <View width="80%">{identityNamespace}</View>
          <View width="80%">{identityNamespace}</View>
          <View alignSelf="center">{saveProfileButton}</View>
        </Flex>
      </View>
    );
  }

  let headerContent = (
    <Grid
      areas={["header header header header addButton"]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-600"]}
      height="100%"
      // gap="size-100"
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

  let mainContent = (
    <Grid
      areas={[
        "schemaSideBar profileContent profileContent profileContent profileContent editProfileContent",
      ]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["auto"]}
      height="100%"
      // gap="size-50"
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

        <View
          gridArea="profileContent"
          // overflow="auto"
          backgroundColor="gray-50"
        >
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
  let subHeaderContent = (
    <Grid
      areas={[
        "subHeader subHeader subHeader subHeader subHeader",
        "namespace entityValue profileButton entityValue1 profileButton1",
      ]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-400", "size-800"]}
      height="100%"
      // gap="size-100"
      columnGap="size-300"
    >
      <View gridArea="subHeader">
        <Heading level={4}>Find Profiles</Heading>
      </View>
      <View alignSelf="center" gridArea="namespace">
        {identityNamespace}
      </View>
      <View alignSelf="center" gridArea="namespace">
        {identityNamespace}
      </View>
      <View alignSelf="center" gridArea="entityValue">
        {valueInput}
      </View>
      <View alignSelf="end" marginBottom="size-100" gridArea="profileButton">
        {findProfileButton}
      </View>
    </Grid>
  );

  if (createProfile) {
    subHeaderContent = (
      <Grid
        areas={["subHeader subHeader subHeader subHeader subHeader"]}
        columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        rows={["size-800"]}
        height="100%"
      >
        <View gridArea="subHeader">
          <Heading level={4}>Create Profile</Heading>
        </View>
      </Grid>
    );
  }

  return (
    <Flex direction="column" gap="size-50">
      {headerContent}
      <Divider size="M" />
      {subHeaderContent}
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
