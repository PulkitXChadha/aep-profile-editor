import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Picker, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const NamespaceList = (props) => {
  const [sandboxName, setSandboxName] = useState(props.sandboxName);
  const [selection, setSelection] = useState(props.initialSelection || "");

  useEffect(() => {
    setSandboxName(props.sandboxName);
    setSelection(props.initialSelection || "");
  }, [props.sandboxName, props.initialSelection]);

  //Identity Namespace State
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }
  const namespaces = useActionWebInvoke({
    actionName: "get-identity-preview-report",
    headers: headers,
    params: {
      sandboxName: sandboxName,
    },
  });
  let picker = (
    <ProgressCircle
      id="namespace-list-progress-circle"
      aria-label="Getting Identity Namespaces"
      isIndeterminate
      isHidden={!namespaces.isLoading}
      marginStart="size-100"
    />
  );

  if (namespaces.error) {
    console.log(namespaces.error.message);
  }

  if (!namespaces.data && !namespaces.error && !namespaces.isLoading) {
    picker = <Text>You have no namespaces!</Text>;
  }

  if (namespaces.data) {
    const namespaceData = namespaces.data.data || [];
    picker = (
      <Picker
        id="namespaces-list-picker"
        width="100%"
        maxWidth="100%"
        label="Identity Namespace"
        labelAlign="start"
        isRequired={true}
        placeholder="select an identity namespace"
        aria-label="select an identity namespace"
        items={namespaceData.map((namespace) => ({
          code: namespace.code,
          key: namespace.code.toUpperCase(),
        }))}
        itemKey="key"
        onSelectionChange={props.onSelectionChange}
        selectedKey={selection.toUpperCase()}
      >
        {(item) => <Item key={item.key}>{item.code}</Item>}
      </Picker>
    );
  }

  return picker;
};

NamespaceList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default NamespaceList;
