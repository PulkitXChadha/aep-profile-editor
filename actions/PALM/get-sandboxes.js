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
  const sampleResponse = {
    sandboxes: [
      {
        name: "prod",
        title: "Prod",
        state: "active",
        type: "production",
        region: "VA7",
        isDefault: true,
        eTag: -1412772978,
        createdDate: "2020-03-24 18:48:59",
        lastModifiedDate: "2020-03-26 17:50:40",
        createdBy: "system",
        lastModifiedBy: "system",
      },
      {
        name: "sandbox11",
        title: "sandbox11",
        state: "active",
        type: "development",
        region: "VA7",
        isDefault: false,
        eTag: 1433090876,
        createdDate: "2020-09-09 21:11:51",
        lastModifiedDate: "2021-03-12 16:40:06",
        createdBy: "E76F15505E83842B0A495FE6@techacct.adobe.com",
        lastModifiedBy: "system",
      },
      {
        name: "sandbox1",
        title: "sandbox1",
        state: "active",
        type: "development",
        region: "VA7",
        isDefault: false,
        eTag: -1212020407,
        createdDate: "2020-10-29 13:39:55",
        lastModifiedDate: "2021-03-11 18:59:04",
        createdBy: "E76F15505E83842B0A495FE6@techacct.adobe.com",
        lastModifiedBy: "system",
      },
      {
        name: "sandbox24",
        title: "Sandbox 24",
        state: "active",
        type: "development",
        region: "VA7",
        isDefault: false,
        eTag: -1989855906,
        createdDate: "2021-01-20 15:55:46",
        lastModifiedDate: "2021-02-24 20:21:24",
        createdBy: "A5AE57325FE486BB0A495E28@techacct.adobe.com",
        lastModifiedBy: "A5AE57325FE486BB0A495E28@techacct.adobe.com",
      },
    ],
    _page: {
      limit: 50,
      count: 25,
    },
    _links: {
      page: {
        href:
          "https://platform.adobe.io:443/data/foundation/sandbox-management/sandboxes?limit={limit}&offset={offset}",
        templated: true,
      },
    },
  };
  // create a Logger
  const logger = Core.Logger("main", { level: params.LOG_LEVEL || "info" });

  try {
    // 'info' is the default level if not set
    logger.info("Calling the main action");

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params));

    // check for missing request input parameters and headers
    const requiredParams = ["apiKey"];
    const requiredHeaders = ["Authorization", "x-gw-ims-org-id"];
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
    const apiEndpoint = `https://platform.adobe.io/data/foundation/sandbox-management/sandboxes`;

    // fetch content from external api endpoint
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "x-api-key": params.apiKey,
        "x-gw-ims-org-id": params.__ow_headers["x-gw-ims-org-id"],
        Authorization: `Bearer ${token}`,
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
      body: sampleResponse,
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
