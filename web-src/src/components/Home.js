/*
 * <license header>
 */

import React from "react";
import {
  Heading,
  View,
  IllustratedMessage,
  Content,
  ProgressCircle,
} from "@adobe/react-spectrum";
import NotFound from "@spectrum-icons/illustrations/NotFound";
const Home = ({ isSandboxSelected, isLoading, firstName, error }) => {
  let content = (
    <ProgressCircle
      id="home-page-progress-circle"
      aria-label="Getting Sandboxes"
      isIndeterminate
      isHidden={!isLoading}
      marginStart="size-100"
    />
  );
  if (!isLoading && !isSandboxSelected && !error) {
    content = (
      <IllustratedMessage>
        <NotFound />
        <Heading>Select a Sandbox</Heading>
        <Content>To Continue</Content>
      </IllustratedMessage>
    );
  }
  if (!isLoading && error) {
    content = (
      <IllustratedMessage>
        <NotFound />
        <Heading>Error encountered while getting Sandbox</Heading>
        <Content>{error.message}</Content>
      </IllustratedMessage>
    );
  }
  return (
    <View width="size-6000">
      <Heading level={1}>
        {firstName ? `${firstName}, ` : ""}Welcome to AEP Profile Editor!
      </Heading>

      {content}
    </View>
  );
};

export default Home;
