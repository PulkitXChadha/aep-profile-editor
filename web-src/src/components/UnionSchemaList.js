import React from "react";
import PropTypes from "prop-types";
import { Picker, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const UnionSchemaList = (props) => {
  const selection = props.initialSelection || "";
  //Identity Namespace State
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }
  const unions = useActionWebInvoke({
    actionName: "get-all-unions",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
    },
  });

  let picker = (
    <ProgressCircle
      id="union-list-progress-circle"
      aria-label="Getting Union Schemas"
      isIndeterminate
      isHidden={!unions.isLoading}
      marginStart="size-100"
    />
  );

  if (unions.error) {
    console.log(unions.error.message);
  }

  if (!unions.data && !unions.error && !unions.isLoading) {
    picker = <Text>You have no unions!</Text>;
  }

  if (unions.data) {
    const unionData = unions.data.results || [];
    picker = (
      <Picker
        id="union-schema-list-picker"
        width="90%"
        maxWidth="90%"
        justifySelf="end"
        marginStart="size-100"
        label="Select a Class"
        defaultSelectedKey={props.defaultSelection}
        isRequired={true}
        placeholder="Select an Class"
        aria-label="Select an Class"
        items={unionData.map((union) => ({
          title: union.title,
          key: union["meta:class"],
        }))}
        itemKey="key"
        onSelectionChange={props.onSelectionChange}
      >
        {(item) => <Item key={item.key}>{item.title}</Item>}
      </Picker>
    );
  }

  return picker;
};

UnionSchemaList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default UnionSchemaList;
