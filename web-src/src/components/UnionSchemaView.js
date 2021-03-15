import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Button, ProgressCircle, Text } from "@adobe/react-spectrum";

import ImageProfile from "@spectrum-icons/workflow/ImageProfile";
// import Form from "react-jsonschema-form";
import Form from "@rjsf/material-ui";
import { useActionWebInvoke } from "../hooks/useActionWebInvoke";
import {
  ProfileProvider,
  useProfileState,
  useProfileDispatch,
} from "../context/ProfileViewContext.js";
import mock from "../../../test/actions/mock";
const UnionSchemaView = (props) => {
  const profileData = useProfileState();

  let headers = {};
  // set the authorization header and org from the ims props object
  if (props.ims.token && !headers.authorization) {
    headers.authorization = `Bearer ${props.ims.token}`;
  }
  if (props.ims.org && !headers["x-gw-ims-org-id"]) {
    headers["x-gw-ims-org-id"] = props.ims.org;
  }

  const [unionSchemaDetails, setUnionSchemaDetails] = useState("");

  // const unionSchema = useActionWebInvoke({
  //   actionName: "get-profile-union-schema",
  //   headers: headers,
  //   params: {
  //     sandboxName: props.sandboxName,
  //   },
  // });

  useEffect(() => {
    // console.log(unionSchema.data.link);
    // const response = fetch(unionSchema.data.link, {
    //   headers: {
    //     accept:
    //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    //     "accept-language": "en-US,en;q=0.9",
    //     "cache-control": "no-cache",
    //   },
    //   method: "GET",
    // });
    setUnionSchemaDetails(mock.data.profileUnionSchema);
  }, []);

  let content = null;

  if (unionSchemaDetails) {
    delete unionSchemaDetails.properties._id;
    delete unionSchemaDetails.properties._experience;
    delete unionSchemaDetails.properties._repo;
    // delete unionSchemaDetails.properties.homeAddress;
    delete unionSchemaDetails.properties.createdByBatchID;
    delete unionSchemaDetails.properties.identityMap;
    delete unionSchemaDetails.properties.identityPrivacyInfo;
    delete unionSchemaDetails.properties.modifiedByBatchID;
    delete unionSchemaDetails.properties.profilePictureLink;
    delete unionSchemaDetails.properties.repositoryCreatedBy;
    delete unionSchemaDetails.properties.repositoryLastModifiedBy;
    delete unionSchemaDetails.properties.segmentMembership;
    delete unionSchemaDetails.properties.segments;
    delete unionSchemaDetails.properties.timeSeriesEvents;
    delete unionSchemaDetails.properties.timeZone;
    content = (
      <Form schema={unionSchemaDetails} formData={profileData} disabled>
        <Button
          variant="primary"
          onPress={() => {
            console.log(JSON.stringify(unionSchemaDetails));
          }}
        >
          <ImageProfile />
          <Text>Get Profile</Text>
        </Button>
      </Form>
    );
  }

  return content;
};

UnionSchemaView.propTypes = {
  runtime: PropTypes.any,
  ims: PropTypes.any,
};

export default UnionSchemaView;
