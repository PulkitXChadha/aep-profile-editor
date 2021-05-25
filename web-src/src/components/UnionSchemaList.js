import React from "react";
import PropTypes from "prop-types";
import { Picker, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const UnionSchemaList = (props) => {
  let headers = {};
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

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
  let unionData = [];
  let selection = null;
  if (unions.error) {
    unionData = [];
  }

  if (!unions.data && !unions.error && !unions.isLoading) {
    unionData = [];
  }

  if (unions.data) {
    selection = props.defaultClassSelection;
    unionData =
      unions.data.results.map((union) => ({
        title: union.title,
        key: union["meta:class"],
        behaviour: union["meta:extends"].find(
          (id) => id === "https://ns.adobe.com/xdm/context/profile"
        )
          ? "record"
          : "time-series",
      })) || [];
  }

  if (!unions.isLoading) {
    picker = (
      <Picker
        data-testid="union-schema-list-picker"
        id="union-schema-list-picker"
        width="90%"
        maxWidth="90%"
        justifySelf="end"
        marginStart="size-100"
        label="Select a Class"
        defaultSelectedKey={selection}
        isRequired={true}
        placeholder="Select an Class"
        aria-label="Select an Class"
        items={unionData}
        itemKey="key"
        onSelectionChange={(key) => {
          props.onSelectionChange(
            key,
            unionData.find((data) => data.key === key).behaviour
          );
        }}
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

export default React.memo(UnionSchemaList);
