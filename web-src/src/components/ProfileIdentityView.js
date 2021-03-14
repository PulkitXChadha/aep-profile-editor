import PropTypes from "prop-types";
import React from "react";

import TestProfile from "@spectrum-icons/workflow/TestProfile";
import {
  Text,
  ProgressCircle,
  View,
  Grid,
  Button,
  repeat,
  Header,
} from "@adobe/react-spectrum";

import { Redirect, Link } from "react-router-dom";

const ProfileIdentityView = (props) => {
  const identityNamespace = Object.keys(props.identityMapData)[0];
  const identityValue = props.identityMapData[identityNamespace][0].id;
  return (
    <View>
      <Link to={`/profile/${identityNamespace}/${identityValue}`}>
        <TestProfile />
        <Text> {identityValue}</Text>
      </Link>
    </View>
  );
};
ProfileIdentityView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default ProfileIdentityView;
