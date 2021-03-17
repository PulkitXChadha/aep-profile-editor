import PropTypes from "prop-types";
import React from "react";

import TestProfile from "@spectrum-icons/workflow/TestProfile";
import {
  Text,
  Flex,
  ProgressCircle,
  View,
  Grid,
  Button,
  repeat,
  Header,
  Section,
  Heading,
} from "@adobe/react-spectrum";

import { Link } from "react-router-dom";

const ProfileSummaryView = (props) => {
  return (
    <View
      backgroundColor="gray-50"
      borderWidth="thin"
      borderColor="dark"
      borderRadius="regular"
    >
      <Flex
        marginTop="size-100"
        marginStart="size-100"
        marginBottom="size-100"
        direction="column"
      >
        <TestProfile alignSelf="center" size="XL" />
        <Heading level={4}>
          {`${props.profileData.person.name.firstName} ${props.profileData.person.name.lastName}`}
        </Heading>
        <Header level={3}>Identities</Header>
        {Object.keys(props.profileData.identityMap).map((namespace) =>
          props.profileData.identityMap[namespace].map((identity) => (
            <Link to={`/profile/${namespace}/${identity.id}`}>
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

export default ProfileSummaryView;
