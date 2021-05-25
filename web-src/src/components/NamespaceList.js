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
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  const namespaces = useActionWebInvoke({
    actionName: "get-identity-namespaces",
    headers: headers,
    params: {
      sandboxName: sandboxName,
    },
  });
  let picker = (
    <ProgressCircle
      data-testid="namespace-list-progress-circle"
      id="namespace-list-progress-circle"
      aria-label="Getting Identity Namespaces"
      isIndeterminate
      isHidden={!namespaces.isLoading}
      marginStart="size-100"
    />
  );
  let namespaceData = [];
  if (namespaces.error) {
    namespaceData = [];
  }

  if (!namespaces.data && !namespaces.error && !namespaces.isLoading) {
    namespaceData = [];
  }

  if (namespaces.data) {
    namespaceData = namespaces.data;
  }

  if (!namespaces.isLoading) {
    picker = (
      <Picker
        data-testid="namespaces-list-picker"
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

export default React.memo(NamespaceList);
