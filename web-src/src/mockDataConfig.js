/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

//Errors

import MoreCircle from "@spectrum-icons/workflow/MoreCircle";
import mock from "../../test/actions/mock";

// main function that will be executed by Adobe I/O Runtime
function main(actionName, params = {}) {
  switch (actionName) {
    case "get-sandboxes":
      return mock.data.sandboxes;
    case "get-identity-preview-report":
      return mock.data.identityPreviewReport;
    case "get-profile-union-schema":
      return mock.data.profileUnionSchema;
    case "get-identity-namespaces":
      return mock.data.identityNamespaces;
    case "get-profile":
      return mock.data.profile;
    case "get-profile-experience-events":
      return mock.data.experienceEvents;
    case "get-all-datasets":
      return mock.data.datasets;
    case "get-all-schemas":
      return mock.data.schemas;
    case "get-schema-details":
      switch (params) {
        case `_xdm.context.profile__union`:
          return mock.data.profileUnionSchema;
        default:
          return mock.data.crmSchema;
      }
    case "get-all-unions":
      return mock.data.unionSchemas;
    case "post-preview-job":
      return mock.data.postPreviewJob;
    case "get-preview-job-results":
      return mock.data.previewResult;
    case "get-profile-list":
      return mock.data.profileList;
    case "get-all-data-inlets":
      return mock.data.dataInlets;
    default:
    // code block
  }
}

exports.main = main;
