import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Flex, Heading, Text, Button } from "@adobe/react-spectrum";

import DatasetList from "./DatasetList";
import StreamingSourcesList from "./StreamingSourcesList";
const DataIngestionView = (props) => {
  const [selectedDataset, setSelectedDataset] = useState();
  const [selectedDataInlet, setSelectedDataInlet] = useState();
  let datasetList = (
    <DatasetList
      ims={props.ims}
      sandboxName={props.sandboxName}
      onSelectionChange={(id) => {
        setSelectedDataset(id);
      }}
      schemaId={props.schemaId}
      isDisabled={props.isDisabled}
    />
  );
  let streamingSources = (
    <StreamingSourcesList
      ims={props.ims}
      sandboxName={props.sandboxName}
      onSelectionChange={(id) => {
        setSelectedDataInlet(id);
      }}
      schemaId={props.schemaId}
      isDisabled={props.isDisabled}
    />
  );
  let saveProfileButton = null;
  saveProfileButton = (
    <Button
      variant="cta"
      isDisabled={props.isDisabled || !selectedDataset || !selectedDataInlet}
      onPress={() => {
        //TODO: Call Data inlet
      }}
    >
      <Text>Save</Text>
    </Button>
  );
  return (
    <View marginStart="size-100">
      <Flex direction="column" gap="size-300">
        <View>
          <Heading start="size-50" level={4}>
            Data Ingestion
          </Heading>
        </View>
        <View width="90%">{datasetList}</View>
        <View width="90%">{streamingSources}</View>
        <View alignSelf="center">{saveProfileButton}</View>
      </Flex>
    </View>
  );
};

DataIngestionView.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default DataIngestionView;
