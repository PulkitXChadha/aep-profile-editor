import PropTypes from "prop-types";
import React from "react";
import { Item, Text, Picker, ProgressCircle } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
const SandboxPicker = (props) => {
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  }

  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const sandboxes = useActionWebInvoke({
    actionName: "get-sandboxes",
    headers: headers,
    params: {},
  });

  let picker = (
    <ProgressCircle
      id="sandbox-list-progress-circle"
      aria-label="Getting Sandboxes"
      isIndeterminate
      isHidden={!sandboxes.isLoading}
      marginStart="size-100"
    />
  );

  if (sandboxes.error) {
    picker = <Text>{sandboxes.error.message}</Text>;
  }

  if (!sandboxes.data && !sandboxes.error && !sandboxes.isLoading) {
    picker = <Text>You have no sandboxes !</Text>;
  }

  if (sandboxes.data) {
    // const defaultSelection = sandboxes.data.sandboxes[0].name;

    picker = (
      <Picker
        isQuiet
        labelPosition="side"
        labelAlign="end"
        isRequired={true}
        placeholder="select a sandbox"
        aria-label="select a sandbox"
        // defaultSelectedKey={defaultSelection}
        items={sandboxes.data.sandboxes
          .sort(sortByProperty("name"))
          .map((sandbox) => ({
            id: sandbox.name,
            name: `${sandbox.title} (${sandbox.region})`,
          }))}
        itemKey="id"
        onSelectionChange={props.onSelectionChange}
      >
        {(item) => <Item key={item.id}>{item.name}</Item>}
      </Picker>
    );
  }

  return picker;
};

SandboxPicker.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default SandboxPicker;
