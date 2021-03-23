import PropTypes from "prop-types";
import {
  ProgressCircle,
  Text,
  View,
  Menu,
  MenuTrigger,
  ActionButton,
  Item,
  Flex,
} from "@adobe/react-spectrum";
import React, { useState } from "react";
import CoreForm from "@rjsf/core";
import BootstrapForm from "@rjsf/bootstrap-4";
import MaterialForm from "@rjsf/material-ui";
import FluentForm from "@rjsf/fluent-ui";
import SemanticForm from "@rjsf/semantic-ui";

import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

import SettingsIcon from "@spectrum-icons/workflow/Settings";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";
const UnionSchemaView = (props) => {
  const setUpdatedProfile = useProfileDispatch();
  const [formTheme, setFormTheme] = useState("fluent-ui");
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const unionSchema = useActionWebInvoke({
    actionName: "get-schema-details",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
      schemaId: props.schemaId,
    },
  });

  let content = (
    <ProgressCircle
      id="union-json-schema-view-progress-circle"
      aria-label="Getting Schema"
      isIndeterminate
      isHidden={!unionSchema.isLoading}
      marginStart="size-100"
    />
  );

  if (!unionSchema.isLoading && unionSchema.error) {
    console.log(unionSchema.error.message);
  }
  if (!unionSchema.data && !unionSchema.error && !unionSchema.isLoading) {
    content = <Text>Schema Not Found</Text>;
  }
  if (unionSchema.data) {
    let formContent = null;
    let formSettings = {
      schema: unionSchema.data,
      formData: props.profileData,
      disabled: props.isDisabled,
      liveOmit: true,
      omitExtraData: true,
      liveValidate: !props.isDisabled,
      showErrorList: !props.isDisabled,
      onChange: ({ formData }, e) => {
        setUpdatedProfile(formData);
      },
    };

    switch (formTheme) {
      case "core":
        formContent = (
          <CoreForm {...formSettings}>
            <React.Fragment />
          </CoreForm>
        );
        break;
      case "bootstrap-4":
        formContent = (
          <BootstrapForm {...formSettings}>
            <React.Fragment />
          </BootstrapForm>
        );
        break;
      case "material-ui":
        formContent = (
          <MaterialForm {...formSettings}>
            <React.Fragment />
          </MaterialForm>
        );
        break;
      case "fluent-ui":
        formContent = (
          <FluentForm {...formSettings}>
            <React.Fragment />
          </FluentForm>
        );
        break;
      case "semantic-ui":
        formContent = (
          <SemanticForm {...formSettings}>
            <React.Fragment />
          </SemanticForm>
        );
        break;
      default:
        formContent = (
          <CoreForm {...formSettings}>
            <React.Fragment />
          </CoreForm>
        );
    }

    content = (
      <View marginStart="size-100">
        <Flex direction="column">
          <View justifySelf="flex-end" alignSelf="flex-end">
            <MenuTrigger>
              <ActionButton>
                <SettingsIcon />
              </ActionButton>
              <Menu onAction={(key) => setFormTheme(key)}>
                <Item key="core">Bootstrap 3</Item>
                <Item key="bootstrap-4">Bootstrap 4</Item>
                <Item key="material-ui">Material UI</Item>
                <Item key="fluent-ui">Fluent UI</Item>
                <Item key="semantic-ui">Semantic UI</Item>
              </Menu>
            </MenuTrigger>
          </View>
          {formContent}
        </Flex>
      </View>
    );
  }

  return content;
};

UnionSchemaView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default UnionSchemaView;
