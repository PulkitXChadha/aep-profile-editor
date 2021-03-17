import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ProgressCircle,
  Text,
  View,
  Flex,
  Heading,
  Divider,
} from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import UnionSchemaList from "./UnionSchemaList";
import ContributingSchemaListBox from "./ContributingSchemaListBox";
const SchemaSelectionSideBar = (props) => {
  const [selectedClass, setSelectedClass] = useState(props.defaultSelection);
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
    const listData = Object.keys(datasets.data)
      .filter((key) => {
        const tags = datasets.data[key].tags;
        if (tags.unifiedProfile) {
          if (tags.unifiedProfile[0] === "enabled:true") return true;
        }
        return false;
      })
      .map((key) => ({
        name: datasets.data[key].name,
        key: key,
      }));
    picker = (
      <View overflow="auto" height="100%">
        <Flex direction="column" gap="size-125">
          <View>
            <Heading marginStart="size-100" start="size-50" level={4}>
              Union Schemas
            </Heading>
          </View>
          <Divider size="S" />
          <UnionSchemaList
            ims={props.ims}
            sandboxName={props.sandboxName}
            onSelectionChange={(id) => {
              props.onSelection(id, "");
              setSelectedClass(id);
            }}
            defaultSelection={props.defaultSelection}
          />
          <Divider size="S" />
          {selectedClass && (
            <ContributingSchemaListBox
              ims={props.ims}
              sandboxName={props.sandboxName}
              class={selectedClass}
              onSelectionChange={(id) => {
                props.onSelection(selectedSchema, id);
              }}
            />
          )}
          <Divider size="S" />
        </Flex>
      </View>
    );
  }

  return picker;
};

SchemaSelectionSideBar.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default SchemaSelectionSideBar;
