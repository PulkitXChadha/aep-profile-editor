/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
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
import { ProfileProvider } from "../context/ProfileViewContext.js";

import SchemaSelectionSideBar from "./SchemaSelectionSideBar";
import AddCircleIcon from "@spectrum-icons/workflow/AddCircle";
import SearchIcon from "@spectrum-icons/workflow/Search";
import ProfileDataView from "./ProfileDataView";
import NewProfileView from "./NewProfileView";
import ExperienceEventsView from "./ExperienceEventsView";
import DataIngestionView from "./DataIngestionView";
import FindProfileView from "./FindProfileView";

const ProfileLookupView = (props) => {
  let { namespace, identityValue } = useParams();
  const [addNewFlag, setAddNewFlag] = useState(false);
  const [getData, setGetData] = useState(false);
  const [sandboxName, setSandboxName] = useState();
  const [selectedNamespace, setSelectedNamespace] = useState();
  let [entityValue, setEntityValue] = useState();
  const [selectedSchemaId, setSelectedSchemaId] = useState();
  const [selectedSchemaMetaID, setSelectedSchemaMetaID] = useState();
  const [selectedClass, setSelectedClass] = useState(
    "https://ns.adobe.com/xdm/context/profile"
  );
  const [selectedClassBehaviour, setSelectedClassBehaviour] = useState(
    "record"
  );
  const [dataIngestionVisibility, setDataIngestionVisibility] = useState(false);
  useEffect(() => {
    setSelectedNamespace(namespace);
    setEntityValue(identityValue);
  }, []);

  useEffect(() => {
    setGetData(false);
  }, [entityValue, selectedNamespace]);

  //Update page if sandbox or container change
  useEffect(() => {
    setSandboxName(props.sandboxName);
  }, [props.sandboxName]);

  let profileContent = null;
  let schemaSideBar = null;
  let editSideBar = null;
  let findProfileInputs = null;
  if (sandboxName) {
    if (!addNewFlag) {
      findProfileInputs = (
        <View marginStart="size-100">
          <Heading level={4}>Find Profiles</Heading>
          <FindProfileView
            ims={props.ims}
            sandboxName={sandboxName}
            namespace={selectedNamespace}
            identityValue={entityValue}
            onEntityValueChange={(value) => {
              setEntityValue(value);
            }}
            onNamespaceSelection={(selection) => {
              setSelectedNamespace(selection);
            }}
            onViewButtonClick={() => {
              setGetData(false);
              setGetData(true);
            }}
            onClearButtonClick={() => {
              setEntityValue();
              setSelectedNamespace();
              setGetData(false);
            }}
          />
          <Divider size="M" />
        </View>
      );
    }

    schemaSideBar = (
      <SchemaSelectionSideBar
        ims={props.ims}
        sandboxName={sandboxName}
        defaultClassSelection={selectedClass}
        defaultClassBehaviorSelection={selectedClassBehaviour}
        onSelection={(xdmClass, xdmClassBehaviour, schemaId, schemaMetaId) => {
          setSelectedSchemaId(schemaId);
          setSelectedSchemaMetaID(schemaMetaId);
          setSelectedClass(xdmClass);
          setSelectedClassBehaviour(xdmClassBehaviour);
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
  }
  if (getData && selectedNamespace && entityValue) {
    if (selectedClassBehaviour === "record") {
      profileContent = (
        <ProfileDataView
          ims={props.ims}
          sandboxName={sandboxName}
          schemaId={selectedSchemaMetaID || `_xdm.context.profile__union`}
          isDisabled={!selectedSchemaMetaID}
          identityValue={entityValue}
          identityNamespace={selectedNamespace}
          overFlowOffset={335}
          loadData={!addNewFlag}
          onEditButtonClick={() => {
            setDataIngestionVisibility(!dataIngestionVisibility);
          }}
        />
      );
    }
    if (selectedClassBehaviour === "time-series") {
      profileContent = (
        <ExperienceEventsView
          ims={props.ims}
          sandboxName={sandboxName}
          schemaId={
            selectedSchemaMetaID || `_xdm.context.experienceevent__union`
          }
          identityValue={entityValue}
          identityNamespace={selectedNamespace}
        />
      );
    }
  }
  if (addNewFlag) {
    profileContent = (
      <NewProfileView
        ims={props.ims}
        sandboxName={sandboxName}
        schemaId={selectedSchemaMetaID || `_xdm.context.profile__union`}
        overFlowOffset={215}
        isDisabled={!selectedSchemaMetaID}
      />
    );
  }
  return (
    <Flex direction="column" gap="size-50">
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
              setAddNewFlag(!addNewFlag);
              setEntityValue();
              setSelectedNamespace();
              setDataIngestionVisibility(!dataIngestionVisibility);
            }}
            // isDisabled={selectedSchemaMetaID ? false : true}
          >
            {addNewFlag && (
              <SpectrumTab key="findProfile" textValue="findProfile">
                <SearchIcon />
                <Text>Find</Text>
              </SpectrumTab>
            )}
            {!addNewFlag && (
              <SpectrumTab key="addProfile" textValue="addProfile">
                <AddCircleIcon />
                <Text>Add</Text>
              </SpectrumTab>
            )}
          </ActionGroup>
        </View>
      </Grid>
      <Divider size="M" />
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
            data-testid="schema-side-bar-view"
            gridArea="schemaSideBar"
            overflow="auto"
            height="100%"
            backgroundColor="gray-50"
          >
            {schemaSideBar}
          </View>
          <View overflow="auto" gridArea="profileContent">
            {findProfileInputs}
            <View overflow="auto" backgroundColor="gray-50">
              {profileContent}
            </View>
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
    </Flex>
  );
};

ProfileLookupView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default React.memo(ProfileLookupView);
