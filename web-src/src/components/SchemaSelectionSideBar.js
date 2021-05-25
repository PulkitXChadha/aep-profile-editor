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
  const [selectedClass, setSelectedClass] = useState(
    props.defaultClassSelection
  );
  const [selectedClassBehaviour, setSelectedClassBehaviour] = useState(
    props.defaultClassBehaviorSelection
  );

  let content = (
    <Flex direction="column" gap="size-125">
      <View>
        <Heading marginStart="size-100" start="size-50" level={4}>
          Union Schemas
        </Heading>
      </View>
      <Divider size="S" />
      <View data-testid="union-schema-list-view">
        <UnionSchemaList
          ims={props.ims}
          sandboxName={props.sandboxName}
          onSelectionChange={(id, behaviour) => {
            props.onSelection(id, behaviour, "", "");
            setSelectedClass(id);
            setSelectedClassBehaviour(behaviour);
          }}
          defaultClassSelection={props.defaultClassSelection}
          defaultClassBehaviorSelection={props.defaultClassBehaviorSelection}
        />
      </View>

      <Divider size="S" />
      {selectedClass && (
        <ContributingSchemaListBox
          ims={props.ims}
          sandboxName={props.sandboxName}
          class={selectedClass}
          onSelectionChange={(id, metaId) => {
            props.onSelection(
              selectedClass,
              selectedClassBehaviour,
              id,
              metaId
            );
          }}
        />
      )}
      <Divider size="S" />
    </Flex>
  );

  return content;
};

SchemaSelectionSideBar.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default React.memo(SchemaSelectionSideBar);
