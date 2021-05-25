import PropTypes from "prop-types";
import React from "react";

import TestProfile from "@spectrum-icons/workflow/TestProfile";
import { Text, Flex, View, Header, Heading } from "@adobe/react-spectrum";

import { Link } from "react-router-dom";

const ProfileSummaryView = (props) => {
  const person = props.profileData.person || {};
  const personName = person.name || {};
  const firstName = personName.firstName || "";
  const lastName = personName.lastName || "";
  const identityMap = props.profileData.identityMap || {};

  return (
    <View
      backgroundColor="gray-75"
      borderWidth="thin"
      borderColor="dark"
      borderRadius="regular"
      overflow="auto"
    >
      <Flex
        marginTop="size-100"
        marginStart="size-100"
        marginBottom="size-100"
        direction="column"
      >
        <TestProfile alignSelf="center" size="XL" />
        <Heading level={4}>{`${firstName} ${lastName}`}</Heading>
        <Header level={3}>Identities</Header>
        {Object.keys(identityMap).map((namespace) =>
          props.profileData.identityMap[namespace].map((identity) => (
            <Link
              key={`${namespace}-${identity.id}`}
              to={`/profile/${namespace}/${identity.id}`}
            >
              <Text> {identity.id}</Text>
            </Link>
          ))
        )}
      </Flex>
    </View>
  );
};
ProfileSummaryView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default React.memo(ProfileSummaryView);
