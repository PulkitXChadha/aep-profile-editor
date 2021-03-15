import React from "react";
import PropTypes from "prop-types";
import { ListBox, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const ProfileSchemaListBox = (props) => {
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
  const datasets = useActionWebInvoke({
    actionName: "get-all-datasets",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
    },
  });

  let picker = (
    <ProgressCircle
      id="namespace-list-progress-circle"
      aria-label="Getting datasets"
      isIndeterminate
      isHidden={!datasets.isLoading}
      marginStart="size-100"
    />
  );

  if (datasets.error) {
    console.log(datasets.error.message);
  }

  if (!datasets.data && !datasets.error && !datasets.isLoading) {
    picker = <Text>You have no datasets!</Text>;
  }

  if (datasets.data) {
    picker = (
      <ListBox
        width="size-2400"
        aria-label="ProfileDatasets"
        selectionMode="single"
        // onSelectionChange={setAnimalId}
        items={Object.keys(datasets.data).map((key) => ({
          name: datasets.data[key].name,
          key: key,
        }))}
        itemKey="key"
      >
        {(item) => <Item key={item.key}>{item.name}</Item>}
      </ListBox>
    );
  }

  return picker;
};

ProfileSchemaListBox.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default ProfileSchemaListBox;
