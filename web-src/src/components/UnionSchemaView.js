import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { ProgressCircle, Text } from "@adobe/react-spectrum";

// import Form from "react-jsonschema-form";
import Form from "@rjsf/bootstrap-4";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const UnionSchemaView = (props) => {
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
      <Form
        schema={unionSchema.data}
        formData={props.profileData}
        disabled={props.isDisabled}
        onChange={props.onChange}
      ></Form>
    );
  }

  return content;
};

UnionSchemaView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default UnionSchemaView;
