/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Text,
  Item as SpectrumTab,
  ProgressCircle,
  ListBox,
  Section,
} from "@adobe/react-spectrum";

import Event from "@spectrum-icons/workflow/Event";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";

const ActivationList = (props) => {
  let headers = {};
  headers.authorization = `Bearer ${props.ims.token}`;
  headers["x-gw-ims-org-id"] = props.ims.org;

  let activationList = useActionWebInvoke({
    actionName: "get-activation-list",
    headers: headers,
    params: {},
    cacheResponse: false,
  });

  let activationListContent = (
    <ProgressCircle
      data-testid="activation-list-progress-circle"
      id="activation-list-progress-circle"
      aria-label="Getting Activation List"
      isIndeterminate
      isHidden={!activationList.isLoading}
      marginStart="size-100"
    />
  );

  if (!activationList.isLoading && activationList.error) {
    activationListContent = <Text>No Activations Found</Text>;
  }
  if (
    !activationList.data &&
    !activationList.error &&
    !activationList.isLoading
  ) {
    activationListContent = <Text>No Activations Found</Text>;
  }

  if (!activationList.isLoading && activationList.data) {
    activationListContent = (
      <div
        css={css`
          height: calc(100vh - 110px);
          overflow: auto;
        `}
      >
        <ListBox
          data-testid="activationListBox"
          onSelectionChange={(id) => {
            props.onSelection(id.currentKey);
          }}
          aria-label="Options"
          selectionMode="single"
          height="100%"
          width="100%"
        >
          <Section title="Activation List" height="100%" width="100%">
            {activationList.data
              .sort((a, b) => b.end - a.end)
              .map((activation) => (
                <SpectrumTab
                  key={activation.activationId}
                  textValue={activation.name}
                  height="100%"
                  width="100%"
                >
                  <Event size="S" />
                  <Text>{activation.name}</Text>
                  <Text slot="description">
                    {new Date(activation.end).toString()}
                  </Text>
                </SpectrumTab>
              ))}
          </Section>
        </ListBox>
      </div>
    );
  }

  return activationListContent;
};

ActivationList.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default React.memo(ActivationList);
