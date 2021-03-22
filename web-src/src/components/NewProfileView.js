/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import ReactJson from "react-json-view";
import PropTypes from "prop-types";
import {
  ProgressCircle,
  View,
  Grid,
  Flex,
  Heading,
} from "@adobe/react-spectrum";
import { Tabs, Item } from "@react-spectrum/tabs";
import UnionSchemaView from "./UnionSchemaView";
const NewProfileView = (props) => {
  let dataToDisplay = {};
  let schemaContent = (
    <div
      css={css`
        height: calc(100vh - ${props.overFlowOffset || 325}px);
        overflow: auto;
      `}
    >
      <UnionSchemaView
        key={props.schemaId} //important to set a key to re render the component
        ims={props.ims}
        sandboxName={props.sandboxName}
        schemaId={props.schemaId}
        profileData={dataToDisplay}
        isDisabled={props.isDisabled}
      />
    </div>
  );

  let profileJSONContent = (
    <div
      css={css`
        height: calc(100vh - ${props.overFlowOffset || 325}px);
        overflow: auto;
      `}
    >
      <ReactJson
        theme="rjv-default"
        src={dataToDisplay}
        name="profile"
        displayObjectSize={false}
        displayDataTypes={false}
        quotesOnKeys={false}
      />
    </div>
  );

  return (
    <Flex marginStart="size-100" direction="column" gap="size-125">
      <Grid
        areas={["header header header header header"]}
        columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        rows={["size-600"]}
        height="100%"
        columnGap="size-300"
      >
        <View gridArea="header">
          <Heading marginStart="size-100" start="size-50" level={4}>
            Data
          </Heading>
        </View>
      </Grid>

      <Tabs aria-label="Profile Data">
        <Item title="Profile Form" key="profileForm">
          {schemaContent}
        </Item>
        <Item title="Profile" key="profile">
          {profileJSONContent}
        </Item>
      </Tabs>
    </Flex>
  );
};

NewProfileView.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default NewProfileView;
