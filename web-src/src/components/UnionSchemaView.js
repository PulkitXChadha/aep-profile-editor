import PropTypes from "prop-types";
import { ProgressCircle, Text, View } from "@adobe/react-spectrum";
import React from "react";
// import Form from "react-jsonschema-form";
import Form from "@rjsf/fluent-ui";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";
const UnionSchemaView = (props) => {
  const setUpdatedProfile = useProfileDispatch();
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
    content = (
      <View marginStart="size-100">
        <Form
          schema={unionSchema.data}
          formData={props.profileData}
          disabled={props.isDisabled}
          liveOmit
          omitExtraData
          onChange={({ formData }, e) => {
            setUpdatedProfile(formData);
          }}
        >
          <React.Fragment />
        </Form>
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
