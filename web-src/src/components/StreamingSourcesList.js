import React from "react";
import PropTypes from "prop-types";
import { Picker, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const StreamingSourcesList = (props) => {
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }
  const dataInlets = useActionWebInvoke({
    actionName: "get-all-data-inlets",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
    },
  });
  let picker = (
    <ProgressCircle
      id="inlet-list-progress-circle"
      aria-label="Getting Data inlets"
      isIndeterminate
      isHidden={!dataInlets.isLoading}
      marginStart="size-100"
    />
  );

  if (dataInlets.error) {
    console.log(dataInlets.error.message);
  }

  if (!dataInlets.data && !dataInlets.error && !dataInlets.isLoading) {
    picker = <Text>No DataInlets found!</Text>;
  }

  if (dataInlets.data) {
    picker = (
      <Picker
        isDisabled={!props.schemaId || props.isDisabled}
        id="inlet-list-picker"
        width="100%"
        maxWidth="100%"
        label="Streaming Inlet"
        labelAlign="start"
        isRequired={true}
        placeholder="select a Inlet"
        aria-label="select a Inlet"
        items={dataInlets.data.items.map((inlet) => ({
          name: inlet.name,
          key: inlet.inletUrl,
        }))}
        itemKey="key"
        onSelectionChange={props.onSelectionChange}
      >
        {(item) => <Item key={item.key}>{item.name}</Item>}
      </Picker>
    );
  }

  return picker;
};

StreamingSourcesList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default StreamingSourcesList;
