/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Divider,
  Flex,
  Heading,
  Grid,
  TextField,
  Checkbox,
  ActionGroup,
  LogicButton,
  Item as SpectrumTab,
  TooltipTrigger,
  Tooltip,
  ActionButton,
} from "@adobe/react-spectrum";

import SearchIcon from "@spectrum-icons/workflow//Search";
import InfoOutlineIcon from "@spectrum-icons/workflow//InfoOutline";

import SampleProfilesView from "./SampleProfilesView";
const SampleProfiles = (props) => {
  const [testProfileFlag, setTestProfileFlag] = useState(true);
  const [firstNameContains, setFirstNameContains] = useState("");
  const [lastNameContains, setLastNameContains] = useState("");
  let [variant, setVariant] = useState("And");
  const [queryExpression, setQueryExpression] = useState();

  const parameterInputsContent = (
    <Flex direction="column" gap="size-50" data-testid="sample-profile-filters">
      <View>
        <Heading alignSelf="center" marginStart="size-100" level={4}>
          Filters
        </Heading>
      </View>
      <Divider size="S" />
      <TextField
        id="filter-first-name-textfield"
        data-testid="filter-first-name-textfield"
        margin="size-100"
        width="80%"
        aria-labelledby="First Name : "
        label="First Name : "
        value={firstNameContains}
        onChange={setFirstNameContains}
        labelPosition="side"
        marginEnd="size-100"
        placeholder="contains"
      />
      <LogicButton
        data-testid="filter-variant-button-1"
        alignSelf="center"
        variant={variant.toLowerCase()}
        onPress={() => setVariant(variant === "Or" ? "And" : "Or")}
        marginTop="size-100"
      >
        {variant}
      </LogicButton>
      <TextField
        id="filter-last-name-textfield"
        data-testid="filter-last-name-textfield"
        marginStart="size-100"
        width="80%"
        aria-labelledby="Last Name : "
        label="Last Name : "
        value={lastNameContains}
        onChange={setLastNameContains}
        labelPosition="side"
        marginTop="size-100"
        marginEnd="size-100"
        placeholder="contains"
      />

      <LogicButton
        data-testid="filter-variant-button-2"
        variant={variant.toLowerCase()}
        alignSelf="center"
        onPress={() => setVariant(variant === "Or" ? "And" : "Or")}
        marginTop="size-100"
      >
        {variant}
      </LogicButton>

      <Checkbox
        data-testid="filter-test-profile-checkbox"
        marginStart="size-100"
        isSelected={testProfileFlag}
        onChange={setTestProfileFlag}
        marginTop="size-100"
      >
        Test Profiles
      </Checkbox>
      <ActionGroup
        position="end"
        alignSelf="center"
        variant="primary"
        marginTop="size-300"
        onAction={() => {
          let testFlagExp = "";
          if (testProfileFlag) {
            testFlagExp = "testProfile = true";
          } else {
            testFlagExp = "1 = 1";
          }
          let firstNameExp = "";
          if (firstNameContains) {
            firstNameExp = ` ${variant.toLowerCase()} person.name.firstName.contains("${firstNameContains}", false)`;
          }
          let lastNameExp = "";
          if (lastNameContains) {
            lastNameExp = ` ${variant.toLowerCase()}  person.name.lastName.contains("${lastNameContains}", false)`;
          }

          setQueryExpression(`${testFlagExp} ${firstNameExp} ${lastNameExp}`);
        }}
      >
        <SpectrumTab key="getSampleProfile" textValue="getSampleProfile">
          <SearchIcon />
          <Text>Get Sample Profiles</Text>
        </SpectrumTab>
      </ActionGroup>
      <Divider size="S" />
    </Flex>
  );
  let mainContent = null;

  if (queryExpression) {
    mainContent = (
      <SampleProfilesView
        key={`${queryExpression}`}
        ims={props.ims}
        sandboxName={props.sandboxName}
        expression={queryExpression}
      />
    );
  }

  return (
    <div
      css={css`
        height: calc(100vh - var(--spectrum-global-dimension-size-800));
      `}
    >
      <Grid
        areas={[
          "header header header header header",
          "subHeader subHeader subHeader subHeader subHeader",
          "parameterInputs mainContent mainContent mainContent mainContent",
        ]}
        columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
        rows={["size-600", "size-800", "auto"]}
        height="100%"
        // gap="size-100"
        columnGap="size-300"
      >
        <View gridArea="header">
          <Heading level={3}>Profiles</Heading>
          <Divider size="M" />
        </View>

        <View gridArea="subHeader">
          <Flex direction="rows">
            <Heading level={4}>Sample Profiles</Heading>
            <TooltipTrigger delay={0}>
              <ActionButton alignSelf="center" isQuiet aria-label="info">
                <InfoOutlineIcon size="XS" />
              </ActionButton>
              <Tooltip>Based on a cached sample of profiles.</Tooltip>
            </TooltipTrigger>
          </Flex>

          <Divider size="M" />
        </View>

        <View gridArea="parameterInputs" backgroundColor="gray-50">
          {parameterInputsContent}
        </View>
        <View gridArea="mainContent" overflow="auto">
          {mainContent}
        </View>
      </Grid>
    </div>
  );
};

SampleProfiles.propTypes = {
  ims: PropTypes.any,
  sandboxName: PropTypes.string,
  onSelectionChange: PropTypes.func,
};

export default React.memo(SampleProfiles);
