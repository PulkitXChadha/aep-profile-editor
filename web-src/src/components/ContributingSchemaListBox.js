/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import {
  ListBox,
  ProgressCircle,
  Item,
  Text,
  Section,
} from "@adobe/react-spectrum";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import Workflow from "@spectrum-icons/workflow/Workflow";
const ContributingSchemaListBox = (props) => {
  let headers = {};
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  const schemasList = useActionWebInvoke({
    actionName: "get-all-schemas",
    headers: headers,
    params: {
      sandboxName: props.sandboxName,
    },
  });

  let picker = (
    <ProgressCircle
      data-testid="schema-list-progress-circle"
      id="schema-list-progress-circle"
      aria-label="Getting Schemas"
      isIndeterminate
      isHidden={!schemasList.isLoading}
      marginStart="size-100"
    />
  );
  let listData = [];
  if (schemasList.error) {
    listData = [];
  }

  if (!schemasList.data && !schemasList.error && !schemasList.isLoading) {
    listData = [];
    picker = <Text>You have no schemasList!</Text>;
  }

  if (schemasList.data) {
    listData = schemasList.data.results
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
      <div
        css={css`
          height: calc(100vh - 260px);
          overflow: auto;
        `}
      >
        <ListBox
          aria-label="profileSchemas"
          selectionMode="single"
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
      </div>
    );
  }

  return picker;
};

ContributingSchemaListBox.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default React.memo(ContributingSchemaListBox);
