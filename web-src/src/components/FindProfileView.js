import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, TextField, Grid, Text, Button } from "@adobe/react-spectrum";

import NamespaceList from "./NamespaceList";
const FindProfileView = (props) => {
  const [sandboxName, setSandboxName] = useState(props.sandboxName);
  const [namespace, setNamespace] = useState(props.namespace || "");
  let [entityValue, setEntityValue] = useState(props.identityValue || "");

  useEffect(() => {
    setSandboxName(props.sandboxName);
    setNamespace(props.namespace || "");
    setEntityValue(props.identityValue || "");
  }, [props.sandboxName, props.namespace, props.identityValue]);

  //Update page if sandbox or container change
  useEffect(() => {
    setSandboxName(props.sandboxName);
  }, [props.sandboxName]);

  let identityNamespace = null;
  let valueInput = null;
  let findProfileButton = null;
  let clearButton = null;
  identityNamespace = (
    <NamespaceList
      ims={props.ims}
      sandboxName={sandboxName}
      onSelectionChange={props.onNamespaceSelection}
      initialSelection={namespace}
    />
  );
  valueInput = (
    <TextField
      data-testid="entity-value-textfield"
      width="100%"
      maxWidth="100%"
      isDisabled={namespace ? false : true}
      label={`Enter ID value`}
      labelPosition="top"
      labelAlign="start"
      isRequired={true}
      onChange={props.onEntityValueChange}
      inputMode="text"
      maxLength="255"
      value={entityValue}
    />
  );
  findProfileButton = (
    <Button
      variant="primary"
      isDisabled={namespace || entityValue ? false : true}
      onPress={props.onViewButtonClick}
    >
      <Text>View</Text>
    </Button>
  );

  clearButton = (
    <Button variant="primary" isQuiet onPress={props.onClearButtonClick}>
      <Text>Clear</Text>
    </Button>
  );

  return (
    <Grid
      areas={["namespace namespace entityValue entityValue profileViewButton"]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-800"]}
      height="100%"
      // gap="size-100"
      columnGap="size-300"
    >
      <View
        data-testid="namespace-view"
        alignSelf="center"
        gridArea="namespace"
      >
        {identityNamespace}
      </View>
      <View alignSelf="center" gridArea="entityValue">
        {valueInput}
      </View>
      <View
        alignSelf="end"
        marginBottom="size-100"
        gridArea="profileViewButton"
      >
        {findProfileButton}
        {clearButton}
      </View>
    </Grid>
  );
};

FindProfileView.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default React.memo(FindProfileView);
