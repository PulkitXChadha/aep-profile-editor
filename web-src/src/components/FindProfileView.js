import React from "react";
import PropTypes from "prop-types";
import { View, TextField, Grid, Text, Button } from "@adobe/react-spectrum";

import NamespaceList from "./NamespaceList";
const FindProfileView = (props) => {
  let identityNamespace = (
    <NamespaceList
      ims={props.ims}
      sandboxName={props.sandboxName}
      onSelectionChange={props.onNamespaceSelection}
      initialSelection={props.namespace}
    />
  );
  let valueInput = (
    <TextField
      width="100%"
      maxWidth="100%"
      // isDisabled={selectedNamespace ? false : true}
      label={`Enter ID value`}
      labelPosition="top"
      labelAlign="start"
      isRequired={true}
      onChange={props.onEntityValueChange}
      inputMode="text"
      maxLength="255"
      defaultValue={props.identityValue}
    />
  );
  let findProfileButton = null;
  findProfileButton = (
    <Button variant="primary" onPress={props.onButtonClick}>
      <Text>View</Text>
    </Button>
  );
  return (
    <Grid
      areas={[
        "namespace entityValue profileButton entityValue1 profileButton1",
      ]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-800"]}
      height="100%"
      // gap="size-100"
      columnGap="size-300"
    >
      <View alignSelf="center" gridArea="namespace">
        {identityNamespace}
      </View>
      <View alignSelf="center" gridArea="entityValue">
        {valueInput}
      </View>
      <View alignSelf="end" marginBottom="size-100" gridArea="profileButton">
        {findProfileButton}
      </View>
    </Grid>
  );
};

FindProfileView.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default FindProfileView;
