import React from "react";
import PropTypes from "prop-types";
import { Picker, ProgressCircle, Item, Text } from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const DatasetList = (props) => {
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
  let datasetsData = [];
  let picker = (
    <ProgressCircle
      data-testid="dataset-list-progress-circle"
      id="dataset-list-progress-circle"
      aria-label="Getting Datasets"
      isIndeterminate
      isHidden={!datasets.isLoading}
      marginStart="size-100"
    />
  );

  if (datasets.error) {
    datasetsData = [];
  }

  if (!datasets.data && !datasets.error && !datasets.isLoading) {
    datasetsData = [];
  }

  if (datasets.data) {
    const datasetsData = Object.keys(datasets.data).filter((dataset) => {
      const schemaRef = datasets.data[dataset].schemaRef || {};
      return schemaRef.id === props.schemaId;
    });
  }
  if (!datasets.isLoading) {
    picker = (
      <Picker
        isDisabled={!props.schemaId || props.isDisabled}
        id="dataset-list-picker"
        width="100%"
        maxWidth="100%"
        label="Schema Dataset"
        labelAlign="start"
        isRequired={true}
        placeholder="select an dataset"
        aria-label="select an dataset"
        items={datasetsData.map((dataset) => ({
          name: datasets.data[dataset].name,
          key: dataset,
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

DatasetList.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default React.memo(DatasetList);
