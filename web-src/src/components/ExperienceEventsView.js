/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import ReactJson from "react-json-view";
import PropTypes from "prop-types";
import {
  ProgressCircle,
  Text,
  View,
  Grid,
  Flex,
  Heading,
  ListBox,
  Section,
  ActionGroup,
  Item as SpectrumTab,
} from "@adobe/react-spectrum";

import Event from "@spectrum-icons/workflow/Event";

import EditIcon from "@spectrum-icons/workflow//Edit";
import { Tabs, Item } from "@react-spectrum/tabs";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import UnionSchemaView from "./UnionSchemaView";
const ExperienceEventsView = (props) => {
  const userSettings = null;

  let headers = {};
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  let dataToDisplay = {};
  const experienceEvents = useActionWebInvoke({
    actionName: "get-profile-experience-events",
    headers: headers,
    params: {
      identityNamespace: props.identityNamespace,
      identityValue: props.identityValue,
      sandboxName: props.sandboxName,
    },
    // cacheResponse: false,
  });
  let content = (
    <ProgressCircle
      id="experienceEvents-view-progress-circle"
      aria-label="Getting Experience Events"
      isIndeterminate
      isHidden={!experienceEvents.isLoading}
      marginStart="size-100"
    />
  );

  let schemaContent = content;
  let eventListContent = content;
  if (!experienceEvents.isLoading && experienceEvents.error) {
    content = <Text>No Profile Data Found</Text>;
  }

  if (
    !experienceEvents.data &&
    !experienceEvents.error &&
    !experienceEvents.isLoading
  ) {
    content = <Text>No Experience Events Found</Text>;
  }

  if (!experienceEvents.isLoading && experienceEvents.data) {
    dataToDisplay = experienceEvents.data.children || [];

    eventListContent = (
      <View borderWidth="thin" borderColor="dark" borderRadius="small">
        <div
          css={css`
            height: calc(100vh - 310px);
            overflow: auto;
          `}
        >
          <ListBox
            onSelectionChange={(id) => {
              // console.log(`id.currentKey = ${id.currentKey}`);
              console.log(
                `dataToDisplay element = ${JSON.stringify(
                  dataToDisplay[id.currentKey]
                )}`
              );
            }}
            aria-label="Options"
            selectionMode="single"
          >
            {dataToDisplay
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((events, index) => (
                <SpectrumTab key={index} textValue="Read">
                  <Event size="S" />
                  <Text>{events.entity._id}</Text>
                  <Text slot="description">
                    {new Date(events.entity.timestamp).toString()}
                  </Text>
                </SpectrumTab>
              ))}
          </ListBox>
        </div>
        <View alignSelf="center" justifySelf="center">
          <ActionGroup
            alignSelf="center"
            variant="primary"
            // isDisabled={props.isDisabled}
            // onAction={() => {
            //   setEnableProfileFormEdit(!enableProfileFormEdit);
            //   props.onEditButtonClick(!enableProfileFormEdit);
            // }}
          >
            <SpectrumTab key="addEvent" alignSelf="center">
              <EditIcon />
              <Text>Add Event</Text>
            </SpectrumTab>
          </ActionGroup>
        </View>
      </View>
    );
    content = (
      <div
        css={css`
          height: calc(100vh - 280px);
          overflow: auto;
        `}
      >
        <ReactJson
          theme={userSettings ? "twilight" : "rjv-default"}
          src={dataToDisplay}
          name="events"
          displayObjectSize={false}
          displayDataTypes={false}
          quotesOnKeys={false}
        />
      </div>
    );

    schemaContent = (
      <div
        css={css`
          height: calc(100vh - 280px);
          overflow: auto;
        `}
      >
        <UnionSchemaView
          key={props.schemaId} //important to set a key to re render the component
          ims={props.ims}
          sandboxName={props.sandboxName}
          schemaId={props.schemaId}
          isDisabled={true} //events are non editable
          profileData={dataToDisplay}
        />
      </div>
    );
  }

  return (
    // <Flex marginStart="size-100" direction="column" gap="size-125">
    <Grid
      areas={[
        "header header mainContent mainContent mainContent",
        "timeline timeline mainContent mainContent mainContent",
      ]}
      columns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
      rows={["size-600", "auto"]}
      height="100%"
      columnGap="size-300"
    >
      <View gridArea="header">
        <Heading marginStart="size-100" start="size-50" level={4}>
          Events List
        </Heading>
      </View>
      <View gridArea="mainContent">
        <Tabs aria-label="Form">
          <Item title="Form" key="form">
            {schemaContent}
          </Item>
          <Item title="JSON Data" key="jsonData">
            {content}
          </Item>
        </Tabs>
      </View>

      <View gridArea="timeline">{eventListContent}</View>
    </Grid>

    // </Flex>
  );
};

ExperienceEventsView.propTypes = {
  offer: PropTypes.any,
};

export default ExperienceEventsView;
