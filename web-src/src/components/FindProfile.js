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
} from "@adobe/react-spectrum";
import { Tabs, Item } from "@react-spectrum/tabs";
import { useParams } from "react-router-dom";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";

import ProfileSchemaListBox from "./ProfileDatasetsListBox";
import ImageProfile from "@spectrum-icons/workflow/ImageProfile";
import NamespaceList from "./NamespaceList";
import ProfileView from "./ProfileView";
import ExperienceEventsView from "./ExperienceEventsView";

import UnionSchemaView from "./UnionSchemaView";
const FindProfile = (props) => {
  let { namespace, identityValue } = useParams();
  const [getProfile, setGetProfile] = useState(false);
  const [eventCount, setEventCount] = useState();
  const [sandboxName, setSandboxName] = useState(null);
  const [selectedNamespace, setSelectedNamespace] = useState(namespace);
  let [entityValue, setEntityValue] = useState(identityValue);
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
        labelPosition="side"
        labelAlign="end"
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
      <ImageProfile />
      <Text>Get Profile</Text>
    </Button>
  );

  let profileJSONContent = null;
  let profileUnionContent = null;
  let profileDatasets = null;
  if (getProfile || (namespace && identityValue)) {
    profileJSONContent = (
      <Tabs aria-label="Profile Data">
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
    );

    profileUnionContent = (
      <UnionSchemaView ims={props.ims} sandboxName={sandboxName} />
    );

    profileDatasets = (
      <ProfileSchemaListBox ims={props.ims} sandboxName={sandboxName} />
    );
  }

  return (
    <div
      css={css`
        height: calc(100vh - var(--spectrum-global-dimension-size-400));
      `}
    >
      <Grid
        areas={[
          "namespace namespace entityValue entityValue profileButton",
          "spacing spacing spacing spacing spacing",
          "profileDatasets profileUnionContent profileUnionContent profileJSONContent profileJSONContent",
        ]}
        columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        rows={["size-400", "size-100", "auto"]}
        height="100%"
        gap="size-200"
        columnGap="size-300"
      >
        <View gridArea="namespace">{identityNamespace}</View>
        <View gridArea="entityValue">{valueInput}</View>
        <View gridArea="profileButton">{findProfileButton}</View>
        <View gridArea="spacing">
          <Divider></Divider>
        </View>
        <ProfileProvider>
          <View gridArea="profileDatasets" overflow="auto">
            {profileDatasets}
          </View>
          <View gridArea="profileUnionContent" overflow="auto">
            {profileUnionContent}
          </View>
          <View gridArea="profileJSONContent" overflow="auto">
            {profileJSONContent}
          </View>
        </ProfileProvider>
      </Grid>
    </div>
  );
};

FindProfile.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default FindProfile;
