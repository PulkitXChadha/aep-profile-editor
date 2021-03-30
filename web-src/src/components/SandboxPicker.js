import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Item, Text, Picker, ProgressCircle } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const SandboxPicker = (props) => {
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
    };
  }

  let headers = {};
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  const sandboxes = useActionWebInvoke({
    actionName: "get-sandboxes",
    headers: headers,
    params: {},
  });

  useEffect(() => {
    props.isLoading(sandboxes.isLoading);
  }, [sandboxes.isLoading]);
  useEffect(() => {
    props.error(sandboxes.error);
  }, [sandboxes.error]);

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
    picker = (
      <Picker
        isQuiet
        labelPosition="side"
        labelAlign="end"
        isRequired={true}
        placeholder="select a sandbox"
        aria-label="select a sandbox"
        id="sandbox-picker"
        items={sandboxes.data.sandboxes
          .sort(sortByProperty("name"))
          .map((sandbox) => ({
            id: sandbox.name,
            name: `${sandbox.title} (${sandbox.region})`,
          }))}
        itemKey="id"
        onSelectionChange={props.onSelectionChange}
      >
        {(item) => (
          <Item id={item.id} key={item.id}>
            {item.name}
          </Item>
        )}
      </Picker>
    );
  }

  return picker;
};

SandboxPicker.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default React.memo(SandboxPicker);
