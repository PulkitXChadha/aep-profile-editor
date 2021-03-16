import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Button, ProgressCircle, Text } from "@adobe/react-spectrum";

import ImageProfile from "@spectrum-icons/workflow/ImageProfile";
// import Form from "react-jsonschema-form";
import Form from "@rjsf/material-ui";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";

const UnionSchemaView = (props) => {
  const profileData = useProfileState();

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

  let content = null;

  if (unionSchema.data) {
    content = (
      <Form schema={unionSchema.data} formData={profileData} disabled>
        <Button
          variant="primary"
          onPress={() => {
            console.log(`Clicked`);
          }}
        >
          <ImageProfile />
          <Text>Get Profile</Text>
        </Button>
      </Form>
    );
  }

  return content;
};

UnionSchemaView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default UnionSchemaView;
