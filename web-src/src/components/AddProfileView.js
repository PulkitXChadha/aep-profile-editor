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

const AddProfileView = (props) => {
  const [sandboxName, setSandboxName] = useState(props.sandboxName);
  const [selectedSchemaId, setSelectedSchemaId] = useState();
  const [selectedSchemaMetaID, setSelectedSchemaMetaID] = useState();
  const [selectedClass, setSelectedClass] = useState();
  const [dataIngestionVisibility, setDataIngestionVisibility] = useState(false);

  //Update page if sandbox or container change
  useEffect(() => {
    setSandboxName(props.sandboxName);
  }, [props.sandboxName]);

  let profileContent = null;
  let schemaSideBar = null;
  let editSideBar = null;

  profileContent = (
    <ProfileDataView
      ims={props.ims}
      sandboxName={sandboxName}
      schemaId={selectedSchemaMetaID || `_xdm.context.profile__union`}
      isDisabled={!selectedSchemaMetaID}
      onEditButtonClick={() => {
        setDataIngestionVisibility(true);
      }}
      forNewProfile={true}
    />
  );

  schemaSideBar = (
    <SchemaSelectionSideBar
      ims={props.ims}
      sandboxName={sandboxName}
      defaultSelection="https://ns.adobe.com/xdm/context/profile"
      onSelection={(xdmClass, schemaId, schemaMetaId) => {
        setSelectedSchemaId(schemaId);
        setSelectedSchemaMetaID(schemaMetaId);
        setSelectedClass(xdmClass);
      }}
    />
  );

  editSideBar = (
    <DataIngestionView
      schemaId={selectedSchemaId}
      ims={props.ims}
      sandboxName={sandboxName}
      isDisabled={!dataIngestionVisibility}
    />
  );
  //   }

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
          isDisabled={true}
          onAction={() => {
            setCreateProfile(true);
            setSelectedSchemaId();
            setSelectedSchemaMetaID();
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
        <Heading level={4}>Create Profile</Heading>
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

        <View
          overflow="auto"
          gridArea="profileContent"
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

AddProfileView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default AddProfileView;
