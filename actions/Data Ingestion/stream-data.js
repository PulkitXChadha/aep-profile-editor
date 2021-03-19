"use strict";
const fetch = require("node-fetch");

const { Core } = require("@adobe/aio-sdk");
const {
  errorResponse,
  getBearerToken,
  stringParameters,
  checkMissingRequestInputs,
} = require("../utils");

// main function that will be executed by Adobe I/O Runtime
async function main(params) {
  // create a Logger
  const logger = Core.Logger("main", { level: params.LOG_LEVEL || "info" });

  try {
    // 'info' is the default level if not set
    logger.info("Calling the main action");

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params));

    // check for missing request input parameters and headers
    const requiredParams = [
      "inletUrl",
      "sandboxName",
      "dataSetId",
      "schemaRef",
      "payload",
    ];
    const requiredHeaders = ["authorization", "x-gw-ims-org-id"];
    const errorMessage = checkMissingRequestInputs(
      params,
      requiredParams,
      requiredHeaders
    );
    if (errorMessage) {
      // return and log client errors
      return errorResponse(400, errorMessage, logger);
    }

    // extract the user Bearer token from the Authorization header
    const token = getBearerToken(params);

    // replace this with the api you want to access
    const apiEndpoint = `${params.inletUrl}?synchronousValidation=true`;
    let body = {
      header: {
        schemaRef: {
          id: `${params.schemaRef}`,
          contentType: "application/vnd.adobe.xed-full+json;version=1",
        },
        imsOrgId: `${params.__ow_headers["x-gw-ims-org-id"]}`,
        source: {
          name: "GettingStarted",
        },
        datasetId: `${params.dataSetId}`,
      },
      body: {
        xdmMeta: {
          schemaRef: {
            id: `${params.schemaRef}`,
            contentType: "application/vnd.adobe.xed-full+json;version=1",
          },
        },
        xdmEntity: params.payload,
      },
    };
    // fetch content from external api endpoint
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        "x-sandbox-name": params.sandboxName,
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(
        "request to " + apiEndpoint + " failed with status code " + res.status
      );
    }
    const content = await res.json();
    logger.debug("fetch content = " + JSON.stringify(content, null, 2));
    const response = {
      statusCode: 200,
      body: content,
    };

    // log the response status code
    logger.info(`${response.statusCode}: successful request`);
    return response;
  } catch (error) {
    // log any server errors
    logger.error(error);
    // return with 500
    return errorResponse(500, "server error", logger);
  }
}

exports.main = main;
