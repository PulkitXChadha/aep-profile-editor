import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ListBox,
  ProgressCircle,
  Item,
  Text,
  ActionButton,
  View,
  Grid,
  Section,
  Flex,
  Heading,
  Divider,
} from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import Workflow from "@spectrum-icons/workflow/Workflow";
const ContributingSchemaListBox = (props) => {
  //Identity Namespace State
  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }
  const schemasList = useActionWebInvoke({
    actionName: "get-all-schemas",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
    },
  });

  let picker = (
    <ProgressCircle
      id="schema-list-progress-circle"
      aria-label="Getting Schemas"
      isIndeterminate
      isHidden={!schemasList.isLoading}
      marginStart="size-100"
    />
  );

  if (schemasList.error) {
    console.log(schemasList.error.message);
  }

  if (!schemasList.data && !schemasList.error && !schemasList.isLoading) {
    picker = <Text>You have no schemasList!</Text>;
  }

  if (schemasList.data) {
    const listData = schemasList.data.results
      .filter((schema) => {
        const tags = schema["meta:immutableTags"] || [];

        return (
          schema["meta:class"] === props.class &&
          tags.find((element) => element === "union")
        );
      })
      .map((schema) => ({
        name: schema.title,
        key: schema["meta:altId"],
        id: schema["$id"],
      }));

    picker = (
      <ListBox
        aria-label="profileSchemas"
        selectionMode="single"
        // itemKey="key"
        onSelectionChange={(id) => {
          props.onSelectionChange(
            id.currentKey,
            listData.find((data) => data.id === id.currentKey).key
          );
        }}
      >
        <Section title="Contributing Schemas">
          {listData.map((item) => (
            <Item
              marginStart="size-100"
              key={(item.key, item.id)}
              textValue={item.name}
            >
              <Workflow />
              <Text>{item.name}</Text>
            </Item>
          ))}
        </Section>
      </ListBox>
    );
  }

  return picker;
};

ContributingSchemaListBox.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default ContributingSchemaListBox;
