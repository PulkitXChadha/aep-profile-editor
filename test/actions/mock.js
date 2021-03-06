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
const BadRequest = {
  err: {
    throws: new Error("Bad Request"),
  },
  message: "Bad Request",
};
const UnauthorizedRequest = {
  err: {
    throws: new Error("Unauthorized"),
  },
  message: "Unauthorized",
};
const ForbiddenRequest = {
  err: {
    throws: new Error("Forbidden Request"),
  },
  message: "Forbidden Request",
};
const NotFound = {
  err: {
    throws: new Error("Not Found"),
  },
  message: "Not Found",
};
const InternalServerError = {
  err: {
    throws: new Error("Internal Server Error"),
  },
  message: "Internal Server Error",
};

//Data

const identityPreviewReport = {
  data: [
    {
      sampleCount: 135628,
      samplePercentage: 0.934489,
      reportTimestamp: "2020-11-15T13:02:05.179",
      fullIDsFragmentCount: 7196312,
      fullIDsCount: 6777012,
      fullIDsPercentage: 0.934435,
      code: "ECID",
      value: "4",
    },
    {
      sampleCount: 9470,
      samplePercentage: 0.065249,
      reportTimestamp: "2020-11-15T13:02:05.179",
      fullIDsFragmentCount: 7290430,
      fullIDsCount: 6860299,
      fullIDsPercentage: 0.945919,
      code: "AAID",
      value: "10",
    },
    {
      sampleCount: 256,
      samplePercentage: 0.001764,
      reportTimestamp: "2020-11-15T13:02:05.179",
      fullIDsFragmentCount: 22729,
      fullIDsCount: 22723,
      fullIDsPercentage: 0.003133,
      code: "Email",
      value: "6",
    },
    {
      sampleCount: 1231,
      samplePercentage: 0.008482,
      reportTimestamp: "2020-11-15T13:02:05.179",
      fullIDsFragmentCount: 161100,
      fullIDsCount: 160166,
      fullIDsPercentage: 0.022084,
      code: "CRMID",
      value: "10179376",
    },
    {
      sampleCount: 60,
      samplePercentage: 0.000413,
      reportTimestamp: "2020-11-15T13:02:05.179",
      fullIDsFragmentCount: 15751,
      fullIDsCount: 15384,
      fullIDsPercentage: 0.002121,
      code: "CRMIDCombo",
      value: "10207836",
    },
  ],
  reportTimestamp: "2020-11-15T13:02:05.179",
};

const sandboxes = {
  sandboxes: [
    {
      name: "sandbox3",
      title: "Sandbox 3",
      state: "active",
      type: "development",
      region: "VA7",
      isDefault: false,
      eTag: 1459970834,
      createdDate: "2020-12-15 21:58:52",
      lastModifiedDate: "2020-12-15 21:58:52",
      createdBy: "7FDC1DB1597654FF0A495C19@AdobeID",
      lastModifiedBy: "7FDC1DB1597654FF0A495C19@AdobeID",
    },
    {
      name: "prod",
      title: "Prod",
      state: "active",
      type: "production",
      region: "VA7",
      isDefault: true,
      eTag: -686554744,
      createdDate: "2020-12-10 18:31:03",
      lastModifiedDate: "2020-12-10 18:31:03",
      createdBy: "acp_provisioning",
      lastModifiedBy: "acp_provisioning",
    },
    {
      name: "sandbox1",
      title: "Sandbox 1",
      state: "active",
      type: "development",
      region: "VA7",
      isDefault: false,
      eTag: 1459970834,
      createdDate: "2020-12-15 21:58:52",
      lastModifiedDate: "2020-12-15 21:58:52",
      createdBy: "7FDC1DB1597654FF0A495C19@AdobeID",
      lastModifiedBy: "7FDC1DB1597654FF0A495C19@AdobeID",
    },
    {
      name: "sandbox3",
      title: "Sandbox 3",
      state: "active",
      type: "development",
      region: "VA7",
      isDefault: false,
      eTag: 1459970834,
      createdDate: "2020-12-15 21:58:52",
      lastModifiedDate: "2020-12-15 21:58:52",
      createdBy: "7FDC1DB1597654FF0A495C19@AdobeID",
      lastModifiedBy: "7FDC1DB1597654FF0A495C19@AdobeID",
    },
  ],
  _page: {
    limit: 50,
    count: 2,
  },
  _links: {
    page: {
      href:
        "https://platform.adobe.io:443/data/foundation/sandbox-management/sandboxes?limit={limit}&offset={offset}",
      templated: true,
    },
  },
};

const identityNamespaces = [
  {
    updateTime: 1551688425455,
    code: "CORE",
    status: "ACTIVE",
    description: "Adobe Audience Manger UUID",
    id: 0,
    createTime: 1551688425455,
    idType: "COOKIE",
    namespaceType: "Standard",
    name: "CORE",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "ECID",
    status: "ACTIVE",
    description: "Adobe Experience Cloud ID",
    id: 4,
    createTime: 1551688425455,
    idType: "COOKIE",
    namespaceType: "Standard",
    name: "ECID",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "AdCloud",
    status: "ACTIVE",
    description: "Adobe AdCloud - ID Syncing Partner",
    id: 411,
    createTime: 1551688425455,
    idType: "COOKIE",
    namespaceType: "Standard",
    name: "AdCloud",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "Email_LC_SHA256",
    status: "ACTIVE",
    description:
      "Email addresses need to be hashed using SHA256 and lowercased. Please also note that leading and trailing spaces need to be trimmed before an email address is normalized. You won't be able to change this setting later",
    id: 11,
    createTime: 1551688425455,
    idType: "Email",
    namespaceType: "Standard",
    name: "Emails (SHA256, lowercased)",
    custom: false,
    hashFunction: "SHA256",
    transform: "lowercase",
  },
  {
    updateTime: 1597996054636,
    code: "Phone_E.164",
    status: "ACTIVE",
    description:
      "Namespace for raw phone numbers in E.164 format. + sign is required",
    id: 17,
    createTime: 1597996054636,
    idType: "Phone",
    namespaceType: "Standard",
    name: "Phone (E.164)",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "GAID",
    status: "ACTIVE",
    description: "This datasource is associated to a Google Ad ID",
    id: 20914,
    createTime: 1551688425455,
    idType: "DEVICE",
    namespaceType: "Standard",
    name: "Google Ad ID (GAID)",
    custom: false,
  },
  {
    updateTime: 1476993749000,
    code: "IDFA",
    status: "ACTIVE",
    description:
      "Apple ID for Advertisers. See: https://support.apple.com/en-us/HT202074 for more info.",
    id: 20915,
    createTime: 1476993749000,
    idType: "DEVICE",
    namespaceType: "Standard",
    name: "Apple IDFA (ID for Advertisers)",
    custom: false,
  },
  {
    updateTime: 1559600046005,
    code: "APNS",
    status: "ACTIVE",
    description: "Identities collected via Apple for Push notification Service",
    id: 20920,
    createTime: 1559600046005,
    idType: "DEVICE",
    namespaceType: "Standard",
    name: "Apple Push Notification service",
    custom: false,
  },
  {
    updateTime: 1559600061630,
    code: "FCM",
    status: "ACTIVE",
    description:
      "Identities collected via Google for Push notification Service",
    id: 20919,
    createTime: 1559600061630,
    idType: "DEVICE",
    namespaceType: "Standard",
    name: "Firebase Cloud Messaging",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "AAID",
    status: "ACTIVE",
    description: "Adobe Analytics (Legacy ID)",
    id: 10,
    createTime: 1551688425455,
    idType: "COOKIE",
    namespaceType: "Standard",
    name: "Adobe Analytics (Legacy ID)",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "Email",
    status: "ACTIVE",
    description: "Email",
    id: 6,
    createTime: 1551688425455,
    idType: "Email",
    namespaceType: "Standard",
    name: "Email",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "WAID",
    status: "ACTIVE",
    description: "Windows AID",
    id: 8,
    createTime: 1551688425455,
    idType: "DEVICE",
    namespaceType: "Standard",
    name: "Windows AID",
    custom: false,
  },
  {
    updateTime: 1551688425455,
    code: "TNTID",
    status: "ACTIVE",
    description: "Adobe Target (TNTID)",
    id: 9,
    createTime: 1551688425455,
    idType: "COOKIE",
    namespaceType: "Standard",
    name: "TNTID",
    custom: false,
  },
  {
    updateTime: 1556676459431,
    code: "Google",
    status: "ACTIVE",
    id: 771,
    createTime: 1556676459431,
    idType: "COOKIE",
    namespaceType: "Integration",
    name: "Google",
    custom: false,
  },
  {
    updateTime: 1570746432714,
    code: "AppNexus",
    status: "ACTIVE",
    description: "Namespace for ID Syncing with AppNexus",
    id: 358,
    createTime: 1570746432714,
    idType: "COOKIE",
    namespaceType: "Integration",
    name: "AppNexus",
    custom: false,
  },
  {
    updateTime: 1570746432714,
    code: "MicrosoftBing",
    status: "ACTIVE",
    description: "Namespace for ID Syncing with Microsoft Bing",
    id: 1957,
    createTime: 1570746432714,
    idType: "COOKIE",
    namespaceType: "Integration",
    name: "Microsoft Bing",
    custom: false,
  },
  {
    updateTime: 1570746432714,
    code: "TradeDesk",
    status: "ACTIVE",
    description: "Namespace for ID Syncing with TradeDesk",
    id: 903,
    createTime: 1570746432714,
    idType: "COOKIE",
    namespaceType: "Integration",
    name: "TradeDesk",
    custom: false,
  },
  {
    updateTime: 1570746432714,
    code: "MediaMath",
    status: "ACTIVE",
    description: "Namespace for ID Syncing with Media Math",
    id: 269,
    createTime: 1570746432714,
    idType: "COOKIE",
    namespaceType: "Integration",
    name: "Media Math",
    custom: false,
  },
  {
    updateTime: 1573151701250,
    code: "AAMSegments",
    status: "ACTIVE",
    description: "Namespace for Audience Manager segments",
    id: 13,
    createTime: 1573151701250,
    idType: "NON_PEOPLE",
    namespaceType: "Integration",
    name: "AAMSegment",
    custom: false,
  },
  {
    updateTime: 1573151701250,
    code: "AAMTraits",
    status: "ACTIVE",
    description: "Namespace for Audience Manager traits",
    id: 14,
    createTime: 1573151701250,
    idType: "NON_PEOPLE",
    namespaceType: "Integration",
    name: "AAMTrait",
    custom: false,
  },
  {
    updateTime: 1594189585349,
    code: "AEPSegments",
    status: "ACTIVE",
    description: "Namespace for AEP segments",
    id: 16,
    createTime: 1594189585349,
    idType: "NON_PEOPLE",
    namespaceType: "Integration",
    name: "AEPSegments",
    custom: false,
  },
  {
    updateTime: 1604597776019,
    code: "Phone_SHA256_E.164",
    status: "ACTIVE",
    description:
      "Phone numbers need to be hashed using SHA256 without any dashes. Hash should be completed by customers on raw phone numbers in E.164 format. Please note that some destinations may have different phone number formatting requirements. Refer to documentation or consult your Adobe representative",
    id: 18,
    createTime: 1604597776019,
    idType: "Phone",
    namespaceType: "Standard",
    name: "Phone (SHA256_E.164)",
    custom: false,
    hashFunction: "SHA256",
  },
  {
    updateTime: 1604597776019,
    code: "Phone_SHA256",
    status: "ACTIVE",
    description:
      "Remove symbols, letters, and any leading zeroes before hashing. Prefix the country code before hashing. Please note that some destinations may have different phone number formatting requirements. Refer to documentation or consult your Adobe representative",
    id: 15,
    createTime: 1597995750042,
    idType: "Phone",
    namespaceType: "Standard",
    name: "Phone (SHA256)",
    custom: false,
    hashFunction: "SHA256",
  },
  {
    updateTime: 1551688425455,
    code: "Phone",
    status: "ACTIVE",
    description: "Phone",
    id: 7,
    createTime: 1551688425455,
    idType: "PHONE_NUMBER",
    namespaceType: "Standard",
    name: "Phone",
    custom: false,
  },
  {
    updateTime: 1608069578646,
    code: "journey",
    status: "ACTIVE",
    description: "For journey / step event relationship",
    id: 10540836,
    createTime: 1608069578646,
    idType: "NON_PEOPLE",
    namespaceType: "Custom",
    name: "journey step event namespace",
    custom: true,
  },
];

const experienceEvents = {
  _links: { next: { href: "" } },
  _page: {
    count: 18,
    next: "",
    orderby: "timestamp",
    start: "da770f6f-4278-44e0-9850-3a707568b6c8-0",
  },
  children: [
    {
      entity: {
        _id: "1c24eb9f-2ea3-4af9-aa9a-68499ad5a5d4-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:41:44.601+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:41:44.601Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/",
            name: "BPme Rewards | Say hello to BP's rewards programme",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "https://www.bpmerewards.co.uk/login" },
        },
      },
      entityId: "1c24eb9f-2ea3-4af9-aa9a-68499ad5a5d4-0",
      lastModifiedAt: "2021-03-11T21:41:46Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498904601,
    },
    {
      entity: {
        _id: "020ddbc9-a5c5-42a9-8922-2ea34ccac884-0",
        _salesvelocity: {
          identification: {
            core: {
              ecid: "48836259243425874010957781830216251374",
              email: "biss+bp+000@adobetest.com",
            },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "profile.login",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:41:13.282+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:41:13.282Z",
        web: {
          webInteraction: { linkClicks: { value: 1 }, name: "Login" },
          webPageDetails: { URL: "https://www.bpmerewards.co.uk/login" },
          webReferrer: { URL: "" },
        },
      },
      entityId: "020ddbc9-a5c5-42a9-8922-2ea34ccac884-0",
      lastModifiedAt: "2021-03-11T21:41:14Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498873282,
    },
    {
      entity: {
        _id: "d3bcdfe6-0339-4c65-ad43-98f295cf6e1d-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:40:35.726+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:40:35.726Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/login",
            name: "Login",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "d3bcdfe6-0339-4c65-ad43-98f295cf6e1d-0",
      lastModifiedAt: "2021-03-11T21:40:36Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498835726,
    },
    {
      entity: {
        _id: "834afd9d-dc8d-4ffe-a369-fee62649364a-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:40:19.096+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:40:19.096Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/",
            name: "BPme Rewards | Say hello to BP's rewards programme",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "https://www.bpmerewards.co.uk/login" },
        },
      },
      entityId: "834afd9d-dc8d-4ffe-a369-fee62649364a-0",
      lastModifiedAt: "2021-03-11T21:40:21Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498819096,
    },
    {
      entity: {
        _id: "071279b7-37e9-457b-9dc6-28085b1b0bb6-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:35:38.770+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:35:38.770Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/",
            name: "BPme Rewards | Say hello to BP's rewards programme",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "https://www.bpmerewards.co.uk/login" },
        },
      },
      entityId: "071279b7-37e9-457b-9dc6-28085b1b0bb6-0",
      lastModifiedAt: "2021-03-11T21:35:40Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498538770,
    },
    {
      entity: {
        _id: "49704a70-7f4d-4a90-9516-b4771ece093d-0",
        _salesvelocity: {
          identification: {
            core: {
              ecid: "48836259243425874010957781830216251374",
              email: "biss+bp+001@adobetest.com",
            },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "profile.login",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:35:08.980+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:35:08.980Z",
        web: {
          webInteraction: { linkClicks: { value: 1 }, name: "Login" },
          webPageDetails: { URL: "https://www.bpmerewards.co.uk/login" },
          webReferrer: { URL: "" },
        },
      },
      entityId: "49704a70-7f4d-4a90-9516-b4771ece093d-0",
      lastModifiedAt: "2021-03-11T21:35:09Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498508980,
    },
    {
      entity: {
        _id: "65665bbd-c3eb-46ef-8319-e03342bc42e6-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:34:31.460+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:34:31.460Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/login",
            name: "Login",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "65665bbd-c3eb-46ef-8319-e03342bc42e6-0",
      lastModifiedAt: "2021-03-11T21:34:32Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498471460,
    },
    {
      entity: {
        _id: "7bef3d53-a1dc-4b69-9b93-c01d89efffb1-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:33:33.295+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:33:33.295Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/",
            name: "BPme Rewards | Say hello to BP's rewards programme",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "https://www.bpmerewards.co.uk/login" },
        },
      },
      entityId: "7bef3d53-a1dc-4b69-9b93-c01d89efffb1-0",
      lastModifiedAt: "2021-03-11T21:33:35Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498413295,
    },
    {
      entity: {
        _id: "52d95aa4-5f4b-45d3-b715-978ca5b40ceb-0",
        _salesvelocity: {
          identification: {
            core: {
              ecid: "48836259243425874010957781830216251374",
              email: "hello",
            },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "profile.login",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:33:06.923+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:33:06.923Z",
        web: {
          webInteraction: { linkClicks: { value: 1 }, name: "Login" },
          webPageDetails: { URL: "https://www.bpmerewards.co.uk/login" },
          webReferrer: { URL: "" },
        },
      },
      entityId: "52d95aa4-5f4b-45d3-b715-978ca5b40ceb-0",
      lastModifiedAt: "2021-03-11T21:33:07Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498386923,
    },
    {
      entity: {
        _id: "9f1de5b8-41e8-411b-a380-df03659dbcd6-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:31:15.966+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:31:15.966Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/login",
            name: "Login",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "9f1de5b8-41e8-411b-a380-df03659dbcd6-0",
      lastModifiedAt: "2021-03-11T21:31:17Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498275966,
    },
    {
      entity: {
        _id: "d15ac04d-de73-45af-be2b-4e09de13a848-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:30:44.480+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:30:44.480Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/gifting/",
            name: "Gifting",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "d15ac04d-de73-45af-be2b-4e09de13a848-0",
      lastModifiedAt: "2021-03-11T21:30:46Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498244480,
    },
    {
      entity: {
        _id: "b18dcc51-dca1-483d-97fc-062c09729d17-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:28:45.950+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:28:45.950Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/contact-us/",
            name: "Contact us",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "b18dcc51-dca1-483d-97fc-062c09729d17-0",
      lastModifiedAt: "2021-03-11T21:28:47Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498125950,
    },
    {
      entity: {
        _id: "e38d2da6-2a48-4d7f-a22d-56d75e9cece6-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        commerce: { productViews: { value: 1 } },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:28:44.391+00:00",
          localTimezoneOffset: 0,
        },
        productListItems: [
          {
            SKU: "",
            _salesvelocity: {
              core: {
                imageURL: "",
                mainCategory: "",
                productURL: "https://www.bpmerewards.co.uk/contact-us/",
              },
            },
            name: "",
            priceTotal: -1,
            productAddMethod: "Web",
            quantity: 1,
          },
        ],
        timestamp: "2021-03-11T21:28:44.391Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/contact-us/",
            name: " : ",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "e38d2da6-2a48-4d7f-a22d-56d75e9cece6-0",
      lastModifiedAt: "2021-03-11T21:28:46Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498124391,
    },
    {
      entity: {
        _id: "fc3c1e46-8fd5-4fc8-8a5a-a10af7cb70dc-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:28:08.474+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:28:08.474Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/help/",
            name: "FAQ",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "fc3c1e46-8fd5-4fc8-8a5a-a10af7cb70dc-0",
      lastModifiedAt: "2021-03-11T21:28:10Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498088474,
    },
    {
      entity: {
        _id: "313c195d-15e1-4087-af48-5af7812b3247-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        commerce: { productViews: { value: 1 } },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:28:06.872+00:00",
          localTimezoneOffset: 0,
        },
        productListItems: [
          {
            SKU: "",
            _salesvelocity: {
              core: {
                imageURL: "",
                mainCategory: "",
                productURL: "https://www.bpmerewards.co.uk/help/",
              },
            },
            name: "",
            priceTotal: -1,
            productAddMethod: "Web",
            quantity: 1,
          },
        ],
        timestamp: "2021-03-11T21:28:06.872Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/help/",
            name: " : ",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "313c195d-15e1-4087-af48-5af7812b3247-0",
      lastModifiedAt: "2021-03-11T21:28:09Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615498086872,
    },
    {
      entity: {
        _id: "57a79102-f404-49b8-8daa-3b89b0477991-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:26:20.716+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:26:20.716Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/login",
            name: "Login",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "57a79102-f404-49b8-8daa-3b89b0477991-0",
      lastModifiedAt: "2021-03-11T21:26:22Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615497980716,
    },
    {
      entity: {
        _id: "ffb0bf78-a2fb-4c91-ac44-96023166d768-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        commerce: { productViews: { value: 1 } },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor",
          version: "2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:26:19.511+00:00",
          localTimezoneOffset: 0,
        },
        productListItems: [
          {
            SKU: "",
            _salesvelocity: {
              core: {
                imageURL: "",
                mainCategory: "",
                productURL: "https://www.bpmerewards.co.uk/login",
              },
            },
            name: "",
            priceTotal: -1,
            productAddMethod: "Web",
            quantity: 1,
          },
        ],
        timestamp: "2021-03-11T21:26:19.511Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/login",
            name: " : ",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "ffb0bf78-a2fb-4c91-ac44-96023166d768-0",
      lastModifiedAt: "2021-03-11T21:26:21Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615497979511,
    },
    {
      entity: {
        _id: "da770f6f-4278-44e0-9850-3a707568b6c8-0",
        _salesvelocity: {
          identification: {
            core: { ecid: "48836259243425874010957781830216251374" },
          },
        },
        device: {
          screenHeight: 960,
          screenOrientation: "landscape",
          screenWidth: 1707,
        },
        environment: {
          browserDetails: {
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            viewportHeight: 818,
            viewportWidth: 946,
          },
          ipV4: "84.64.57.92",
          type: "browser",
        },
        eventType: "web.webpagedetails.pageViews",
        identityMap: {
          ECID: [
            {
              authenticatedState: "ambiguous",
              id: "48836259243425874010957781830216251374",
              primary: true,
            },
          ],
        },
        implementationDetails: {
          environment: "browser",
          name: "https://ns.adobe.com/experience/alloy/reactor/reactor",
          version: "2.4.0+2.4.0+2.4.0",
        },
        placeContext: {
          localTime: "2021-03-11T21:26:15.651+00:00",
          localTimezoneOffset: 0,
        },
        timestamp: "2021-03-11T21:26:15.651Z",
        web: {
          webPageDetails: {
            URL: "https://www.bpmerewards.co.uk/login",
            name: "Login",
            pageViews: { value: 1 },
          },
          webReferrer: { URL: "" },
        },
      },
      entityId: "da770f6f-4278-44e0-9850-3a707568b6c8-0",
      lastModifiedAt: "2021-03-11T21:26:17Z",
      relatedEntityId: "A28JIFRU5x_GQ-73XAKAuUoN",
      timestamp: 1615497975651,
    },
  ],
};
const profile = {
  GhxXokFpY3JtaWQ6gh_mWA: {
    entityId: "GhxXokFpY3JtaWQ6gh_mWA",
    mergePolicy: {
      id: "2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
    },
    sources: ["604a6975dae8b91948b96d93"],
    tags: ["batchId-01F0HAT4MX4X5Q2G1HHR20CNRC"],
    identityGraph: ["GhxXokFpY3JtaWQ6gh_mWA"],
    entity: {
      personalEmail: {
        address: "facer1988@outlook.com",
      },
      homeAddress: {
        city: "Springfield",
        street1: "16 Nautilus",
        country: "United States",
        postalCode: "37407",
        stateProvince: "California",
      },
      mobilePhone: {
        number: "563-463-7268",
      },
      person: {
        name: {
          lastName: "Zamora",
          firstName: "Barrett",
        },
        birthDate: "1970-03-25T00:00:00Z",
      },
      _adobedemoamericas270: {
        creditProfileDetails: {
          creditRating: 2408,
        },
        identification: {
          Email: "facer1988@outlook.com",
          CRMID: "crmid:5826079",
        },
      },
      identityMap: {
        crmid: [
          {
            id: "crmid:5826079",
          },
        ],
      },
    },
    lastModifiedAt: "2021-03-11T19:09:50Z",
  },
};
const datasets = {
  "604a69d1621e781948ba1a72": {
    name: "Profile-Snapshot-Export-d72b160f-1189-4104-87d7-89c784cf79a0",
    tags: {
      "adobe/siphon/partition/definition": ["identity(_ACP_BATCHID)"],
      "aep/siphon/partitions": ["_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/pqs/table": [
        "profile_snapshot_export_d72b160f_1189_4104_87d7_89c784cf79a0",
      ],
      "aep/siphon/expire-snapshot-timestamp": ["1615725277303"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      "aep/siphon/cleanup/trash/timestamp": ["1615811200551"],
      acp_validationContext: ["disabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: [
        "enabled:false",
        "mergePolicyId:2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
        "ups_snapshot_type:cardinal:full-attr",
      ],
      "aep/siphon/cleanup/meta/timestamp": ["1615811200595"],
    },
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0TW47RXEK502PDMMESB3NH9",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0TW47RXEK502PDMMESB3NH9",
    version: "1.0.9",
    created: 1615489489794,
    updated: 1615823851936,
    createdClient: "aep_core_profile_snapshot",
    createdUser: "aep_core_profile_snapshot@AdobeID",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a69d1621e781948ba1a73",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a69d1621e781948ba1a72/views/604a69d1621e781948ba1a73/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id: "https://ns.adobe.com/xdm/context/profile__union",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1",
    },
  },
  "604a69c3925abf194a088dd9": {
    name: "Transaction EE Dataset",
    description: "Transaction EE Dataset",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    dataSourceId: 1124977,
    tags: {
      "adobe/siphon/partition/definition": [
        "day(timestamp, _ACP_DATE)",
        "identity(_ACP_BATCHID)",
      ],
      "aep/siphon/partitions": ["_ACP_DATE", "_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/siphon/buffered-promotion-recency": ["live"],
      "adobe/siphon/use-buffered-promotion": ["true"],
      "adobe/pqs/table": ["transaction_ee_dataset"],
      "aep/siphon/expire-snapshot-timestamp": ["1615489559427"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      acp_validationContext: ["enabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: ["enabled:true", "enabledAt:2021-03-11 19:05:29"],
      unifiedIdentity: ["enabled:true"],
    },
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0HAWAB0DBGSTJSGQG1RHA1A",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0HAWAB0DBGSTJSGQG1RHA1A",
    version: "1.0.7",
    created: 1615489477088,
    updated: 1615489940926,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a69c5925abf194a088ddb",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a69c3925abf194a088dd9/views/604a69c5925abf194a088ddb/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/f57defbef0cc55ec049104b68a2145d173a469adf0f54a96",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a69b5e1c5a019490289bd": {
    name: "Reduced Web EE Dataset",
    description: "Reduced Web EE Dataset",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    dataSourceId: 1124976,
    tags: {
      "adobe/siphon/partition/definition": [
        "day(timestamp, _ACP_DATE)",
        "identity(_ACP_BATCHID)",
      ],
      "aep/siphon/partitions": ["_ACP_DATE", "_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/siphon/buffered-promotion-recency": ["live"],
      "adobe/siphon/use-buffered-promotion": ["true"],
      "adobe/pqs/table": ["reduced_web_ee_dataset"],
      "aep/siphon/expire-snapshot-timestamp": ["1615489771742"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      acp_validationContext: ["enabled"],
      "adobe/siphon/table/format": ["iceberg"],
    },
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0HAW3YBHD4NVSJPVBV3C9AA",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0HAW3YBHD4NVSJPVBV3C9AA",
    version: "1.0.5",
    created: 1615489464728,
    updated: 1615489773824,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a69b8e1c5a019490289bf",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a69b5e1c5a019490289bd/views/604a69b8e1c5a019490289bf/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/b86dd2ef8905a118fe520454bba5c5c99c63835fafd5cad2",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a6994621e781948ba1a6e": {
    name: "Onboarded Profile Data Dataset",
    description: "Onboarded Profile Data Dataset",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    dataSourceId: 1124975,
    tags: {
      "adobe/siphon/partition/definition": ["identity(_ACP_BATCHID)"],
      "aep/siphon/partitions": ["_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/pqs/table": ["onboarded_profile_data_dataset"],
      "aep/siphon/expire-snapshot-timestamp": ["1615489520228"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      acp_validationContext: ["enabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: ["enabled:true", "enabledAt:2021-03-11 19:03:59"],
      unifiedIdentity: ["enabled:true"],
    },
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0HAV6ZFB7XKS8MSVFZ5T6V4",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0HAV6ZFB7XKS8MSVFZ5T6V4",
    version: "1.0.7",
    created: 1615489436808,
    updated: 1615489852062,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a699c621e781948ba1a6f",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a6994621e781948ba1a6e/views/604a699c621e781948ba1a6f/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/56814b32ebb2e95fa3ba166ae908822c952a822800331885",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a698655df3f1948ce14c8": {
    name: "Propensity Scores Profile Dataset",
    description: "Propensity Scores Profile Dataset",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    tags: {
      "adobe/siphon/partition/definition": ["identity(_ACP_BATCHID)"],
      "aep/siphon/partitions": ["_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/pqs/table": ["propensity_scores_profile_dataset"],
      "aep/siphon/expire-snapshot-timestamp": ["1615489503482"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      acp_validationContext: ["enabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: ["enabled:true", "enabledAt:2021-03-11 19:03:36"],
      unifiedIdentity: ["enabled:true"],
    },
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0HAT70M5SWSB8S1Z8XQ79TX",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0HAT70M5SWSB8S1Z8XQ79TX",
    version: "1.0.7",
    created: 1615489414554,
    updated: 1615489547336,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a698655df3f1948ce14c9",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a698655df3f1948ce14c8/views/604a698655df3f1948ce14c9/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/e977cf61e3a16ce3cdc6964e86cf629565712dc60a683cc6",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a6975dae8b91948b96d93": {
    name: "CRM Profile Dataset",
    description: "CRM Profile Dataset",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    dataSourceId: 1124974,
    tags: {
      "adobe/siphon/partition/definition": ["identity(_ACP_BATCHID)"],
      "aep/siphon/partitions": ["_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/pqs/table": ["crm_profile_dataset"],
      "aep/siphon/expire-snapshot-timestamp": ["1615489506311"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      "aep/siphon/cleanup/trash/timestamp": ["1615489546698"],
      acp_validationContext: ["enabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: ["enabled:true", "enabledAt:2021-03-11 19:03:22"],
      "aep/siphon/cleanup/meta/timestamp": ["1615489546771"],
      unifiedIdentity: ["enabled:true"],
    },
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0HAW74KQ8EQXMC3NNZSC02G",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0HAW74KQ8EQXMC3NNZSC02G",
    version: "1.0.8",
    created: 1615489400923,
    updated: 1615489902548,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a6978dae8b91948b96d94",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a6975dae8b91948b96d93/views/604a6978dae8b91948b96d94/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/cb840ce6a216b3d78c832310924665167726123a9aedbe09",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a696e925abf194a088dd3": {
    name:
      "Segmentdefinition-Snapshot-Export-f481a911-61b0-4a71-a653-b3efb9a81846",
    tags: {
      "adobe/siphon/partition/definition": ["identity(_ACP_BATCHID)"],
      "aep/siphon/partitions": ["_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/pqs/table": [
        "segmentdefinition_snapshot_export_f481a911_61b0_4a71_a653_b3efb9",
      ],
      "aep/siphon/expire-snapshot-timestamp": ["1615812912427"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      "aep/siphon/cleanup/trash/timestamp": ["1615638832328"],
      acp_validationContext: ["disabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: [
        "enabled:false",
        "mergePolicyId:92e99c49-0cfa-4e24-959c-d8e731398c2c",
        "ups_snapshot_type:cardinal:full-attr",
      ],
      "aep/siphon/cleanup/meta/timestamp": ["1615638832374"],
    },
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0TW43BSBH4WKAM4YYCB70W1",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0TW43BSBH4WKAM4YYCB70W1",
    version: "1.0.9",
    created: 1615489390951,
    updated: 1615823851932,
    createdClient: "aep_core_profile_snapshot",
    createdUser: "aep_core_profile_snapshot@AdobeID",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a696e925abf194a088dd4",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a696e925abf194a088dd3/views/604a696e925abf194a088dd4/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id: "https://ns.adobe.com/xdm/context/segmentdefinition__union",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1",
    },
  },
  "604a6965b880cb1948a2510c": {
    name: "Call Center EE Dataset",
    description: "Call Center EE Dataset",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    dataSourceId: 1124973,
    tags: {
      "adobe/siphon/partition/definition": [
        "day(timestamp, _ACP_DATE)",
        "identity(_ACP_BATCHID)",
      ],
      "aep/siphon/partitions": ["_ACP_DATE", "_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/siphon/buffered-promotion-recency": ["live"],
      "adobe/siphon/use-buffered-promotion": ["true"],
      "adobe/pqs/table": ["call_center_ee_dataset"],
      "aep/siphon/expire-snapshot-timestamp": ["1615490654149"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      acp_validationContext: ["enabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: ["enabled:true", "enabledAt:2021-03-11 19:03:05"],
      unifiedIdentity: ["enabled:true"],
    },
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0HASEQ3FAMXR1GGW04JXTG7",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0HASEQ3FAMXR1GGW04JXTG7",
    version: "1.0.7",
    created: 1615489383083,
    updated: 1615490705484,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a6967b880cb1948a2510d",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a6965b880cb1948a2510c/views/604a6967b880cb1948a2510d/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/3b9bea9cd8f742ea8ccb48c2acff3454687a4ac2e06e2f38",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a69647a4f3419475db1c3": {
    name: "Profile-Snapshot-Export-8bdd102f-64e3-47d0-8ac8-be2cde87253b",
    tags: {
      "adobe/siphon/partition/definition": ["identity(_ACP_BATCHID)"],
      "aep/siphon/partitions": ["_ACP_BATCHID"],
      acp_granular_plugin_validation_flags: [
        "identity:enabled",
        "profile:enabled",
      ],
      "adobe/pqs/table": [
        "profile_snapshot_export_8bdd102f_64e3_47d0_8ac8_be2cde87253b",
      ],
      "aep/siphon/expire-snapshot-timestamp": ["1615725287015"],
      acp_granular_validation_flags: ["requiredFieldCheck:enabled"],
      "aep/siphon/cleanup/trash/timestamp": ["1615811200337"],
      acp_validationContext: ["disabled"],
      "adobe/siphon/table/format": ["iceberg"],
      unifiedProfile: [
        "enabled:false",
        "mergePolicyId:8424d652-1451-4f1a-8e60-202393a464cb",
        "ups_snapshot_type:cardinal:full-attr",
      ],
      "aep/siphon/cleanup/meta/timestamp": ["1615811200384"],
    },
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    namespace: "ACP",
    state: "DRAFT",
    lastBatchId: "01F0TW4AX3QDYC8APVNWC7G996",
    lastBatchStatus: "success",
    lastSuccessfulBatch: "01F0TW4AX3QDYC8APVNWC7G996",
    version: "1.0.9",
    created: 1615489380444,
    updated: 1615823851928,
    createdClient: "aep_core_profile_snapshot",
    createdUser: "aep_core_profile_snapshot@AdobeID",
    updatedUser: "acp_foundation_dataTracker@AdobeID",
    viewId: "604a69647a4f3419475db1c4",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a69647a4f3419475db1c3/views/604a69647a4f3419475db1c4/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id: "https://ns.adobe.com/xdm/context/profile__union",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1",
    },
  },
  "604a6960122f571949365059": {
    name: "Website interactions EE Dataset",
    description: "Website interactions EE Dataset",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    updatedUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    version: "1.0.0",
    dataSourceId: 1124972,
    tags: {
      "adobe/pqs/table": ["website_interactions_ee_dataset"],
      "adobe/siphon/table/format": ["parquet"],
    },
    created: 1615489378931,
    updated: 1615489379082,
    namespace: "ACP",
    state: "DRAFT",
    viewId: "604a6962122f57194936505a",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a6960122f571949365059/views/604a6962122f57194936505a/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/cc72100693f78ace14e725d43d589bef08a6327295802eae",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a69615f290c1948a085a3": {
    name: "Segment Ingestion Dataset",
    tags: {
      unifiedProfile: [
        "enabled:true",
        "identityField:identityMap",
        "profileInstanceId:ups",
        "enabledAt:2021-03-11 19:03:08",
        "upsSegmentDefIngestion:ups",
      ],
      "adobe/siphon/table/format": ["parquet"],
      "adobe/pqs/table": ["segment_ingestion_dataset"],
      unifiedIdentity: ["enabled:true"],
    },
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    namespace: "ACP",
    state: "DRAFT",
    version: "1.0.1",
    created: 1615489377377,
    updated: 1615489389446,
    createdClient: "acp_core_unifiedProfile_feeds",
    createdUser: "acp_core_unifiedProfile_feeds@AdobeID",
    updatedUser: "acp_core_unifiedProfile_feeds@AdobeID",
    viewId: "604a69615f290c1948a085a4",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a69615f290c1948a085a3/views/604a69615f290c1948a085a4/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/22d9718ab9c2f34da70d533717f9d1340defee43a46e7d53",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1",
    },
  },
  "604a695bce9e2f1948356f53": {
    name: "FSI Demo Data midValues",
    description: "Analytics Data Connector for report suite Media Demo Data",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    tags: {
      unifiedProfile: ["enabled:true", "enabledAt:2021-03-11 19:02:53"],
      "adobe/siphon/table/format": ["parquet"],
      "adobe/pqs/table": ["fsi_demo_data_midvalues"],
      unifiedIdentity: ["enabled:true"],
    },
    namespace: "ACP",
    state: "DRAFT",
    version: "1.0.2",
    created: 1615489371607,
    updated: 1615489421842,
    createdClient: "5b7ca58b978b4f9889c7f3e574d46ac3",
    createdUser: "E76F15505E83842B0A495FE6@techacct.adobe.com",
    updatedUser: "acp_core_unifiedProfile_feeds@AdobeID",
    viewId: "604a695bce9e2f1948356f54",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a695bce9e2f1948356f53/views/604a695bce9e2f1948356f54/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/4b7b7b176c3724da6a9fac240d0df83d680422dcf2a2a524",
      contentType: "application/vnd.adobe.xed+json;version=1",
    },
  },
  "604a68ab71245c1947d47156": {
    name: "Journey Step Profile Events",
    description:
      "Experience Events for steps taken in a Journey along with an Identity Map to be used for mapping to an individual Journey Participant.",
    tags: {
      unifiedIdentity: ["enabled:true"],
      unifiedProfile: ["enabled:false"],
      "adobe/pqs/table": ["journey_step_profile_events"],
      "adobe/siphon/table/format": ["parquet"],
    },
    createdUser: "bso_core_services@AdobeID",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    createdClient: "bso_core_services",
    updatedUser: "bso_core_services@AdobeID",
    version: "1.0.0",
    created: 1615489195967,
    updated: 1615489196077,
    namespace: "ACP",
    state: "DRAFT",
    viewId: "604a68ab71245c1947d47157",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a68ab71245c1947d47156/views/604a68ab71245c1947d47157/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/b0f26a27a2319794f679460b3a5557484e181df288085314",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1.0",
    },
  },
  "604a68ab75b95b194f091787": {
    name: "Journey Step Events",
    description: "Journey step event that is tied to a Journey Metadata.",
    tags: {
      unifiedIdentity: ["enabled:false"],
      unifiedProfile: ["enabled:false"],
      "adobe/pqs/table": ["journey_step_events"],
      "adobe/siphon/table/format": ["parquet"],
    },
    createdUser: "bso_core_services@AdobeID",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    createdClient: "bso_core_services",
    updatedUser: "bso_core_services@AdobeID",
    version: "1.0.0",
    created: 1615489195713,
    updated: 1615489195808,
    namespace: "ACP",
    state: "DRAFT",
    viewId: "604a68ab75b95b194f091788",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a68ab75b95b194f091787/views/604a68ab75b95b194f091788/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/5c5d3fb3c9cc87a8c9b4e991608029ca123e12eb938c8de7",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1.0",
    },
  },
  "604a68ab527c0019483427e1": {
    name: "Journeys",
    description: "Journey Metadata to describe Journeys.",
    tags: {
      unifiedIdentity: ["enabled:false"],
      unifiedProfile: ["enabled:false"],
      "adobe/pqs/table": ["journeys"],
      "adobe/siphon/table/format": ["parquet"],
    },
    createdUser: "bso_core_services@AdobeID",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    createdClient: "bso_core_services",
    updatedUser: "bso_core_services@AdobeID",
    version: "1.0.0",
    created: 1615489195449,
    updated: 1615489195532,
    namespace: "ACP",
    state: "DRAFT",
    viewId: "604a68ab527c0019483427e2",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a68ab527c0019483427e1/views/604a68ab527c0019483427e2/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/9557c950914cea0139792bda64f381a59fc0763f02d956c5",
      contentType: "application/vnd.adobe.xed-full-notext+json; version=1.0",
    },
  },
  "604a687cb7db64194887a820": {
    name: "ODE DecisionEvents - sandbox1 decisioning",
    description:
      "Autogenerated data set for ODE DecisionEvents for container sandbox1 decisioning",
    createdUser: "acp_core_omnihub_decisioning@AdobeID",
    imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
    sandboxId: "f5d54bd8-24d9-4472-954b-d824d9447203",
    createdClient: "acp_core_omnihub_decisioning",
    updatedUser: "acp_core_omnihub_decisioning@AdobeID",
    version: "1.0.0",
    tags: {
      "adobe/pqs/table": ["ode_decisionevents_sandbox1_decisioning"],
      "adobe/siphon/table/format": ["parquet"],
    },
    created: 1615489148305,
    updated: 1615489149372,
    namespace: "ACP",
    state: "DRAFT",
    viewId: "604a687cb7db64194887a821",
    fileDescription: {
      persisted: true,
      containerFormat: "parquet",
      format: "parquet",
    },
    files:
      "@/dataSets/604a687cb7db64194887a820/views/604a687cb7db64194887a821/files",
    schemaMetadata: {
      delta: [],
      gdpr: [],
    },
    schemaRef: {
      id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/be6fa80b3c7d0c8eb80c2dc37d7583e1b81cbe06c787800b",
      contentType: "application/vnd.adobe.xed-full+json;version=1.0",
    },
  },
};
const unionSchemas = {
  results: [
    {
      $id: "https://ns.adobe.com/xdm/context/profile__union",
      "meta:altId": "_xdm.context.profile__union",
      "meta:resourceType": "unions",
      version: "1.0",
      title: "XDM Individual Profile",
      type: "object",
      description:
        "An XDM Individual Profile forms a singular representation of the attributes and interests of both identified and partially-identified individuals. Less-identified profiles may contain only anonymous behavioral signals, such as browser cookies, while highly-identified profiles may contain detailed personal information such as name, date of birth, location, and email address. As a profile grows, it becomes a robust repository of personal information, identification information, contact details, and communication preferences for an individual.",
      allOf: [
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/bfc38d1f79ef0393502e00dd56902aeb0124e9fc046b4f4f",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-person-details",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-test-profile",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-personal-details",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
        },
        {
          $ref: "https://ns.adobe.com/experience/profile/profile-all",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-preferences-details",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/9ef09c18c3095fa93eb135e817b5e2355167e9b6653b6bb7",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extends": [
        "https://ns.adobe.com/adobedemoamericas270/mixins/bfc38d1f79ef0393502e00dd56902aeb0124e9fc046b4f4f",
        "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
        "https://ns.adobe.com/xdm/context/profile-test-profile",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/adobedemoamericas270/schemas/d329ec120ed8db9ba354503f84111cb510c92eeb18a09aa7",
        "https://ns.adobe.com/adobedemoamericas270/schemas/cb840ce6a216b3d78c832310924665167726123a9aedbe09",
        "https://ns.adobe.com/adobedemoamericas270/schemas/56814b32ebb2e95fa3ba166ae908822c952a822800331885",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/experience/profile/profile-all",
        "https://ns.adobe.com/xdm/context/profile-preferences-details",
        "https://ns.adobe.com/adobedemoamericas270/schemas/e977cf61e3a16ce3cdc6964e86cf629565712dc60a683cc6",
        "https://ns.adobe.com/adobedemoamericas270/mixins/9ef09c18c3095fa93eb135e817b5e2355167e9b6653b6bb7",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        eTag:
          "2a6e0cb22389e5e9d02e959aa75b3718f0ff2eca26a6328dafce02eaa29b4019",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/profile",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
    },
    {
      $id:
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent__union",
      "meta:altId":
        "_experience.journeyOrchestration.stepEvents.journeyStepEvent__union",
      "meta:resourceType": "unions",
      version: "1.0",
      title: "Journey Step Event",
      type: "object",
      description: "A time-series based Journey Step Event Class.",
      allOf: [
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFields",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent",
        "https://ns.adobe.com/adobedemoamericas270/schemas/5c5d3fb3c9cc87a8c9b4e991608029ca123e12eb938c8de7",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        eTag:
          "2a6e0cb22389e5e9d02e959aa75b3718f0ff2eca26a6328dafce02eaa29b4019",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class":
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
    },
    {
      $id: "https://ns.adobe.com/xdm/context/experienceevent__union",
      "meta:altId": "_xdm.context.experienceevent__union",
      "meta:resourceType": "unions",
      version: "1.0",
      title: "XDM ExperienceEvent",
      type: "object",
      description:
        "An ExperienceEvent is a fact record of what occurred, including the point in time and identity of the individual involved. ExperienceEvents can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation. They are critical for time-domain analytics as they allow for observation and analysis of changes that occur in a given window of time and the comparison between multiple windows of time to track trends.",
      allOf: [
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/3a7d523f7ae03b8ef40c8c7d11068b94f709448905f67692",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/6b18470d79fa5e1c011f7fa80c0efc7ea5337635cd7a8e57",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/80c84aef71d51993e2759e9080be0615b05a2938d45749e5",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
        },
        {
          $ref: "https://ns.adobe.com/experience/analytics-experienceevent",
        },
        {
          $ref: "https://ns.adobe.com/experience/aep-web-sdk-experienceevent",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/campaign/orchestration/eventid",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/adobedemoamericas270/schemas/3b9bea9cd8f742ea8ccb48c2acff3454687a4ac2e06e2f38",
        "https://ns.adobe.com/adobedemoamericas270/mixins/6b18470d79fa5e1c011f7fa80c0efc7ea5337635cd7a8e57",
        "https://ns.adobe.com/experience/experienceevent-edgeregion",
        "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
        "https://ns.adobe.com/adobedemoamericas270/mixins/80c84aef71d51993e2759e9080be0615b05a2938d45749e5",
        "https://ns.adobe.com/xdm/context/experienceevent-application",
        "https://ns.adobe.com/xdm/context/experienceevent-marketing",
        "https://ns.adobe.com/xdm/context/experienceevent-web",
        "https://ns.adobe.com/xdm/context/experienceevent-media",
        "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
        "https://ns.adobe.com/adobedemoamericas270/schemas/cc72100693f78ace14e725d43d589bef08a6327295802eae",
        "https://ns.adobe.com/xdm/context/experienceevent-enduserids",
        "https://ns.adobe.com/experience/target/experienceevent-shared",
        "https://ns.adobe.com/xdm/context/experienceevent-advertising",
        "https://ns.adobe.com/adobedemoamericas270/schemas/f57defbef0cc55ec049104b68a2145d173a469adf0f54a96",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
        "https://ns.adobe.com/experience/aep-web-sdk-experienceevent",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
        "https://ns.adobe.com/experience/profile/experienceevent-shared",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
        "https://ns.adobe.com/xdm/context/experienceevent-directmarketing",
        "https://ns.adobe.com/experience/analytics/experienceevent-all",
        "https://ns.adobe.com/xdm/context/experienceevent-segmentmembership",
        "https://ns.adobe.com/experience/analytics-experienceevent",
        "https://ns.adobe.com/experience/decisioning/proposition-interaction",
        "https://ns.adobe.com/xdm/context/experienceevent-channel",
        "https://ns.adobe.com/experience/implementations-ext",
        "https://ns.adobe.com/xdm/context/experienceevent",
        "https://ns.adobe.com/adobedemoamericas270/schemas/b0f26a27a2319794f679460b3a5557484e181df288085314",
        "https://ns.adobe.com/experience/analytics/commerce",
        "https://ns.adobe.com/xdm/context/experienceevent-technical-details",
        "https://ns.adobe.com/adobedemoamericas270/mixins/3a7d523f7ae03b8ef40c8c7d11068b94f709448905f67692",
        "https://ns.adobe.com/xdm/context/experienceevent-implementation-details",
        "https://ns.adobe.com/xdm/context/experienceevent-search",
        "https://ns.adobe.com/xdm/context/experienceevent-profile-stitch",
        "https://ns.adobe.com/adobedemoamericas270/schemas/da18e30c0dc91548ed6db8bc0904559d5a00a6b8d40d10ea",
        "https://ns.adobe.com/adobedemoamericas270/schemas/4b7b7b176c3724da6a9fac240d0df83d680422dcf2a2a524",
        "https://ns.adobe.com/experience/campaign/orchestration/eventid",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        eTag:
          "2a6e0cb22389e5e9d02e959aa75b3718f0ff2eca26a6328dafce02eaa29b4019",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
    },
    {
      $id: "https://ns.adobe.com/xdm/context/segmentdefinition__union",
      "meta:altId": "_xdm.context.segmentdefinition__union",
      "meta:resourceType": "unions",
      version: "1.0",
      title: "Segment definition",
      type: "object",
      description:
        "This is the base class for a segment definition which includes required fields like identity of a segment and name of segment. Segment definitions coming from various system can use this class to build Segment Definition XDM schema.",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/segmentdefinition",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extends": [
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/adobedemoamericas270/schemas/22d9718ab9c2f34da70d533717f9d1340defee43a46e7d53",
        "https://ns.adobe.com/xdm/context/segmentdefinition",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        eTag:
          "2a6e0cb22389e5e9d02e959aa75b3718f0ff2eca26a6328dafce02eaa29b4019",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/segmentdefinition",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
    },
  ],
};
const schemas = {
  results: [
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/be6fa80b3c7d0c8eb80c2dc37d7583e1b81cbe06c787800b",
      "meta:altId":
        "_adobedemoamericas270.schemas.be6fa80b3c7d0c8eb80c2dc37d7583e1b81cbe06c787800b",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "ODE DecisionEvents",
      type: "object",
      description: "Autogenerated schema for ODE DecisionEvents",
      allOf: [
        {
          $ref: "https://ns.adobe.com/experience/decisioning/decisionevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/experience/decisioning/decisionevent-all",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/experience/decisioning/decisionevent",
        "https://ns.adobe.com/experience/decisioning/decisionevent-all",
        "https://ns.adobe.com/experience/decisioning/proposition-details",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/experience/decisioning/proposition",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489148125,
        "repo:lastModifiedDate": 1615489148125,
        "xdm:createdClientId": "acp_core_omnihub_decisioning",
        "xdm:lastModifiedClientId": "acp_core_omnihub_decisioning",
        "xdm:createdUserId": "acp_core_omnihub_decisioning@AdobeID",
        "xdm:lastModifiedUserId": "acp_core_omnihub_decisioning@AdobeID",
        eTag:
          "9a8dc219f282eea9cc3f913920e2174fb1c69abb45788d9f99fa900ba567084d",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/experience/decisioning/decisionevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/d329ec120ed8db9ba354503f84111cb510c92eeb18a09aa7",
      "meta:altId":
        "_adobedemoamericas270.schemas.d329ec120ed8db9ba354503f84111cb510c92eeb18a09aa7",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "Initial Profile schema for Journeys",
      type: "object",
      description: "Out of the box Profile schema for Journey Orchestration",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/profile",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-person-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-personal-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-test-profile",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      auditable: true,
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-test-profile",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/context/identitymap",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489189261,
        "repo:lastModifiedDate": 1615489189261,
        "xdm:createdClientId": "bso_core_services",
        "xdm:lastModifiedClientId": "bso_core_services",
        "xdm:createdUserId": "bso_core_services@AdobeID",
        "xdm:lastModifiedUserId": "bso_core_services@AdobeID",
        eTag:
          "3f79b60ee6b3773fc0b44920c6a2f66eda886c799f5ad79139209e8b183f88c1",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/profile",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/da18e30c0dc91548ed6db8bc0904559d5a00a6b8d40d10ea",
      "meta:altId":
        "_adobedemoamericas270.schemas.da18e30c0dc91548ed6db8bc0904559d5a00a6b8d40d10ea",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "Initial Experience Events schema for Journeys",
      type: "object",
      description:
        "Out of the box Experience Event schema for Journey Orchestration",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/campaign/orchestration/eventid",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      auditable: true,
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/experienceevent",
        "https://ns.adobe.com/experience/campaign/orchestration/eventid",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489190465,
        "repo:lastModifiedDate": 1615489190465,
        "xdm:createdClientId": "bso_core_services",
        "xdm:lastModifiedClientId": "bso_core_services",
        "xdm:createdUserId": "bso_core_services@AdobeID",
        "xdm:lastModifiedUserId": "bso_core_services@AdobeID",
        eTag:
          "009482e956228c075a8fa8374e0c3a1393a132e08be74f0a7bdfed0d06c01d6e",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/9557c950914cea0139792bda64f381a59fc0763f02d956c5",
      "meta:altId":
        "_adobedemoamericas270.schemas.9557c950914cea0139792bda64f381a59fc0763f02d956c5",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "Journey schema with Journey Fields for Journey Orchestration",
      type: "object",
      description:
        "Journey schema with Journey Fields for Journey Orchestration ??? Journey Metadata to describe Journeys.",
      allOf: [
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journey",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyFields",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      auditable: true,
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journey",
        "https://ns.adobe.com/xdm/data/record",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489191733,
        "repo:lastModifiedDate": 1615489191733,
        "xdm:createdClientId": "bso_core_services",
        "xdm:lastModifiedClientId": "bso_core_services",
        "xdm:createdUserId": "bso_core_services@AdobeID",
        "xdm:lastModifiedUserId": "bso_core_services@AdobeID",
        eTag:
          "f611311c07b36174d50bbb2d084f1133c9c0ef82d36de7b58f948bee454d2427",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class":
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journey",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/5c5d3fb3c9cc87a8c9b4e991608029ca123e12eb938c8de7",
      "meta:altId":
        "_adobedemoamericas270.schemas.5c5d3fb3c9cc87a8c9b4e991608029ca123e12eb938c8de7",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "Journey Step Event schema for Journey Orchestration",
      type: "object",
      description:
        "Journey Step Event schema for Journey Orchestration ??? Journey step event that is tied to a Journey Metadata.",
      allOf: [
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFields",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      auditable: true,
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventIdentityFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489192928,
        "repo:lastModifiedDate": 1615489192928,
        "xdm:createdClientId": "bso_core_services",
        "xdm:lastModifiedClientId": "bso_core_services",
        "xdm:createdUserId": "bso_core_services@AdobeID",
        "xdm:lastModifiedUserId": "bso_core_services@AdobeID",
        eTag:
          "3669fc19467060d4719def29a07e1b4f7f5ad0fe7643520858f17247be8e1918",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class":
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEvent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/b0f26a27a2319794f679460b3a5557484e181df288085314",
      "meta:altId":
        "_adobedemoamericas270.schemas.b0f26a27a2319794f679460b3a5557484e181df288085314",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "Journey Step Profile Event schema for Journey Orchestration",
      type: "object",
      description:
        "Journey Step Profile Event schema for Journey Orchestration ??? Experience Events for steps taken in a Journey along with an Identity Map to be used for mapping to an individual Journey Participant.",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      auditable: true,
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
        "https://ns.adobe.com/xdm/context/experienceevent",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489194146,
        "repo:lastModifiedDate": 1615489194146,
        "xdm:createdClientId": "bso_core_services",
        "xdm:lastModifiedClientId": "bso_core_services",
        "xdm:createdUserId": "bso_core_services@AdobeID",
        "xdm:lastModifiedUserId": "bso_core_services@AdobeID",
        eTag:
          "705d2e8851d6b21dd29767ec8022fc9b2a4c4760492c85f0370f86d5a3814104",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/4b7b7b176c3724da6a9fac240d0df83d680422dcf2a2a524",
      "meta:altId":
        "_adobedemoamericas270.schemas.4b7b7b176c3724da6a9fac240d0df83d680422dcf2a2a524",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "FSI Demo Data Schema v1",
      type: "object",
      description: "Tenant Schema for FSI Demo Data",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/experience/analytics-experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/experience/profile/experienceevent-shared",
        "https://ns.adobe.com/xdm/context/experienceevent-directmarketing",
        "https://ns.adobe.com/experience/analytics/experienceevent-all",
        "https://ns.adobe.com/xdm/context/experienceevent-segmentmembership",
        "https://ns.adobe.com/experience/experienceevent-edgeregion",
        "https://ns.adobe.com/experience/analytics-experienceevent",
        "https://ns.adobe.com/xdm/context/experienceevent-application",
        "https://ns.adobe.com/xdm/context/experienceevent-marketing",
        "https://ns.adobe.com/xdm/context/experienceevent-web",
        "https://ns.adobe.com/xdm/context/experienceevent-media",
        "https://ns.adobe.com/xdm/context/experienceevent-channel",
        "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
        "https://ns.adobe.com/experience/implementations-ext",
        "https://ns.adobe.com/xdm/context/experienceevent",
        "https://ns.adobe.com/xdm/context/experienceevent-enduserids",
        "https://ns.adobe.com/experience/analytics/commerce",
        "https://ns.adobe.com/xdm/context/experienceevent-technical-details",
        "https://ns.adobe.com/experience/target/experienceevent-shared",
        "https://ns.adobe.com/xdm/context/experienceevent-advertising",
        "https://ns.adobe.com/xdm/context/experienceevent-search",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/experienceevent-profile-stitch",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489366437,
        "repo:lastModifiedDate": 1615489370653,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "d6fad66aac7023a7872196e74d795ca66231057cb40136b3801e59b01fdc1acd",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/cc72100693f78ace14e725d43d589bef08a6327295802eae",
      "meta:altId":
        "_adobedemoamericas270.schemas.cc72100693f78ace14e725d43d589bef08a6327295802eae",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "Website interactions EE",
      type: "object",
      description: "Website interactions EE",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/experience/campaign/orchestration/eventid",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/experience/aep-web-sdk-experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/xdm/context/experienceevent-implementation-details",
        "https://ns.adobe.com/experience/experienceevent-edgeregion",
        "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/experience/aep-web-sdk-experienceevent",
        "https://ns.adobe.com/xdm/context/experienceevent-web",
        "https://ns.adobe.com/experience/decisioning/proposition-interaction",
        "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
        "https://ns.adobe.com/xdm/context/experienceevent",
        "https://ns.adobe.com/experience/campaign/orchestration/eventid",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489373102,
        "repo:lastModifiedDate": 1615489375774,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "8673ce0424f271aa0dafd4f4df404530d8edf671e0e132942d86e304a0a010fc",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/22d9718ab9c2f34da70d533717f9d1340defee43a46e7d53",
      "meta:altId":
        "_adobedemoamericas270.schemas.22d9718ab9c2f34da70d533717f9d1340defee43a46e7d53",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "UPS segmentDefinition schema",
      type: "object",
      description: "Title is UPS segmentDefinition schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/segmentdefinition",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/segmentdefinition",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      auditable: true,
      required: ["identityMap", "segmentName"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/segmentdefinition",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489377085,
        "repo:lastModifiedDate": 1615489377085,
        "xdm:createdClientId": "acp_core_unifiedProfile_feeds",
        "xdm:lastModifiedClientId": "acp_core_unifiedProfile_feeds",
        "xdm:createdUserId": "acp_core_unifiedProfile_feeds@AdobeID",
        "xdm:lastModifiedUserId": "acp_core_unifiedProfile_feeds@AdobeID",
        eTag:
          "ab459d2d61ecbd60ed8467e5a828e198fa4f83fa23fb3c6c7c21fb39eb5cb2e4",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/segmentdefinition",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/3b9bea9cd8f742ea8ccb48c2acff3454687a4ac2e06e2f38",
      "meta:altId":
        "_adobedemoamericas270.schemas.3b9bea9cd8f742ea8ccb48c2acff3454687a4ac2e06e2f38",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "Call Center EE Schema",
      type: "object",
      description: "Call Center EE Schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/80c84aef71d51993e2759e9080be0615b05a2938d45749e5",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
        "https://ns.adobe.com/adobedemoamericas270/mixins/80c84aef71d51993e2759e9080be0615b05a2938d45749e5",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/experienceevent",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489379613,
        "repo:lastModifiedDate": 1615489381060,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "1699cfef2a66d3582cdf7455ccf3aad86a0b16f19be0bdc9e51df3292d63cecc",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/cb840ce6a216b3d78c832310924665167726123a9aedbe09",
      "meta:altId":
        "_adobedemoamericas270.schemas.cb840ce6a216b3d78c832310924665167726123a9aedbe09",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "CRM Profile Schema",
      type: "object",
      description: "CRM Profile Schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-person-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-personal-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-preferences-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/bfc38d1f79ef0393502e00dd56902aeb0124e9fc046b4f4f",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/adobedemoamericas270/mixins/bfc38d1f79ef0393502e00dd56902aeb0124e9fc046b4f4f",
        "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/context/profile-preferences-details",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489394711,
        "repo:lastModifiedDate": 1615489396739,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "65ffb56c9bf44422db767eee7c22bd0569f6c695d938c83e2f97048af51dfcb8",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/profile",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/e977cf61e3a16ce3cdc6964e86cf629565712dc60a683cc6",
      "meta:altId":
        "_adobedemoamericas270.schemas.e977cf61e3a16ce3cdc6964e86cf629565712dc60a683cc6",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "Propensity Scores Profile Schema",
      type: "object",
      description: "Propensity Scores Profile Schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/profile",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/9ef09c18c3095fa93eb135e817b5e2355167e9b6653b6bb7",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/adobedemoamericas270/mixins/9ef09c18c3095fa93eb135e817b5e2355167e9b6653b6bb7",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489412628,
        "repo:lastModifiedDate": 1615489413949,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "2caeafe0e7e39eda25042a834ef4468b8dede37081bd62c55966e896e421fbfe",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/profile",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/56814b32ebb2e95fa3ba166ae908822c952a822800331885",
      "meta:altId":
        "_adobedemoamericas270.schemas.56814b32ebb2e95fa3ba166ae908822c952a822800331885",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "Onboarded Profile Data Schema",
      type: "object",
      description: "Onboarded Profile Data Schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/profile",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/identitymap",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-personal-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref: "https://ns.adobe.com/xdm/context/profile-person-details",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-personal-details",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/context/identitymap",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489425847,
        "repo:lastModifiedDate": 1615489427720,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "ebda6eda58a9fc05753d421caf89b719239f3005f7fd83b2d57d5e59e4ccaafe",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/profile",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/b86dd2ef8905a118fe520454bba5c5c99c63835fafd5cad2",
      "meta:altId":
        "_adobedemoamericas270.schemas.b86dd2ef8905a118fe520454bba5c5c99c63835fafd5cad2",
      "meta:resourceType": "schemas",
      version: "1.0",
      title: "Reduced Web EE Schema",
      type: "object",
      description: "Reduced Web EE Schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/c969e8b8b87412447b7494ebdf6795c59d2b1ca0c741b893",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/e9fe3c18062324355dc548f7409e3d6881b4915934ab0301",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/adobedemoamericas270/mixins/c969e8b8b87412447b7494ebdf6795c59d2b1ca0c741b893",
        "https://ns.adobe.com/adobedemoamericas270/mixins/e9fe3c18062324355dc548f7409e3d6881b4915934ab0301",
        "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
        "https://ns.adobe.com/xdm/context/experienceevent",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489458912,
        "repo:lastModifiedDate": 1615489458912,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "1511fa72a26c3f52e008480493989bf6dc130b5d55df18f72dbeb7a0a693600c",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
    },
    {
      $id:
        "https://ns.adobe.com/adobedemoamericas270/schemas/f57defbef0cc55ec049104b68a2145d173a469adf0f54a96",
      "meta:altId":
        "_adobedemoamericas270.schemas.f57defbef0cc55ec049104b68a2145d173a469adf0f54a96",
      "meta:resourceType": "schemas",
      version: "1.1",
      title: "Transaction EE Schema",
      type: "object",
      description: "Transaction EE Schema",
      allOf: [
        {
          $ref: "https://ns.adobe.com/xdm/context/experienceevent",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/3a7d523f7ae03b8ef40c8c7d11068b94f709448905f67692",
          type: "object",
          "meta:xdmType": "object",
        },
        {
          $ref:
            "https://ns.adobe.com/adobedemoamericas270/mixins/6b18470d79fa5e1c011f7fa80c0efc7ea5337635cd7a8e57",
          type: "object",
          "meta:xdmType": "object",
        },
      ],
      required: ["_id", "timestamp"],
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      "meta:extensible": false,
      "meta:abstract": false,
      "meta:extends": [
        "https://ns.adobe.com/adobedemoamericas270/mixins/3a7d523f7ae03b8ef40c8c7d11068b94f709448905f67692",
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/adobedemoamericas270/mixins/6b18470d79fa5e1c011f7fa80c0efc7ea5337635cd7a8e57",
        "https://ns.adobe.com/adobedemoamericas270/mixins/cc9d309e39f1bb76784c5be192a96830b657be94e7aa39e8",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/experienceevent",
      ],
      "meta:xdmType": "object",
      "meta:registryMetadata": {
        "repo:createdDate": 1615489473449,
        "repo:lastModifiedDate": 1615489475034,
        "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
        "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
        eTag:
          "0dfff3b39a6d6c7e74539596d4d31062d3d99cd212815c0226c0df1efc444577",
        "meta:globalLibVersion": "1.20.1",
      },
      "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
      "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
      "meta:sandboxType": "development",
      "meta:tenantNamespace": "_adobedemoamericas270",
      "meta:immutableTags": ["union"],
    },
  ],
  _page: {
    orderby: "updated",
    next: null,
    count: 15,
  },
  _links: {
    next: null,
    global_schemas: {
      href:
        "https://platform.adobe.io/data/foundation/schemaregistry/global/schemas",
    },
  },
};
const sampleProfile = {
  "A28JIFRU5x_GQ-73XAKAuUoN": {
    entity: {
      _salesvelocity: {
        identification: {
          core: {
            ecid: "48836259243425874010957781830216251374",
            email: "biss+bp+000@adobetest.com",
          },
        },
      },
      identityMap: {
        ecid: [{ id: "48836259243425874010957781830216251374" }],
        email: [
          { id: "hello" },
          { id: "biss+bp+001@adobetest.com" },
          { id: "biss+bp+000@adobetest.com" },
        ],
      },
      person: { name: { firstName: "Joe", lastName: "Bloggs" } },
      personalEmail: { address: "biss+bp+000@adobetest.com" },
      segmentMembership: {
        ups: {
          "53e798f3-ac53-4cba-b83e-657d327a5de7": {
            lastQualificationTime: "2021-03-12T20:34:16Z",
            status: "exited",
          },
          "9f51571f-7b1f-4f1e-9138-eac941506934": {
            lastQualificationTime: "2021-03-13T20:34:38Z",
            status: "existing",
          },
        },
      },
      testProfile: true,
      userActivityRegions: {
        IRL1: { captureTimestamp: "2021-03-11T21:41:44Z" },
      },
    },
    entityId: "A28JIFRU5x_GQ-73XAKAuUoN",
    identityGraph: [
      "A28JIFRU5x_GQ-73XAKAuUoN",
      "BUF21W4rLP1W6f1dNNPoGnaG3rXrLfl3KJg",
      "BUF21W4rLP1W6f1dNNfoGnaG3rXrLfl3KJg",
      "BUFkaGVsbG8",
    ],
    lastModifiedAt: "2021-03-13T20:34:41Z",
    mergePolicy: { id: "b831e867-2235-4f76-aed6-1efb1f6c71aa" },
    sources: ["60366b80ab086e194bf4c5f0", "profile-streaming-segment"],
    tags: [
      "71e73950-2ced-4216-9250-3ed9ee05af35",
      "aep_ups_profile_change_event_prod_va7:120:3958326495-fe2efdf8-70de-4b4f-a325-967850f1c832",
      "1615498873468:5269:28",
    ],
  },
};
const profileUnionSchema = {
  $id: "https://ns.adobe.com/xdm/context/profile__union",
  imsOrg: "E8475990589B24A90A495DDD@AdobeOrg",
  "meta:altId": "_xdm.context.profile__union",
  "meta:class": "https://ns.adobe.com/xdm/context/profile",
  "meta:containerId": "a44a7a2e-6dd1-40b8-8a7a-2e6dd160b8cb",
  "meta:extends": [
    "https://ns.adobe.com/xdm/context/profile-test-profile",
    "https://ns.adobe.com/xdm/common/auditable",
    "https://ns.adobe.com/salesvelocity/mixins/d4f146d66286439f0189e59e2040f8bb",
    "https://ns.adobe.com/salesvelocity/mixins/2c6939ef321381f1fa30680f144656ec4d3baa255d51406b",
    "https://ns.adobe.com/salesvelocity/schemas/62d970f74a4708bbbf9a66d10b7d745aaa0514a66638d023",
    "https://ns.adobe.com/salesvelocity/mixins/2c08bc9b600f74758fd9d34687bf1dc5",
    "https://ns.adobe.com/xdm/context/profile-person-details",
    "https://ns.adobe.com/salesvelocity/schemas/3ccdc13133b9492e85c3994cd4b6deeg",
    "https://ns.adobe.com/xdm/context/profile-personal-details",
    "https://ns.adobe.com/salesvelocity/schemas/57d6b1be185270dce074878bf423c611",
    "https://ns.adobe.com/xdm/data/record",
    "https://ns.adobe.com/experience/profile-edgeregion",
    "https://ns.adobe.com/salesvelocity/schemas/2a455acf8e1e93ddf909b47883af068b",
    "https://ns.adobe.com/xdm/context/profile",
    "https://ns.adobe.com/xdm/context/identitymap",
    "https://ns.adobe.com/experience/profile/profile-all",
    "https://ns.adobe.com/xdm/context/profile-preferences-details",
    "https://ns.adobe.com/salesvelocity/schemas/47a8040407591b7f01f1892080a5220c25b18fadf5692414",
  ],
  "meta:referencedFrom": [
    "https://ns.adobe.com/xdm/context/profile-person-details",
    "https://ns.adobe.com/xdm/context/profile-test-profile",
    "https://ns.adobe.com/xdm/context/profile-personal-details",
    "https://ns.adobe.com/salesvelocity/mixins/d4f146d66286439f0189e59e2040f8bb",
    "https://ns.adobe.com/salesvelocity/mixins/2c6939ef321381f1fa30680f144656ec4d3baa255d51406b",
    "https://ns.adobe.com/experience/profile-edgeregion",
    "https://ns.adobe.com/xdm/context/profile",
    "https://ns.adobe.com/xdm/context/identitymap",
    "https://ns.adobe.com/salesvelocity/mixins/2c08bc9b600f74758fd9d34687bf1dc5",
    "https://ns.adobe.com/experience/profile/profile-all",
    "https://ns.adobe.com/xdm/context/profile-preferences-details",
  ],
  "meta:registryMetadata": {
    eTag: "8c2b579b9e1e1c048d87609086e28cf7f7cfb4abd2357cb44fb5d97a7281f03c",
    "meta:globalLibVersion": "1.20.3",
  },
  "meta:resourceType": "unions",
  "meta:sandboxId": "a44a7a2e-6dd1-40b8-8a7a-2e6dd160b8cb",
  "meta:sandboxType": "development",
  "meta:xdmType": "object",
  properties: {
    _experience: {
      "meta:xdmType": "object",
      "meta:xedConverted": true,
      properties: {
        profile: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            associatedIdentities: {
              additionalProperties: {
                items: {
                  "meta:xdmType": "object",
                  properties: {
                    associatedTimeRanges: {
                      items: {
                        "meta:xdmType": "object",
                        properties: {
                          end: {
                            format: "date-time",
                            "meta:xdmField": "xdm:end",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                          start: {
                            format: "date-time",
                            "meta:xdmField": "xdm:start",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      "meta:xdmField": "xdm:associatedTimeRanges",
                      "meta:xdmType": "array",
                      type: "array",
                    },
                    id: {
                      "meta:xdmField": "xdm:id",
                      "meta:xdmType": "string",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                "meta:xdmType": "array",
                type: "array",
              },
              "meta:xdmField":
                "https://ns.adobe.com/experience/profile/associatedIdentities",
              "meta:xdmType": "map",
              type: "object",
            },
            identityNamespaces: {
              additionalProperties: {
                "meta:referencedFrom":
                  "https://ns.adobe.com/xdm/context/namespace",
                "meta:xdmType": "object",
                properties: {
                  code: {
                    "meta:xdmField": "xdm:code",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                },
                required: ["code"],
                type: "object",
              },
              "meta:xdmField":
                "https://ns.adobe.com/experience/profile/identityNamespaces",
              "meta:xdmType": "map",
              type: "object",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
    _id: {
      format: "uri-reference",
      "meta:xdmField": "@id",
      "meta:xdmType": "string",
      type: "string",
    },
    _salesvelocity: {
      "meta:xdmType": "object",
      properties: {
        SegmentationDemo: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            para_su_vehiculo: {
              isRequired: false,
              "meta:xdmType": "int",
              required: [],
              type: "integer",
            },
          },
          required: [],
          type: "object",
        },
        identification: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            core: {
              isRequired: false,
              "meta:referencedFrom":
                "https://ns.adobe.com/salesvelocity/datatypes/829960f7e713727649cf1ad047738d29",
              "meta:xdmType": "object",
              properties: {
                biometricId: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_identification_core_v1{}.biometricId",
                    ref: [
                      "schema://5e3c490bf2ee760000fe7359",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                crmId: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_identification_core_v1{}.crmId",
                    ref: [
                      "schema://5e3c490bf2ee760000fe7359",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                ecid: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_identification_core_v1{}.ecid",
                    ref: [
                      "schema://5e3c490bf2ee760000fe7359",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                email: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_identification_core_v1{}.email",
                    ref: [
                      "schema://5e3c490bf2ee760000fe7359",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                phoneNumber: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_identification_core_v1{}.phoneNumber",
                    ref: [
                      "schema://5e3c490bf2ee760000fe7359",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            retail: {
              isRequired: false,
              "meta:xdmType": "object",
              properties: {
                loyaltyId: {
                  isRequired: false,
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        individualCharacteristics: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            core: {
              isRequired: false,
              "meta:referencedFrom":
                "https://ns.adobe.com/salesvelocity/datatypes/6e980ae3a08a3063ab6c5451c5a4cd35",
              "meta:xdmType": "object",
              properties: {
                age: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_core_v1{}.age",
                    ref: [
                      "schema://5e45572ecfea6100000a170e",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "int",
                  type: "integer",
                },
                preferredCategory: {
                  isRequired: false,
                  items: { "meta:xdmType": "string", type: "string" },
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_core_v1{}.preferredCategory[]{}",
                    ref: [
                      "schema://5e45572ecfea6100000a170e",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "array",
                  type: "array",
                },
                preferredSubCategory: {
                  isRequired: false,
                  items: { "meta:xdmType": "string", type: "string" },
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_core_v1{}.preferredSubCategory[]{}",
                    ref: [
                      "schema://5e45572ecfea6100000a170e",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "array",
                  type: "array",
                },
              },
              type: "object",
            },
            retail: {
              isRequired: false,
              "meta:referencedFrom":
                "https://ns.adobe.com/salesvelocity/datatypes/b5676735776565c9fc39499a28399231",
              "meta:xdmType": "object",
              properties: {
                favoriteColor: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_retail_v1{}.favoriteColor",
                    ref: [
                      "schema://5e4560a5b6f14a0000eb0605",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                linkedStore: {
                  isRequired: false,
                  items: { "meta:xdmType": "string", type: "string" },
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_retail_v1{}.linkedStore[]{}",
                    ref: [
                      "schema://5e4560a5b6f14a0000eb0605",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "array",
                  type: "array",
                },
                pantsSize: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_retail_v1{}.pantsSize",
                    ref: [
                      "schema://5e4560a5b6f14a0000eb0605",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                shirtSize: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_retail_v1{}.shirtSize",
                    ref: [
                      "schema://5e4560a5b6f14a0000eb0605",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                shoeSize: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_characteristics_retail_v1{}.shoeSize",
                    ref: [
                      "schema://5e4560a5b6f14a0000eb0605",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        individualRecognition: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            core: {
              isRequired: false,
              "meta:referencedFrom":
                "https://ns.adobe.com/salesvelocity/datatypes/f903785173036a66e6e8a94a9238bee8",
              "meta:xdmType": "object",
              properties: {
                age: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_recognition_core_v1{}.age",
                    ref: [
                      "schema://5e455a68cfea6100000a1719",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "int",
                  type: "integer",
                },
                gender: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.profile_recognition_core_v1{}.gender",
                    ref: [
                      "schema://5e455a68cfea6100000a1719",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        individualScoring: {
          isRequired: false,
          items: {
            "meta:xdmType": "object",
            properties: {
              core: {
                $id:
                  "https://ns.adobe.com/salesvelocity/datatypes/37fa4e40abc653fc1c60d7a0f9c670ab",
                createDate: 1581603961537,
                id:
                  "https://ns.adobe.com/salesvelocity/datatypes/37fa4e40abc653fc1c60d7a0f9c670ab",
                imsOrg: "E8475990589B24A90A495DDD@AdobeOrg",
                lastModifiedDate: 1581603961537,
                "meta:abstract": true,
                "meta:altId":
                  "_salesvelocity.datatypes.37fa4e40abc653fc1c60d7a0f9c670ab",
                "meta:containerId": "5e402d00-48eb-11ea-a7f9-6d4a42cffc3f",
                "meta:extensible": true,
                "meta:registryMetadata": {
                  eTag: "BHFfdWvJ5g7GnxxE6TMCL+6ymQg=",
                  "palm:sandboxName": "demo-system",
                  "repo:createdDate": 1581603961537,
                  "repo:lastModifiedDate": 1581603961537,
                  "xdm:createdClientId": "acp_ui_platform",
                },
                "meta:resourceType": "datatypes",
                "meta:tenantNamespace": "_salesvelocity",
                "meta:ui": {
                  editable: true,
                  path: "{}._salesvelocity{}.individualScoring{}.$core{}",
                  ref: [
                    "https://ns.adobe.com/salesvelocity/mixins/2c08bc9b600f74758fd9d34687bf1dc5",
                    "#/definitions/customFields",
                    "https://ns.adobe.com/salesvelocity/datatypes/37fa4e40abc653fc1c60d7a0f9c670ab",
                  ],
                },
                "meta:xdmType": "object",
                properties: {
                  category: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.profile_scoring_core_v1{}.category",
                      ref: [
                        "schema://5e455c03cfea6100000a171f",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  propensityScore: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.profile_scoring_core_v1{}.propensityScore",
                      ref: [
                        "schema://5e455c03cfea6100000a171f",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "number",
                    type: "number",
                  },
                },
                type: "object",
                version: "1.0",
              },
            },
            type: "object",
          },
          "meta:xdmType": "array",
          type: "array",
        },
        loyaltyDetails: {
          isRequired: false,
          "meta:referencedFrom":
            "https://ns.adobe.com/salesvelocity/datatypes/fc45184c5048a9788bf5c25aa8778e9a",
          "meta:xdmType": "object",
          properties: {
            level: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                path: "{}._salesvelocity{}.profile_loyalty_retail_v1{}.level",
                ref: [
                  "schema://5e3c55548a80bb0000e4f315",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              type: "string",
            },
            points: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                path: "{}._salesvelocity{}.profile_loyalty_retail_v1{}.points",
                ref: [
                  "schema://5e3c55548a80bb0000e4f315",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "number",
              type: "number",
            },
          },
          type: "object",
        },
        orderProfile: {
          isRequired: false,
          "meta:referencedFrom":
            "https://ns.adobe.com/salesvelocity/datatypes/fe754e1ed896fa8da7d8553a87d19d74",
          "meta:xdmType": "object",
          properties: {
            avgOrderSize: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.avgOrderSize",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "number",
              type: "number",
            },
            lastOrderDate: {
              format: "date",
              isRequired: false,
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.lastOrderDate",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "date",
              type: "string",
            },
            lastOrderSize: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.lastOrderSize",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "number",
              type: "number",
            },
            lastOrderSku: {
              isRequired: false,
              items: { "meta:xdmType": "string", type: "string" },
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.lastOrderSku[]{}",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "array",
              type: "array",
            },
            lastOrderStore: {
              isRequired: false,
              items: { "meta:xdmType": "string", type: "string" },
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.lastOrderStore[]{}",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "array",
              type: "array",
            },
            lastOrderType: {
              isRequired: false,
              items: { "meta:xdmType": "string", type: "string" },
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.lastOrderType[]{}",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "array",
              type: "array",
            },
            lifetimeValue: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                path:
                  "{}._salesvelocity{}.profile_order_core_v1{}.lifetimeValue",
                ref: [
                  "schema://5e455e9cb6f14a0000eb05fa",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "number",
              type: "number",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
    emailFormat: {
      "meta:enum": { html: "Rich text", plaintext: "Plain text" },
      "meta:xdmField": "xdm:emailFormat",
      "meta:xdmType": "string",
      type: "string",
    },
    faxPhone: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
      "meta:xdmField": "xdm:faxPhone",
      "meta:xdmType": "object",
      properties: {
        extension: {
          "meta:xdmField": "xdm:extension",
          "meta:xdmType": "string",
          type: "string",
        },
        number: {
          "meta:xdmField": "xdm:number",
          "meta:xdmType": "string",
          type: "string",
        },
        primary: {
          "meta:xdmField": "xdm:primary",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        status: {
          default: "active",
          "meta:enum": {
            active: "Active",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
            incomplete: "Incomplete",
          },
          "meta:xdmField": "xdm:status",
          "meta:xdmType": "string",
          type: "string",
        },
        statusReason: {
          "meta:xdmField": "xdm:statusReason",
          "meta:xdmType": "string",
          type: "string",
        },
        validity: {
          "meta:enum": {
            consistent: "Consistent",
            incomplete: "Incomplete",
            inconsistent: "Inconsistent",
            successfullyUsed: "Successfully used",
          },
          "meta:xdmField": "xdm:validity",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    homeAddress: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/common/address",
      "meta:xdmField": "xdm:homeAddress",
      "meta:xdmType": "object",
      properties: {
        _id: {
          format: "uri-reference",
          "meta:xdmField": "@id",
          "meta:xdmType": "string",
          type: "string",
        },
        _repo: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            createDate: {
              examples: ["2004-10-23T12:00:00-06:00"],
              format: "date-time",
              "meta:immutable": true,
              "meta:usereditable": false,
              "meta:xdmField": "repo:createDate",
              "meta:xdmType": "date-time",
              type: "string",
            },
            modifyDate: {
              examples: ["2004-10-23T12:00:00-06:00"],
              format: "date-time",
              "meta:usereditable": false,
              "meta:xdmField": "repo:modifyDate",
              "meta:xdmType": "date-time",
              type: "string",
            },
          },
          type: "object",
        },
        _schema: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            description: {
              "meta:xdmField": "schema:description",
              "meta:xdmType": "string",
              type: "string",
            },
            elevation: {
              "meta:xdmField": "schema:elevation",
              "meta:xdmType": "number",
              type: "number",
            },
            latitude: {
              maximum: 90,
              "meta:xdmField": "schema:latitude",
              "meta:xdmType": "number",
              minimum: -90,
              type: "number",
            },
            longitude: {
              maximum: 180,
              "meta:xdmField": "schema:longitude",
              "meta:xdmType": "number",
              minimum: -180,
              type: "number",
            },
          },
          type: "object",
        },
        city: {
          "meta:xdmField": "xdm:city",
          "meta:xdmType": "string",
          type: "string",
        },
        country: {
          "meta:xdmField": "xdm:country",
          "meta:xdmType": "string",
          type: "string",
        },
        countryCode: {
          "meta:xdmField": "xdm:countryCode",
          "meta:xdmType": "string",
          pattern: "^[A-Z]{2}$",
          type: "string",
        },
        createdByBatchID: {
          format: "uri-reference",
          "meta:xdmField": "xdm:createdByBatchID",
          "meta:xdmType": "string",
          type: "string",
        },
        dmaID: {
          "meta:xdmField": "xdm:dmaID",
          "meta:xdmType": "int",
          type: "integer",
        },
        label: {
          "meta:xdmField": "xdm:label",
          "meta:xdmType": "string",
          type: "string",
        },
        lastVerifiedDate: {
          format: "date",
          "meta:xdmField": "xdm:lastVerifiedDate",
          "meta:xdmType": "date",
          type: "string",
        },
        modifiedByBatchID: {
          format: "uri-reference",
          "meta:xdmField": "xdm:modifiedByBatchID",
          "meta:xdmType": "string",
          type: "string",
        },
        msaID: {
          "meta:xdmField": "xdm:msaID",
          "meta:xdmType": "int",
          type: "integer",
        },
        postOfficeBox: {
          maxLength: 20,
          "meta:xdmField": "xdm:postOfficeBox",
          "meta:xdmType": "string",
          type: "string",
        },
        postalCode: {
          "meta:xdmField": "xdm:postalCode",
          "meta:xdmType": "string",
          type: "string",
        },
        primary: {
          "meta:xdmField": "xdm:primary",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        region: {
          "meta:xdmField": "xdm:region",
          "meta:xdmType": "string",
          type: "string",
        },
        repositoryCreatedBy: {
          "meta:xdmField": "xdm:repositoryCreatedBy",
          "meta:xdmType": "string",
          type: "string",
        },
        repositoryLastModifiedBy: {
          "meta:xdmField": "xdm:repositoryLastModifiedBy",
          "meta:xdmType": "string",
          type: "string",
        },
        state: {
          "meta:xdmField": "xdm:state",
          "meta:xdmType": "string",
          type: "string",
        },
        stateProvince: {
          examples: ["US-CA", "DE-BB", "JP-13"],
          "meta:xdmField": "xdm:stateProvince",
          "meta:xdmType": "string",
          pattern: "([A-Z]{2}-[A-Z0-9]{1,3}|)",
          type: "string",
        },
        status: {
          default: "active",
          "meta:enum": {
            active: "Active",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
            incomplete: "Incomplete",
            pending_verification: "Pending verification",
          },
          "meta:xdmField": "xdm:status",
          "meta:xdmType": "string",
          type: "string",
        },
        statusReason: {
          "meta:xdmField": "xdm:statusReason",
          "meta:xdmType": "string",
          type: "string",
        },
        street1: {
          "meta:xdmField": "xdm:street1",
          "meta:xdmType": "string",
          type: "string",
        },
        street2: {
          "meta:xdmField": "xdm:street2",
          "meta:xdmType": "string",
          type: "string",
        },
        street3: {
          "meta:xdmField": "xdm:street3",
          "meta:xdmType": "string",
          type: "string",
        },
        street4: {
          "meta:xdmField": "xdm:street4",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    homePhone: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
      "meta:xdmField": "xdm:homePhone",
      "meta:xdmType": "object",
      properties: {
        extension: {
          "meta:xdmField": "xdm:extension",
          "meta:xdmType": "string",
          type: "string",
        },
        number: {
          "meta:xdmField": "xdm:number",
          "meta:xdmType": "string",
          type: "string",
        },
        primary: {
          "meta:xdmField": "xdm:primary",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        status: {
          default: "active",
          "meta:enum": {
            active: "Active",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
            incomplete: "Incomplete",
          },
          "meta:xdmField": "xdm:status",
          "meta:xdmType": "string",
          type: "string",
        },
        statusReason: {
          "meta:xdmField": "xdm:statusReason",
          "meta:xdmType": "string",
          type: "string",
        },
        validity: {
          "meta:enum": {
            consistent: "Consistent",
            incomplete: "Incomplete",
            inconsistent: "Inconsistent",
            successfullyUsed: "Successfully used",
          },
          "meta:xdmField": "xdm:validity",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    identityMap: {
      additionalProperties: {
        items: {
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/identityitem",
          "meta:xdmType": "object",
          properties: {
            authenticatedState: {
              default: "ambiguous",
              enum: ["ambiguous", "authenticated", "loggedOut"],
              "meta:enum": {
                ambiguous: "Ambiguous",
                authenticated:
                  "User identified by a login or similar action that was valid at the time of the event observation.",
                loggedOut:
                  "User was identified by a login action at some point of time previously, but is not currently logged in.",
              },
              "meta:xdmField": "xdm:authenticatedState",
              "meta:xdmType": "string",
              type: "string",
            },
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            primary: {
              default: false,
              "meta:xdmField": "xdm:primary",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
          },
          type: "object",
        },
        "meta:xdmType": "array",
        type: "array",
      },
      "meta:xdmField": "xdm:identityMap",
      "meta:xdmType": "map",
      type: "object",
    },
    mobilePhone: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
      "meta:xdmField": "xdm:mobilePhone",
      "meta:xdmType": "object",
      properties: {
        extension: {
          "meta:xdmField": "xdm:extension",
          "meta:xdmType": "string",
          type: "string",
        },
        number: {
          "meta:xdmField": "xdm:number",
          "meta:xdmType": "string",
          type: "string",
        },
        primary: {
          "meta:xdmField": "xdm:primary",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        status: {
          default: "active",
          "meta:enum": {
            active: "Active",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
            incomplete: "Incomplete",
          },
          "meta:xdmField": "xdm:status",
          "meta:xdmType": "string",
          type: "string",
        },
        statusReason: {
          "meta:xdmField": "xdm:statusReason",
          "meta:xdmType": "string",
          type: "string",
        },
        validity: {
          "meta:enum": {
            consistent: "Consistent",
            incomplete: "Incomplete",
            inconsistent: "Inconsistent",
            successfullyUsed: "Successfully used",
          },
          "meta:xdmField": "xdm:validity",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    modifiedByBatchID: {
      format: "uri-reference",
      "meta:xdmField": "xdm:modifiedByBatchID",
      "meta:xdmType": "string",
      type: "string",
    },
    optInOut: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/optinout",
      "meta:xdmField": "xdm:optInOut",
      "meta:xdmType": "object",
      properties: {
        _channels: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            adm: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/adm",
              "meta:xdmType": "string",
              type: "string",
            },
            agency: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/agency",
              "meta:xdmType": "string",
              type: "string",
            },
            apns: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/apns",
              "meta:xdmType": "string",
              type: "string",
            },
            application: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/application",
              "meta:xdmType": "string",
              type: "string",
            },
            baidu: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/baidu",
              "meta:xdmType": "string",
              type: "string",
            },
            channel: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/channel",
              "meta:xdmType": "string",
              type: "string",
            },
            directMail: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/direct-mail",
              "meta:xdmType": "string",
              type: "string",
            },
            email: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/email",
              "meta:xdmType": "string",
              type: "string",
            },
            facebookFeed: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField":
                "https://ns.adobe.com/xdm/channels/facebook-feed",
              "meta:xdmType": "string",
              type: "string",
            },
            fax: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/fax",
              "meta:xdmType": "string",
              type: "string",
            },
            gcm: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/gcm",
              "meta:xdmType": "string",
              type: "string",
            },
            line: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/line",
              "meta:xdmType": "string",
              type: "string",
            },
            mobileApp: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/mobile-app",
              "meta:xdmType": "string",
              type: "string",
            },
            mpns: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/mpns",
              "meta:xdmType": "string",
              type: "string",
            },
            phone: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/phone",
              "meta:xdmType": "string",
              type: "string",
            },
            sms: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/sms",
              "meta:xdmType": "string",
              type: "string",
            },
            twitterFeed: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/twitter-feed",
              "meta:xdmType": "string",
              type: "string",
            },
            web: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/web",
              "meta:xdmType": "string",
              type: "string",
            },
            webpage: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/webpage",
              "meta:xdmType": "string",
              type: "string",
            },
            wechat: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/wechat",
              "meta:xdmType": "string",
              type: "string",
            },
            wns: {
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                not_provided: "Not provided",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
                pending: "Pending verification",
              },
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/wns",
              "meta:xdmType": "string",
              type: "string",
            },
          },
          type: "object",
        },
        globalOptout: {
          default: false,
          "meta:xdmField": "xdm:globalOptout",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        optOutDetails: {
          "meta:xdmField": "xdm:optOutDetails",
          "meta:xdmType": "object",
          properties: {
            directMail: {
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:direct-mail",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  format: "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                  "meta:xdmType": "date-time",
                  type: "string",
                },
                optOutReason: {
                  "meta:xdmField": "xdm:optOutReason",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            email: {
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:email",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  format: "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                  "meta:xdmType": "date-time",
                  type: "string",
                },
                optOutReason: {
                  "meta:xdmField": "xdm:optOutReason",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            fax: {
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:fax",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  format: "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                  "meta:xdmType": "date-time",
                  type: "string",
                },
                optOutReason: {
                  "meta:xdmField": "xdm:optOutReason",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            phone: {
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:phone",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  format: "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                  "meta:xdmType": "date-time",
                  type: "string",
                },
                optOutReason: {
                  "meta:xdmField": "xdm:optOutReason",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
    optOutConsentLevel: {
      "meta:status": "deprecated",
      "meta:xdmField": "xdm:optOutConsentLevel",
      "meta:xdmType": "object",
      properties: {
        privacyOptOuts: {
          items: {
            "meta:xdmType": "object",
            properties: {
              optOutType: {
                enum: ["general_opt_out", "sales_sharing_opt_out"],
                "meta:enum": {
                  general_opt_out: "General opt-out",
                  sales_sharing_opt_out: "Sales sharing opt-out",
                },
                "meta:xdmField": "xdm:optOutType",
                "meta:xdmType": "string",
                type: "string",
              },
              optOutValue: {
                enum: ["not_provided", "pending", "in", "out"],
                "meta:enum": {
                  in: "Opt-in",
                  not_provided: "Not provided",
                  out: "Opt-out",
                  pending: "Pending verification",
                },
                "meta:xdmField": "xdm:optOutValue",
                "meta:xdmType": "string",
                type: "string",
              },
              timestamp: {
                format: "date-time",
                "meta:xdmField": "xdm:timestamp",
                "meta:xdmType": "date-time",
                type: "string",
              },
            },
            type: "object",
          },
          "meta:xdmField": "xdm:privacyOptOuts",
          "meta:xdmType": "array",
          type: "array",
        },
      },
      type: "object",
    },
    person: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/person",
      "meta:xdmField": "xdm:person",
      "meta:xdmType": "object",
      properties: {
        birthDate: {
          format: "date",
          "meta:xdmField": "xdm:birthDate",
          "meta:xdmType": "date",
          type: "string",
        },
        birthDayAndMonth: {
          "meta:xdmField": "xdm:birthDayAndMonth",
          "meta:xdmType": "string",
          pattern: "[0-1][0-9]-[0-9][0-9]",
          type: "string",
        },
        birthYear: {
          maximum: 32767,
          "meta:xdmField": "xdm:birthYear",
          "meta:xdmType": "short",
          minimum: 1,
          type: "integer",
        },
        gender: {
          default: "not_specified",
          enum: ["male", "female", "not_specified", "non_specific"],
          "meta:enum": {
            female: "Female",
            male: "Male",
            non_specific: "Non-specific",
            not_specified: "Not Specified",
          },
          "meta:xdmField": "xdm:gender",
          "meta:xdmType": "string",
          type: "string",
        },
        maritalStatus: {
          default: "not_specified",
          enum: ["married", "single", "divorced", "widowed", "not_specified"],
          "meta:enum": {
            divorced: "Divorced",
            married: "Married",
            not_specified: "Not Specified",
            single: "Single",
            widowed: "Widowed",
          },
          "meta:xdmField": "xdm:maritalStatus",
          "meta:xdmType": "string",
          type: "string",
        },
        name: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/context/person-name",
          "meta:xdmField": "xdm:name",
          "meta:xdmType": "object",
          properties: {
            courtesyTitle: {
              "meta:xdmField": "xdm:courtesyTitle",
              "meta:xdmType": "string",
              type: "string",
            },
            firstName: {
              "meta:xdmField": "xdm:firstName",
              "meta:xdmType": "string",
              type: "string",
            },
            fullName: {
              "meta:xdmField": "xdm:fullName",
              "meta:xdmType": "string",
              type: "string",
            },
            lastName: {
              "meta:xdmField": "xdm:lastName",
              "meta:xdmType": "string",
              type: "string",
            },
            middleName: {
              "meta:xdmField": "xdm:middleName",
              "meta:xdmType": "string",
              type: "string",
            },
            suffix: {
              "meta:xdmField": "xdm:suffix",
              "meta:xdmType": "string",
              type: "string",
            },
          },
          type: "object",
        },
        nationality: {
          "meta:xdmField": "xdm:nationality",
          "meta:xdmType": "string",
          pattern: "^[A-Z]{2}$",
          type: "string",
        },
        taxId: {
          "meta:xdmField": "xdm:taxId",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    personID: {
      "meta:xdmField": "xdm:personID",
      "meta:xdmType": "string",
      type: "string",
    },
    personalEmail: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/emailaddress",
      "meta:xdmField": "xdm:personalEmail",
      "meta:xdmType": "object",
      properties: {
        address: {
          format: "email",
          "meta:xdmField": "xdm:address",
          "meta:xdmType": "string",
          type: "string",
        },
        label: {
          "meta:xdmField": "xdm:label",
          "meta:xdmType": "string",
          type: "string",
        },
        primary: {
          "meta:xdmField": "xdm:primary",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        status: {
          default: "active",
          "meta:enum": {
            active: "Active",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
            incomplete: "Incomplete",
            pending_verification: "Pending verification",
          },
          "meta:xdmField": "xdm:status",
          "meta:xdmType": "string",
          type: "string",
        },
        statusReason: {
          "meta:xdmField": "xdm:statusReason",
          "meta:xdmType": "string",
          type: "string",
        },
        type: {
          "meta:enum": {
            education: "Education",
            personal: "Personal",
            unknown: "Unknown",
            work: "Work",
          },
          "meta:xdmField": "xdm:type",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    preferredLanguage: {
      examples: ["en-GB", "de-DE", "yue-HK"],
      "meta:xdmField": "xdm:preferredLanguage",
      "meta:xdmType": "string",
      pattern:
        "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
      type: "string",
    },
    profilePictureLink: {
      "meta:xdmField": "xdm:profilePictureLink",
      "meta:xdmType": "string",
      type: "string",
    },
    repositoryCreatedBy: {
      "meta:xdmField": "xdm:repositoryCreatedBy",
      "meta:xdmType": "string",
      type: "string",
    },
    repositoryLastModifiedBy: {
      "meta:xdmField": "xdm:repositoryLastModifiedBy",
      "meta:xdmType": "string",
      type: "string",
    },
    testProfile: {
      default: false,
      "meta:xdmField": "xdm:testProfile",
      "meta:xdmType": "boolean",
      type: "boolean",
    },
    timeZone: {
      examples: ["America/Barbados", "Antarctica/Davis", "Asia/Calcutta"],
      "meta:xdmField": "xdm:timeZone",
      "meta:xdmType": "string",
      type: "string",
    },
    userActivityRegions: {
      additionalProperties: {
        "meta:xdmType": "object",
        properties: {
          captureTimestamp: {
            format: "date-time",
            "meta:xdmField": "xdm:captureTimestamp",
            "meta:xdmType": "date-time",
            type: "string",
          },
        },
        type: "object",
      },
      "meta:xdmField": "xdm:userActivityRegions",
      "meta:xdmType": "map",
      type: "object",
    },
  },
  type: "object",
  version: "1.0",
};
const postPreviewJob = {
  state: "RESULT_READY",
  previewQueryId:
    "INITIALIZE=app-37248445-83fe-46e7-8fdd-e45065f83b22+RTU1NTEzMTQ1REQyQkQwMTBBNDk1Q0ZBQEFkb2JlT3JnX2Y1ZDU0YmQ4LTI0ZDktNDQ3Mi05NTRiLWQ4MjRkOTQ0NzIwMw==",
  previewQueryStatus: "RESULT_READY",
  previewId:
    "MDphcHAtMzcyNDg0NDUtODNmZS00NmU3LThmZGQtZTQ1MDY1ZjgzYjIyOklOSVRJQUxJWkU9YXBwLTM3MjQ4NDQ1LTgzZmUtNDZlNy04ZmRkLWU0NTA2NWY4M2IyMitSVFUxTlRFek1UUTFSRVF5UWtRd01UQkJORGsxUTBaQlFFRmtiMkpsVDNKblgyWTFaRFUwWW1RNExUSTBaRGt0TkRRM01pMDVOVFJpTFdRNE1qUmtPVFEwTnpJd013PT06MA==",
  previewExecutionId: 0,
};
const previewResult = {
  state: "RESULT_READY",
  page: {
    offset: 0,
    size: 100,
  },
  results: [
    {
      objectId: "GhxXokFpY3JtaWQ6gusTfg",
      _href:
        "https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=GhxXokFpY3JtaWQ6gusTfg",
      relatedObjects: [],
    },
    {
      objectId: "GhxXokFpY3JtaWQ6guv-VA",
      _href:
        "https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=GhxXokFpY3JtaWQ6guv-VA",
      relatedObjects: [],
    },
    {
      objectId: "GhxXokFpY3JtaWQ6gsvkRA",
      _href:
        "https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=GhxXokFpY3JtaWQ6gsvkRA",
      relatedObjects: [],
    },
    {
      objectId: "GhxXokFpY3JtaWQ6gghLEg",
      _href:
        "https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=GhxXokFpY3JtaWQ6gghLEg",
      relatedObjects: [],
    },
    {
      objectId: "GhxXokFpY3JtaWQ6gs2zEQ",
      _href:
        "https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=GhxXokFpY3JtaWQ6gs2zEQ",
      relatedObjects: [],
    },
  ],
  link: {
    nextPage:
      "https://platform.adobe.io/data/core/ups/preview/MDphcHAtMzcyNDg0NDUtODNmZS00NmU3LThmZGQtZTQ1MDY1ZjgzYjIyOklOSVRJQUxJWkU9YXBwLTM3MjQ4NDQ1LTgzZmUtNDZlNy04ZmRkLWU0NTA2NWY4M2IyMitSVFUxTlRFek1UUTFSRVF5UWtRd01UQkJORGsxUTBaQlFFRmtiMkpsVDNKblgyWTFaRFUwWW1RNExUSTBaRGt0TkRRM01pMDVOVFJpTFdRNE1qUmtPVFEwTnpJd013PT06MA==?offset=100&limit=100",
  },
  previewSampledResultsCount: 9000,
};
const profileList = {
  GhxXokFrY3JtaWQ6hAnjYCwC: {
    entityId: "GhxXokFrY3JtaWQ6hAnjYCwC",
    mergePolicy: {
      id: "2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
    },
    sources: ["604a6975dae8b91948b96d93"],
    tags: [""],
    identityGraph: ["GhxXokFrY3JtaWQ6hAnjYCwC"],
    entity: {
      person: {
        name: {
          firstName: "Brooks",
        },
        birthDate: "1990-03-17T00:00:00Z",
      },
      identityMap: {
        crmid: [
          {
            id: "crmid:9334481673",
          },
          {
            id: "crmid:9334481674",
          },
        ],
        email: [
          {
            id: "pulkit@adobe.com",
          },
        ],
      },
    },
    lastModifiedAt: "2021-03-11T19:10:04Z",
  },
  GhxXokFqY3JtaWQ6gyf2l0o: {
    entityId: "GhxXokFqY3JtaWQ6gyf2l0o",
    mergePolicy: {
      id: "2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
    },
    sources: ["604a6975dae8b91948b96d93"],
    tags: [""],
    identityGraph: ["GhxXokFqY3JtaWQ6gyf2l0o"],
    entity: {
      person: {
        name: {
          lastName: "Gilliam",
        },
        birthDate: "1986-12-29T00:00:00Z",
      },
      identityMap: {
        crmid: [
          {
            id: "crmid:1251472935",
          },
        ],
      },
    },
    lastModifiedAt: "2021-03-11T19:10:04Z",
  },
  GhxXokFpY3JtaWQ6gilGYg: {
    entityId: "GhxXokFpY3JtaWQ6gilGYg",
    mergePolicy: {
      id: "2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
    },
    sources: ["604a6975dae8b91948b96d93"],
    tags: [""],
    identityGraph: ["GhxXokFpY3JtaWQ6gilGYg"],
    entity: {
      person: {
        birthDate: "1963-04-20T00:00:00Z",
      },
      identityMap: {
        crmid: [
          {
            id: "crmid:6440489",
          },
        ],
      },
    },
    lastModifiedAt: "2021-03-11T19:09:49Z",
  },
  GhxXokFrY3JtaWQ6hFaRIz8C: {
    entityId: "GhxXokFrY3JtaWQ6hFaRIz8C",
    mergePolicy: {
      id: "2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
    },
    sources: ["604a6975dae8b91948b96d93"],
    tags: [""],
    identityGraph: ["GhxXokFrY3JtaWQ6hFaRIz8C"],
    entity: {},
    lastModifiedAt: "2021-03-11T19:10:05Z",
  },
  GhxXokFpY3JtaWQ6gpKzfQ: {
    entityId: "GhxXokFpY3JtaWQ6gpKzfQ",
    mergePolicy: {
      id: "2ef2ad84-5659-4009-bfaa-1dd04a50ddf0",
    },
    sources: ["604a6975dae8b91948b96d93"],
    tags: [""],
    identityGraph: ["GhxXokFpY3JtaWQ6gpKzfQ"],
    entity: {
      person: {
        name: {
          lastName: "Adkins",
          firstName: "Amos",
        },
        birthDate: "1964-02-09T00:00:00Z",
      },
      identityMap: {
        crmid: [
          {
            id: "crmid:8237970",
          },
        ],
      },
    },
    lastModifiedAt: "2021-03-11T19:09:47Z",
  },
};
const crmSchema = {
  $id:
    "https://ns.adobe.com/adobedemoamericas270/schemas/cb840ce6a216b3d78c832310924665167726123a9aedbe09",
  "meta:altId":
    "_adobedemoamericas270.schemas.cb840ce6a216b3d78c832310924665167726123a9aedbe09",
  "meta:resourceType": "schemas",
  version: "1.1",
  title: "CRM Profile Schema",
  type: "object",
  description: "CRM Profile Schema",
  properties: {
    _adobedemoamericas270: {
      type: "object",
      properties: {
        identification: {
          type: "object",
          properties: {
            ECID: {
              title: "ECID",
              description: "",
              type: "string",
              isRequired: false,
              "meta:xdmType": "string",
            },
            CRMIDCombo: {
              title: "CRMIDCombo",
              description: "",
              type: "string",
              isRequired: false,
              "meta:xdmType": "string",
            },
            CRMID: {
              title: "CRMID",
              description: "",
              type: "string",
              isRequired: false,
              "meta:xdmType": "string",
            },
            Email: {
              title: "Email",
              description: "",
              type: "string",
              isRequired: false,
              "meta:xdmType": "string",
            },
            Cookie: {
              title: "Cookie",
              description: "Cookie",
              type: "string",
              isRequired: false,
              "meta:xdmType": "string",
            },
          },
          "meta:xdmType": "object",
          required: ["CRMID"],
        },
        creditProfileDetails: {
          title: "creditProfileDetails",
          description: "",
          type: "object",
          isRequired: false,
          properties: {
            creditRating: {
              title: "creditRating",
              description: "",
              type: "integer",
              isRequired: false,
              minimum: -9007199254740991,
              maximum: 9007199254740991,
              "meta:xdmType": "long",
            },
          },
          "meta:xdmType": "object",
        },
      },
      "meta:xdmType": "object",
      required: ["identification"],
    },
    _id: {
      title: "Identifier",
      type: "string",
      format: "uri-reference",
      description: "A unique identifier for the record.",
      "meta:xdmType": "string",
      "meta:xdmField": "@id",
    },
    _repo: {
      properties: {
        createDate: {
          type: "string",
          format: "date-time",
          "meta:immutable": true,
          "meta:usereditable": false,
          examples: ["2004-10-23T12:00:00-06:00"],
          description:
            'The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".',
          "meta:xdmType": "date-time",
          "meta:xdmField": "repo:createDate",
        },
        modifyDate: {
          type: "string",
          format: "date-time",
          "meta:usereditable": false,
          examples: ["2004-10-23T12:00:00-06:00"],
          description:
            'The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory\'s child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".',
          "meta:xdmType": "date-time",
          "meta:xdmField": "repo:modifyDate",
        },
      },
      type: "object",
      "meta:xdmType": "object",
      "meta:xedConverted": true,
    },
    createdByBatchID: {
      title: "Created by batch identifier",
      type: "string",
      format: "uri-reference",
      description:
        "The dataset files in Catalog which has been originating the creation of the record.",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:createdByBatchID",
    },
    emailFormat: {
      title: "Email format",
      type: "string",
      description:
        "Email format preferred by the profile. This can be rich text or plain text.",
      "meta:enum": {
        html: "Rich text",
        plaintext: "Plain text",
      },
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:emailFormat",
    },
    faxPhone: {
      title: "Fax phone",
      description: "Fax phone number.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        extension: {
          title: "Extension",
          type: "string",
          description:
            "The internal dialing number used to call from a private exchange, operator, or switchboard.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:extension",
        },
        number: {
          title: "Number",
          type: "string",
          description:
            "The phone number. Note the phone number is a string and may include meaningful characters such as brackets '()', hyphens '-', or characters to indicate sub-dialing identifiers like extensions 'x' for example,  1-353(0)18391111 or +613 9403600x1234.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:number",
        },
        primary: {
          title: "Primary",
          type: "boolean",
          description:
            "Primary phone number indicator. Unlike address or email address, there can be multiple primary phone numbers; one per communication channel. The communication channel is defined by the type: `textMessaging`, `mobile`, `phone`, `home`, `work`, `unknown`, and `fax`.",
          "meta:xdmType": "boolean",
          "meta:xdmField": "xdm:primary",
        },
        status: {
          title: "Status",
          type: "string",
          description:
            "An indication as to the ability to use the phone number.",
          default: "active",
          "meta:enum": {
            active: "Active",
            incomplete: "Incomplete",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:status",
        },
        statusReason: {
          title: "Status reason",
          type: "string",
          description: "A description of the current status.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:statusReason",
        },
        validity: {
          title: "Validity",
          type: "string",
          description: "A level of technical correctness of the phone number.",
          "meta:enum": {
            consistent: "Consistent",
            inconsistent: "Inconsistent",
            incomplete: "Incomplete",
            successfullyUsed: "Successfully used",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:validity",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
      "meta:xdmField": "xdm:faxPhone",
    },
    homeAddress: {
      title: "Home address",
      description: "A home postal address.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        _id: {
          title: "Coordinates ID",
          type: "string",
          format: "uri-reference",
          description: "The unique identifier of the coordinates.",
          "meta:xdmType": "string",
          "meta:xdmField": "@id",
        },
        _repo: {
          properties: {
            createDate: {
              type: "string",
              format: "date-time",
              "meta:immutable": true,
              "meta:usereditable": false,
              examples: ["2004-10-23T12:00:00-06:00"],
              description:
                'The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".',
              "meta:xdmType": "date-time",
              "meta:xdmField": "repo:createDate",
            },
            modifyDate: {
              type: "string",
              format: "date-time",
              "meta:usereditable": false,
              examples: ["2004-10-23T12:00:00-06:00"],
              description:
                'The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory\'s child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".',
              "meta:xdmType": "date-time",
              "meta:xdmField": "repo:modifyDate",
            },
          },
          type: "object",
          "meta:xdmType": "object",
          "meta:xedConverted": true,
        },
        _schema: {
          properties: {
            description: {
              title: "Description",
              type: "string",
              description: "A description of what the coordinates identify.",
              "meta:xdmType": "string",
              "meta:xdmField": "schema:description",
            },
            elevation: {
              title: "Elevation",
              type: "number",
              description:
                "The specific elevation of the defined coordinate. The value conforms to the [WGS84](http://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters.",
              "meta:xdmType": "number",
              "meta:xdmField": "schema:elevation",
            },
            latitude: {
              title: "Latitude",
              type: "number",
              minimum: -90,
              maximum: 90,
              description:
                "The signed vertical coordinate of a geographic point.",
              "meta:xdmType": "number",
              "meta:xdmField": "schema:latitude",
            },
            longitude: {
              title: "Longitude",
              type: "number",
              minimum: -180,
              maximum: 180,
              description:
                "The signed horizontal coordinate of a geographic point.",
              "meta:xdmType": "number",
              "meta:xdmField": "schema:longitude",
            },
          },
          type: "object",
          "meta:xdmType": "object",
          "meta:xedConverted": true,
        },
        city: {
          title: "City",
          type: "string",
          description: "The name of the city.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:city",
        },
        country: {
          title: "Country",
          type: "string",
          description:
            "The name of the government-administered territory. Other than `xdm:countryCode`, this is a free-form field that can have the country name in any language.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:country",
        },
        countryCode: {
          title: "Country code",
          type: "string",
          pattern: "^[A-Z]{2}$",
          description:
            "The two-character [ISO 3166-1 alpha-2](https://datahub.io/core/country-list) code for the country.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:countryCode",
        },
        createdByBatchID: {
          title: "Created by batch identifier",
          type: "string",
          format: "uri-reference",
          description:
            "The dataset files in Catalog which has been originating the creation of the record.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:createdByBatchID",
        },
        dmaID: {
          title: "Designated market area",
          type: "integer",
          description: "The Nielsen media research designated market area.",
          "meta:xdmType": "int",
          "meta:xdmField": "xdm:dmaID",
        },
        label: {
          title: "Label",
          type: "string",
          description: "Free form name of the address.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:label",
        },
        lastVerifiedDate: {
          title: "Last verified date",
          type: "string",
          format: "date",
          description:
            "The date that the address was last verified as still associated to the person.",
          "meta:xdmType": "date",
          "meta:xdmField": "xdm:lastVerifiedDate",
        },
        modifiedByBatchID: {
          title: "Modified by batch identifier",
          type: "string",
          format: "uri-reference",
          description:
            "The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:modifiedByBatchID",
        },
        msaID: {
          title: "Metropolitan statistical area",
          type: "integer",
          description:
            "The metropolitan statistical area in the United States where the observation occurred.",
          "meta:xdmType": "int",
          "meta:xdmField": "xdm:msaID",
        },
        postOfficeBox: {
          title: "Post office box",
          type: "string",
          description: "Post office box of the address.",
          maxLength: 20,
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:postOfficeBox",
        },
        postalCode: {
          title: "Postal code",
          type: "string",
          description:
            "The postal code of the location. Postal codes are not available for all countries. In some countries, this will only contain part of the postal code.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:postalCode",
        },
        primary: {
          title: "Primary",
          type: "boolean",
          description:
            "Primary address indicator. A profile can have only one `primary` address at a given point of time.",
          "meta:xdmType": "boolean",
          "meta:xdmField": "xdm:primary",
        },
        region: {
          title: "Region",
          type: "string",
          description:
            "The region, county, or district portion of the address.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:region",
        },
        repositoryCreatedBy: {
          title: "Created by user identifier",
          type: "string",
          description: "User ID of who created the record.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:repositoryCreatedBy",
        },
        repositoryLastModifiedBy: {
          title: "Modified by user identifier",
          type: "string",
          description:
            "User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:repositoryLastModifiedBy",
        },
        state: {
          title: "State",
          type: "string",
          description: "The name of the State. This is a free-form field.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:state",
        },
        stateProvince: {
          title: "State or province",
          type: "string",
          description:
            "The state, or province portion of the observation. The format follows the [ISO 3166-2 (country and subdivision)][http://www.unece.org/cefact/locode/subdivisions.html] standard.",
          examples: ["US-CA", "DE-BB", "JP-13"],
          pattern: "([A-Z]{2}-[A-Z0-9]{1,3}|)",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:stateProvince",
        },
        status: {
          title: "Status",
          type: "string",
          description: "An indication as to the ability to use the address.",
          default: "active",
          "meta:enum": {
            active: "Active",
            incomplete: "Incomplete",
            pending_verification: "Pending verification",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:status",
        },
        statusReason: {
          title: "Status reason",
          type: "string",
          description: "A description of the current status.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:statusReason",
        },
        street1: {
          title: "Street 1",
          type: "string",
          description:
            "Primary street level information, apartment number, street number, and street name.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:street1",
        },
        street2: {
          title: "Street 2",
          type: "string",
          description: "Optional street information second line.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:street2",
        },
        street3: {
          title: "Street 3",
          type: "string",
          description: "Optional street information third line.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:street3",
        },
        street4: {
          title: "Street 4",
          type: "string",
          description: "Optional street information fourth line.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:street4",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/common/address",
      "meta:xdmField": "xdm:homeAddress",
    },
    homePhone: {
      title: "Home phone",
      description: "Home phone number.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        extension: {
          title: "Extension",
          type: "string",
          description:
            "The internal dialing number used to call from a private exchange, operator, or switchboard.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:extension",
        },
        number: {
          title: "Number",
          type: "string",
          description:
            "The phone number. Note the phone number is a string and may include meaningful characters such as brackets '()', hyphens '-', or characters to indicate sub-dialing identifiers like extensions 'x' for example,  1-353(0)18391111 or +613 9403600x1234.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:number",
        },
        primary: {
          title: "Primary",
          type: "boolean",
          description:
            "Primary phone number indicator. Unlike address or email address, there can be multiple primary phone numbers; one per communication channel. The communication channel is defined by the type: `textMessaging`, `mobile`, `phone`, `home`, `work`, `unknown`, and `fax`.",
          "meta:xdmType": "boolean",
          "meta:xdmField": "xdm:primary",
        },
        status: {
          title: "Status",
          type: "string",
          description:
            "An indication as to the ability to use the phone number.",
          default: "active",
          "meta:enum": {
            active: "Active",
            incomplete: "Incomplete",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:status",
        },
        statusReason: {
          title: "Status reason",
          type: "string",
          description: "A description of the current status.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:statusReason",
        },
        validity: {
          title: "Validity",
          type: "string",
          description: "A level of technical correctness of the phone number.",
          "meta:enum": {
            consistent: "Consistent",
            inconsistent: "Inconsistent",
            incomplete: "Incomplete",
            successfullyUsed: "Successfully used",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:validity",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
      "meta:xdmField": "xdm:homePhone",
    },
    identityMap: {
      type: "object",
      "meta:xdmType": "map",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          "meta:xdmType": "object",
          properties: {
            authenticatedState: {
              description:
                "The state this identity is authenticated as for this observed ExperienceEvent.",
              type: "string",
              default: "ambiguous",
              enum: ["ambiguous", "authenticated", "loggedOut"],
              "meta:enum": {
                ambiguous: "Ambiguous",
                authenticated:
                  "User identified by a login or similar action that was valid at the time of the event observation.",
                loggedOut:
                  "User was identified by a login action at some point of time previously, but is not currently logged in.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:authenticatedState",
            },
            id: {
              title: "Identifier",
              type: "string",
              description: "Identity of the consumer in the related namespace.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:id",
            },
            primary: {
              title: "Primary",
              type: "boolean",
              default: false,
              description:
                "Indicates this identity is the preferred identity. Is used as a hint to help systems better organize how identities are queried.",
              "meta:xdmType": "boolean",
              "meta:xdmField": "xdm:primary",
            },
          },
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/identityitem",
        },
        "meta:xdmType": "array",
      },
      "meta:xdmField": "xdm:identityMap",
    },
    mobilePhone: {
      title: "Mobile phone",
      description: "Mobile phone number.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        extension: {
          title: "Extension",
          type: "string",
          description:
            "The internal dialing number used to call from a private exchange, operator, or switchboard.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:extension",
        },
        number: {
          title: "Number",
          type: "string",
          description:
            "The phone number. Note the phone number is a string and may include meaningful characters such as brackets '()', hyphens '-', or characters to indicate sub-dialing identifiers like extensions 'x' for example,  1-353(0)18391111 or +613 9403600x1234.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:number",
        },
        primary: {
          title: "Primary",
          type: "boolean",
          description:
            "Primary phone number indicator. Unlike address or email address, there can be multiple primary phone numbers; one per communication channel. The communication channel is defined by the type: `textMessaging`, `mobile`, `phone`, `home`, `work`, `unknown`, and `fax`.",
          "meta:xdmType": "boolean",
          "meta:xdmField": "xdm:primary",
        },
        status: {
          title: "Status",
          type: "string",
          description:
            "An indication as to the ability to use the phone number.",
          default: "active",
          "meta:enum": {
            active: "Active",
            incomplete: "Incomplete",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:status",
        },
        statusReason: {
          title: "Status reason",
          type: "string",
          description: "A description of the current status.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:statusReason",
        },
        validity: {
          title: "Validity",
          type: "string",
          description: "A level of technical correctness of the phone number.",
          "meta:enum": {
            consistent: "Consistent",
            inconsistent: "Inconsistent",
            incomplete: "Incomplete",
            successfullyUsed: "Successfully used",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:validity",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/phonenumber",
      "meta:xdmField": "xdm:mobilePhone",
    },
    modifiedByBatchID: {
      title: "Modified by batch identifier",
      type: "string",
      format: "uri-reference",
      description:
        "The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:modifiedByBatchID",
    },
    optInOut: {
      title: "OptInOut",
      description:
        "Describes a users opting in and out preferences for communication by medium and communication type.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        _channels: {
          properties: {
            adm: {
              title: "Amazon Device Messaging",
              description: "Amazon Device Messaging (ADM) channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/adm",
            },
            agency: {
              title: "Agency",
              description: "External agency channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/agency",
            },
            apns: {
              title: "Apple Push Notification Service",
              description:
                "Apple Push Notification Service (APNS) channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/apns",
            },
            application: {
              title: "Application",
              description: "Application channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/application",
            },
            baidu: {
              title: "Baidu Cloud Push Service",
              description: "Baidu Cloud Push Service channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/baidu",
            },
            channel: {
              title: "Experience Channel",
              description: "Experience channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/channel",
            },
            directMail: {
              title: "Direct mail",
              description:
                "Mail delivered by a postal service channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/direct-mail",
            },
            email: {
              title: "Email",
              description:
                "Email messages, delivered via SMTP to list subscribers channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/email",
            },
            facebookFeed: {
              title: "Facebook news feed",
              description: "The Facebook news feed channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField":
                "https://ns.adobe.com/xdm/channels/facebook-feed",
            },
            fax: {
              title: "Fax",
              description: "Fax or telefacsimile channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/fax",
            },
            gcm: {
              title: "Google Cloud Messaging",
              description: "Google Cloud Messaging (GCM) channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/gcm",
            },
            line: {
              title: "Line Platform Notification",
              description:
                "Line Platform Notification (LINE) channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/line",
            },
            mobileApp: {
              title: "Web",
              description:
                "Native mobile applications that are installed through an app store channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/mobile-app",
            },
            mpns: {
              title: "Microsoft Push Notification Service",
              description:
                "Microsoft Push Notification Service (MPNS) channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/mpns",
            },
            phone: {
              title: "Phone",
              description: "The telephone channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/phone",
            },
            sms: {
              title: "SMS",
              description:
                "Short Message Service delivered to a mobile phone channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/sms",
            },
            twitterFeed: {
              title: "Twitter feed",
              description: "Twitter feed channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/twitter-feed",
            },
            web: {
              title: "Web",
              description: "World Wide Web and mobile web channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/web",
            },
            webpage: {
              title: "Web Page",
              description: "Web Page channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/webpage",
            },
            wechat: {
              title: "WeChat",
              description: "WeChat Platform Notification channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/wechat",
            },
            wns: {
              title: "Windows Push Notification Service",
              description:
                "Windows Push Notification Service (WNS) channel OptInOut.",
              type: "string",
              default: "not_provided",
              enum: ["not_provided", "pending", "in", "out"],
              "meta:enum": {
                not_provided: "Not provided",
                pending: "Pending verification",
                in:
                  "Opt-in: the user explicitly consents to receiving messages.",
                out:
                  "Opt-out: the user declines to receive any messages on this channel.",
              },
              "meta:xdmType": "string",
              "meta:xdmField": "https://ns.adobe.com/xdm/channels/wns",
            },
          },
          type: "object",
          "meta:xdmType": "object",
          "meta:xedConverted": true,
        },
        globalOptout: {
          title: "Global Opt-out",
          type: "boolean",
          description: "Do not contact this profile on any outbound channel.",
          default: false,
          "meta:xdmType": "boolean",
          "meta:xdmField": "xdm:globalOptout",
        },
        optOutDetails: {
          type: "object",
          properties: {
            directMail: {
              title: "Additional Details for Direct-Mail Opt Out",
              description:
                "Additional details for direct-mail opt out like reason, date.",
              type: "object",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  title: "Opt Out Date",
                  description: "Date of opting out for a notification.",
                  type: "string",
                  format: "date-time",
                  "meta:xdmType": "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                },
                optOutReason: {
                  title: "Opt Out Reason",
                  description: "Reason for opting out for a notification.",
                  type: "string",
                  "meta:xdmType": "string",
                  "meta:xdmField": "xdm:optOutReason",
                },
              },
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:direct-mail",
            },
            email: {
              title: "Additional Details for Email Opt Out",
              description:
                "Additional Details for Email Opt Out like reason, date.",
              type: "object",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  title: "Opt Out Date",
                  description: "Date of opting out for a notification.",
                  type: "string",
                  format: "date-time",
                  "meta:xdmType": "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                },
                optOutReason: {
                  title: "Opt Out Reason",
                  description: "Reason for opting out for a notification.",
                  type: "string",
                  "meta:xdmType": "string",
                  "meta:xdmField": "xdm:optOutReason",
                },
              },
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:email",
            },
            fax: {
              title: "Additional Details for Fax Opt Out",
              description:
                "Additional details for fax opt out like reason, date.",
              type: "object",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  title: "Opt Out Date",
                  description: "Date of opting out for a notification.",
                  type: "string",
                  format: "date-time",
                  "meta:xdmType": "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                },
                optOutReason: {
                  title: "Opt Out Reason",
                  description: "Reason for opting out for a notification.",
                  type: "string",
                  "meta:xdmType": "string",
                  "meta:xdmField": "xdm:optOutReason",
                },
              },
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:fax",
            },
            phone: {
              title: "Additional Details for Phone Opt Out",
              description:
                "Additional details for phone opt out like reason, date.",
              type: "object",
              "meta:xdmType": "object",
              properties: {
                optOutDate: {
                  title: "Opt Out Date",
                  description: "Date of opting out for a notification.",
                  type: "string",
                  format: "date-time",
                  "meta:xdmType": "date-time",
                  "meta:xdmField": "xdm:optOutDate",
                },
                optOutReason: {
                  title: "Opt Out Reason",
                  description: "Reason for opting out for a notification.",
                  type: "string",
                  "meta:xdmType": "string",
                  "meta:xdmField": "xdm:optOutReason",
                },
              },
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/common/optinout-additional-details",
              "meta:xdmField": "xdm:phone",
            },
          },
          "meta:xdmType": "object",
          "meta:xdmField": "xdm:optOutDetails",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/optinout",
      "meta:xdmField": "xdm:optInOut",
    },
    person: {
      title: "Person",
      description: "An individual actor, contact, or owner.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        birthDate: {
          title: "Birth date",
          type: "string",
          format: "date",
          description: "The full date a person was born.",
          "meta:xdmType": "date",
          "meta:xdmField": "xdm:birthDate",
        },
        birthDayAndMonth: {
          title: "Birth date",
          type: "string",
          pattern: "[0-1][0-9]-[0-9][0-9]",
          description:
            "The day and month a person was born, in the format MM-DD. This field should be used when the day and month of a person's birth is known, but not the year.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:birthDayAndMonth",
        },
        birthYear: {
          title: "Birth year",
          type: "integer",
          description:
            "The year a person was born including the century, for example, 1983.  This field should be used when only the person's age is known, not the full birth date.",
          minimum: 1,
          maximum: 32767,
          "meta:xdmType": "short",
          "meta:xdmField": "xdm:birthYear",
        },
        gender: {
          title: "Gender",
          type: "string",
          enum: ["male", "female", "not_specified", "non_specific"],
          "meta:enum": {
            male: "Male",
            female: "Female",
            not_specified: "Not Specified",
            non_specific: "Non-specific",
          },
          description: "Gender identity of the person.\n",
          default: "not_specified",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:gender",
        },
        maritalStatus: {
          title: "Marital Status",
          type: "string",
          enum: ["married", "single", "divorced", "widowed", "not_specified"],
          "meta:enum": {
            married: "Married",
            single: "Single",
            divorced: "Divorced",
            widowed: "Widowed",
            not_specified: "Not Specified",
          },
          description:
            "Describes a person's relationship with a significant other.",
          default: "not_specified",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:maritalStatus",
        },
        name: {
          title: "Full name",
          description: "The person's full name.",
          type: "object",
          "meta:xdmType": "object",
          properties: {
            courtesyTitle: {
              title: "Courtesy title",
              type: "string",
              description:
                "Normally an abbreviation of a persons title, honorific, or salutation. The `courtesyTitle` is used in front of full or last name in opening texts. For example, Mr. Miss. or Dr.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:courtesyTitle",
            },
            firstName: {
              title: "First name",
              type: "string",
              description:
                "The first segment of the name in the writing order most commonly accepted in the language of the name. In many cultures this is the preferred personal or given name. The `firstName` and `lastName` properties have been introduced to maintain compatibility with existing systems that model names in a simplified, non-semantic, and non-internationalizable way. Using `xdm:fullName` is always preferable.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:firstName",
            },
            fullName: {
              title: "Full name",
              type: "string",
              description:
                "The full name of the person, in writing order most commonly accepted in the language of the name.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:fullName",
            },
            lastName: {
              title: "Last name",
              type: "string",
              description:
                "The last segment of the name in the writing order most commonly accepted in the language of the name. In many cultures this is the inherited family name, surname, patronymic, or matronymic name. The `firstName` and `lastName` properties have been introduced to maintain compatibility with existing systems that model names in a simplified, non-semantic, and non-internationalizable way. Using `xdm:fullName` is always preferable.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:lastName",
            },
            middleName: {
              title: "Middle name",
              type: "string",
              description:
                "Middle, alternative, or additional names supplied between the first name and last name.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:middleName",
            },
            suffix: {
              title: "Suffix",
              type: "string",
              description:
                "A group of letters provided after a person's name to provide additional information. The `suffix` is used at the end of someones name. For example Jr., Sr., M.D., PhD, I, II, III, etc.",
              "meta:xdmType": "string",
              "meta:xdmField": "xdm:suffix",
            },
          },
          "meta:referencedFrom": "https://ns.adobe.com/xdm/context/person-name",
          "meta:xdmField": "xdm:name",
        },
        nationality: {
          title: "Nationality",
          type: "string",
          pattern: "^[A-Z]{2}$",
          description:
            "The legal relationship between a person and their state represented using the ISO 3166-1 Alpha-2 code.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:nationality",
        },
        taxId: {
          title: "Tax ID",
          type: "string",
          description:
            "The Tax / Fiscal ID of the person, e.g. the TIN in the US or the CIF/NIF in Spain.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:taxId",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/person",
      "meta:xdmField": "xdm:person",
    },
    personID: {
      title: "Person ID",
      description: "Unique identifier of Person/Profile fragment.",
      type: "string",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:personID",
    },
    personalEmail: {
      title: "Personal email",
      description: "A personal email address.",
      type: "object",
      "meta:xdmType": "object",
      properties: {
        address: {
          title: "Address",
          type: "string",
          format: "email",
          description:
            "The technical address, for example, 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:address",
        },
        label: {
          title: "Label",
          type: "string",
          description:
            "Additional display information that maybe available, for example, Microsoft Outlook rich address controls display 'John Smith smithjr@company.uk', 'John Smith' part is data that would be placed in the label.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:label",
        },
        primary: {
          title: "Primary",
          type: "boolean",
          description:
            "Primary email indicator. A profile can have only one `primary` email address at a given point of time.",
          "meta:xdmType": "boolean",
          "meta:xdmField": "xdm:primary",
        },
        status: {
          title: "Status",
          type: "string",
          description:
            "An indication as to the ability to use the email address.",
          default: "active",
          "meta:enum": {
            active: "Active",
            incomplete: "Incomplete",
            pending_verification: "Pending verification",
            blacklisted: "Blacklisted",
            blocked: "Blocked",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:status",
        },
        statusReason: {
          title: "Status reason",
          type: "string",
          description: "A description of the current status.",
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:statusReason",
        },
        type: {
          title: "Type",
          type: "string",
          description:
            "The way the account relates to the person for example 'work' or 'personal'.",
          "meta:enum": {
            unknown: "Unknown",
            personal: "Personal",
            work: "Work",
            education: "Education",
          },
          "meta:xdmType": "string",
          "meta:xdmField": "xdm:type",
        },
      },
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/emailaddress",
      "meta:xdmField": "xdm:personalEmail",
    },
    preferredLanguage: {
      title: "Preferred language",
      type: "string",
      pattern:
        "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
      examples: ["en-GB", "de-DE", "yue-HK"],
      description:
        "Describes the preferred system of communication used by the profile. Language codes are expressed in BCP 47 format.",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:preferredLanguage",
    },
    profilePictureLink: {
      title: "Profile picture link",
      type: "string",
      description: "Link to profile's picture.",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:profilePictureLink",
    },
    repositoryCreatedBy: {
      title: "Created by user identifier",
      type: "string",
      description: "User ID of who created the record.",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:repositoryCreatedBy",
    },
    repositoryLastModifiedBy: {
      title: "Modified by user identifier",
      type: "string",
      description:
        "User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:repositoryLastModifiedBy",
    },
    timeZone: {
      title: "Time zone",
      type: "string",
      examples: ["America/Barbados", "Antarctica/Davis", "Asia/Calcutta"],
      description:
        "Describes which time zone the profile is present in, most frequently the time zone preferred by the profile. Time zones are expressed according to the IETF tz database: https://www.ietf.org/timezones/tzdb-2016i/tz-link.htm",
      "meta:xdmType": "string",
      "meta:xdmField": "xdm:timeZone",
    },
  },
  required: ["_adobedemoamericas270"],
  imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
  "meta:extensible": false,
  "meta:abstract": false,
  "meta:extends": [
    "https://ns.adobe.com/adobedemoamericas270/mixins/bfc38d1f79ef0393502e00dd56902aeb0124e9fc046b4f4f",
    "https://ns.adobe.com/adobedemoamericas270/mixins/b0a0b15a6d3bd1a11dc0d045db0e7aa11b3788d723855848",
    "https://ns.adobe.com/xdm/context/profile-person-details",
    "https://ns.adobe.com/xdm/context/profile-personal-details",
    "https://ns.adobe.com/xdm/common/auditable",
    "https://ns.adobe.com/xdm/data/record",
    "https://ns.adobe.com/xdm/context/identitymap",
    "https://ns.adobe.com/xdm/context/profile",
    "https://ns.adobe.com/xdm/context/profile-preferences-details",
  ],
  "meta:xdmType": "object",
  "meta:registryMetadata": {
    "repo:createdDate": 1615489394711,
    "repo:lastModifiedDate": 1615489396739,
    "xdm:createdClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
    "xdm:lastModifiedClientId": "5b7ca58b978b4f9889c7f3e574d46ac3",
    "xdm:createdUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
    "xdm:lastModifiedUserId": "E76F15505E83842B0A495FE6@techacct.adobe.com",
    eTag: "131e879c34fbefa2794dc680f7fe80da4873ca6c928ababb72bebd3199a35928",
    "meta:globalLibVersion": "1.20.2",
  },
  "meta:class": "https://ns.adobe.com/xdm/context/profile",
  "meta:containerId": "f5d54bd8-24d9-4472-954b-d824d9447203",
  "meta:sandboxId": "f5d54bd8-24d9-4472-954b-d824d9447203",
  "meta:sandboxType": "development",
  "meta:tenantNamespace": "_adobedemoamericas270",
  "meta:immutableTags": ["union"],
};
const experienceEventSchema = {
  $id: "https://ns.adobe.com/xdm/context/experienceevent__union",
  imsOrg: "E8475990589B24A90A495DDD@AdobeOrg",
  "meta:altId": "_xdm.context.experienceevent__union",
  "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
  "meta:containerId": "a44a7a2e-6dd1-40b8-8a7a-2e6dd160b8cb",
  "meta:extends": [
    "https://ns.adobe.com/xdm/data/time-series",
    "https://ns.adobe.com/experience/campaign/experienceevent-profile-test-profile",
    "https://ns.adobe.com/experience/experienceevent-edgeregion",
    "https://ns.adobe.com/salesvelocity/schemas/de2abb0bb4a1453c9ec44392e0f61074",
    "https://ns.adobe.com/salesvelocity/mixins/afe62b0e5d42d284fea396ace493c46587911e8b171b4e42",
    "https://ns.adobe.com/xdm/context/experienceevent-web",
    "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
    "https://ns.adobe.com/salesvelocity/schemas/3c7505f5b3fdf94ce8f6228295e1e9109ec4a931878dd3b0",
    "https://ns.adobe.com/salesvelocity/mixins/fb8929e8ab3cabb46cfd9d845bd6ab98",
    "https://ns.adobe.com/salesvelocity/schemas/cbb67db71902e89a41d2155d9dc5ee219c4d19da973cf42f",
    "https://ns.adobe.com/xdm/context/identitymap",
    "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
    "https://ns.adobe.com/experience/aep-web-sdk-experienceevent",
    "https://ns.adobe.com/salesvelocity/schemas/50f91af3178e6848afe68974d90ba364",
    "https://ns.adobe.com/experience/campaign/experienceevent-profile-push-details",
    "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
    "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
    "https://ns.adobe.com/xdm/context/experienceevent-commerce",
    "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
    "https://ns.adobe.com/experience/decisioning/proposition-interaction",
    "https://ns.adobe.com/xdm/context/experienceevent",
    "https://ns.adobe.com/salesvelocity/schemas/70e7c5a5238a50c9186fbba0262871d34282b0593c58f32d",
    "https://ns.adobe.com/salesvelocity/mixins/e46e3fbaeaa2e805ab9186c0e4adbc36",
    "https://ns.adobe.com/xdm/context/experienceevent-implementation-details",
    "https://ns.adobe.com/salesvelocity/schemas/f1e684528f30d116c548744136d23fa2b5f6fa1bdccad96e",
    "https://ns.adobe.com/salesvelocity/schemas/7596c6021d21cd16f7e0b520fdaa69a5",
    "https://ns.adobe.com/salesvelocity/schemas/0cfad8bbccb884e690646c1a75a9abd5",
    "https://ns.adobe.com/salesvelocity/mixins/513cdb53ea908c4ddc7095f24c14d914668346cd4adfc2cd",
    "https://ns.adobe.com/experience/campaign/orchestration/eventid",
  ],
  "meta:referencedFrom": [
    "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventDataFetchFields",
    "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventCommonFields",
    "https://ns.adobe.com/experience/campaign/experienceevent-profile-test-profile",
    "https://ns.adobe.com/experience/experienceevent-edgeregion",
    "https://ns.adobe.com/xdm/context/experienceevent-commerce",
    "https://ns.adobe.com/salesvelocity/mixins/afe62b0e5d42d284fea396ace493c46587911e8b171b4e42",
    "https://ns.adobe.com/xdm/context/experienceevent-web",
    "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
    "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
    "https://ns.adobe.com/xdm/context/experienceevent",
    "https://ns.adobe.com/salesvelocity/mixins/fb8929e8ab3cabb46cfd9d845bd6ab98",
    "https://ns.adobe.com/salesvelocity/mixins/e46e3fbaeaa2e805ab9186c0e4adbc36",
    "https://ns.adobe.com/xdm/context/identitymap",
    "https://ns.adobe.com/experience/journeyOrchestration/stepEvents/journeyStepEventActionExecutionFields",
    "https://ns.adobe.com/experience/aep-web-sdk-experienceevent",
    "https://ns.adobe.com/salesvelocity/mixins/513cdb53ea908c4ddc7095f24c14d914668346cd4adfc2cd",
    "https://ns.adobe.com/experience/campaign/experienceevent-profile-push-details",
    "https://ns.adobe.com/experience/campaign/orchestration/eventid",
  ],
  "meta:registryMetadata": {
    eTag: "8c2b579b9e1e1c048d87609086e28cf7f7cfb4abd2357cb44fb5d97a7281f03c",
    "meta:globalLibVersion": "1.20.3",
  },
  "meta:resourceType": "unions",
  "meta:sandboxId": "a44a7a2e-6dd1-40b8-8a7a-2e6dd160b8cb",
  "meta:sandboxType": "development",
  "meta:xdmType": "object",
  properties: {
    _experience: {
      "meta:xdmType": "object",
      "meta:xedConverted": true,
      properties: {
        campaign: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            message: {
              "meta:xdmField":
                "https://ns.adobe.com/experience/campaign/message",
              "meta:xdmType": "object",
              properties: {
                profileSnapshot: {
                  "meta:xdmField": "xdm:profileSnapshot",
                  "meta:xdmType": "object",
                  properties: {
                    pushNotificationTokens: {
                      items: {
                        "meta:referencedFrom":
                          "https://ns.adobe.com/xdm/context/pushnotificationtoken",
                        "meta:xdmType": "object",
                        properties: {
                          application: {
                            "meta:referencedFrom":
                              "https://ns.adobe.com/xdm/context/application",
                            "meta:xdmField": "xdm:application",
                            "meta:xdmType": "object",
                            properties: {
                              applicationCloses: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:applicationCloses",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              crashes: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:crashes",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              featureUsages: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:featureUsages",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              firstLaunches: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:firstLaunches",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              id: {
                                "meta:xdmField": "xdm:id",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              installs: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:installs",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              launches: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:launches",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              name: {
                                "meta:xdmField": "xdm:name",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              upgrades: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/data/measure",
                                "meta:xdmField": "xdm:upgrades",
                                "meta:xdmType": "object",
                                properties: {
                                  id: {
                                    "meta:xdmField": "xdm:id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  value: {
                                    "meta:xdmField": "xdm:value",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                required: ["value"],
                                type: "object",
                              },
                              userPerspective: {
                                enum: ["foreground", "background", "detached"],
                                "meta:enum": {
                                  background: "Background",
                                  detached: "Detached",
                                  foreground: "Foreground",
                                },
                                "meta:xdmField": "xdm:userPerspective",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              version: {
                                "meta:xdmField": "xdm:version",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          channel: {
                            "meta:referencedFrom":
                              "https://ns.adobe.com/xdm/channels/channel",
                            "meta:xdmField": "xdm:channel",
                            "meta:xdmType": "object",
                            properties: {
                              _id: {
                                format: "uri-reference",
                                "meta:xdmField": "@id",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              _type: {
                                format: "uri",
                                "meta:enum": {
                                  "https://ns.adobe.com/xdm/channel-types/affiliate":
                                    "Affiliate",
                                  "https://ns.adobe.com/xdm/channel-types/affinity":
                                    "Affinity",
                                  "https://ns.adobe.com/xdm/channel-types/apps":
                                    "Applications",
                                  "https://ns.adobe.com/xdm/channel-types/direct":
                                    "Direct",
                                  "https://ns.adobe.com/xdm/channel-types/display":
                                    "Display",
                                  "https://ns.adobe.com/xdm/channel-types/email":
                                    "Email",
                                  "https://ns.adobe.com/xdm/channel-types/external":
                                    "External",
                                  "https://ns.adobe.com/xdm/channel-types/instore":
                                    "Instore",
                                  "https://ns.adobe.com/xdm/channel-types/mail":
                                    "Mail",
                                  "https://ns.adobe.com/xdm/channel-types/messaging":
                                    "Instant messaging",
                                  "https://ns.adobe.com/xdm/channel-types/mobile":
                                    "Mobile apps",
                                  "https://ns.adobe.com/xdm/channel-types/offline":
                                    "Non-digital experience channels",
                                  "https://ns.adobe.com/xdm/channel-types/preload":
                                    "Preload",
                                  "https://ns.adobe.com/xdm/channel-types/search":
                                    "Search",
                                  "https://ns.adobe.com/xdm/channel-types/social":
                                    "Social media platforms",
                                  "https://ns.adobe.com/xdm/channel-types/social_display":
                                    "Social Display",
                                  "https://ns.adobe.com/xdm/channel-types/video":
                                    "Video",
                                  "https://ns.adobe.com/xdm/channel-types/web":
                                    "The world wide web, including mobile web",
                                },
                                "meta:xdmField": "@type",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              contentTypes: {
                                items: {
                                  format: "uri",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                "meta:xdmField": "xdm:contentTypes",
                                "meta:xdmType": "array",
                                type: "array",
                              },
                              locationTypes: {
                                items: {
                                  format: "uri",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                "meta:xdmField": "xdm:locationTypes",
                                "meta:xdmType": "array",
                                type: "array",
                              },
                              mediaAction: {
                                "meta:enum": {
                                  bounces: "Bounces",
                                  clicks: "Clicks",
                                  impressions: "Impressions",
                                  mirrorpages: "Mirrorpages",
                                  nonDeliverables: "NonDeliverables",
                                  notSent: "NotSent",
                                  offerOpens: "OfferOpens",
                                  opens: "Opens",
                                  sends: "Sends",
                                  subscriptions: "Subscriptions",
                                  unSubscriptions: "UnSubscriptions",
                                  userComplaints: "UserComplaints",
                                },
                                "meta:xdmField": "xdm:mediaAction",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              mediaType: {
                                "meta:enum": {
                                  earned: "Earned",
                                  owned: "Owned",
                                  paid: "Paid",
                                },
                                "meta:xdmField": "xdm:mediaType",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              metricTypes: {
                                items: {
                                  format: "uri",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                "meta:xdmField": "xdm:metricTypes",
                                "meta:xdmType": "array",
                                type: "array",
                              },
                              mode: {
                                enum: ["push", "pull", "bidirectional"],
                                "meta:enum": {
                                  bidirectional:
                                    "Both `push` and `pull` interaction modes are supported by the channel.",
                                  pull:
                                    "The consumer can initiate an experience by requesting a location in the channel. Most `pull` channels give publishers some control how the experience is then delivered.",
                                  push:
                                    "The publisher of an experience can initiate an experience by sending a message into the channel. Most `push` channels involve some form of subscription or opt-in.",
                                },
                                "meta:xdmField": "xdm:mode",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              typeAtSource: {
                                "meta:xdmField": "xdm:typeAtSource",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            required: ["_id"],
                            type: "object",
                          },
                          deregistrationDate: {
                            format: "date-time",
                            "meta:xdmField": "xdm:deregistrationDate",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                          device: {
                            "meta:referencedFrom":
                              "https://ns.adobe.com/xdm/context/device",
                            "meta:xdmField": "xdm:device",
                            "meta:xdmType": "object",
                            properties: {
                              colorDepth: {
                                "meta:xdmField": "xdm:colorDepth",
                                "meta:xdmType": "int",
                                type: "integer",
                              },
                              isBackgroundPushEnabled: {
                                "meta:xdmField": "xdm:isBackgroundPushEnabled",
                                "meta:xdmType": "boolean",
                                type: "boolean",
                              },
                              isLocationEnabled: {
                                "meta:xdmField": "xdm:isLocationEnabled",
                                "meta:xdmType": "boolean",
                                type: "boolean",
                              },
                              isPushOptIn: {
                                "meta:xdmField": "xdm:isPushOptIn",
                                "meta:xdmType": "boolean",
                                type: "boolean",
                              },
                              locationPermission: {
                                enum: [
                                  "SYSTEM_LOCATION_DISABLED",
                                  "NOT_ALLOWED",
                                  "ALWAYS_ALLOWED",
                                  "FOREGROUND_ALLOWED",
                                  "UNPROMPTED",
                                ],
                                "meta:xdmField": "xdm:locationPermission",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              manufacturer: {
                                "meta:xdmField": "xdm:manufacturer",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              model: {
                                "meta:xdmField": "xdm:model",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              modelNumber: {
                                "meta:xdmField": "xdm:modelNumber",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              screenHeight: {
                                "meta:xdmField": "xdm:screenHeight",
                                "meta:xdmType": "int",
                                type: "integer",
                              },
                              screenOrientation: {
                                enum: ["portrait", "landscape"],
                                "meta:enum": {
                                  landscape: "Landscape",
                                  portrait: "Portrait",
                                },
                                "meta:xdmField": "xdm:screenOrientation",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              screenWidth: {
                                "meta:xdmField": "xdm:screenWidth",
                                "meta:xdmType": "int",
                                type: "integer",
                              },
                              type: {
                                "meta:enum": {
                                  computers: "Computers",
                                  desktop: "Desktop",
                                  ereader: "E-reader",
                                  gaming: "Gaming console",
                                  mediaplayer: "Media player",
                                  mobile: "Mobile",
                                  settop: "Set-top box",
                                  tablet: "Tablet",
                                  television: "Television",
                                  "tv screens": "TV screens",
                                },
                                "meta:xdmField": "xdm:type",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              typeID: {
                                "meta:xdmField": "xdm:typeID",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              typeIDService: {
                                format: "uri",
                                "meta:enum": {
                                  "https://ns.adobe.com/xdm/external/adobecampaign":
                                    "Adobe Campaign",
                                  "https://ns.adobe.com/xdm/external/deviceatlas":
                                    "DeviceAtlas",
                                },
                                "meta:xdmField": "xdm:typeIDService",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          environment: {
                            "meta:referencedFrom":
                              "https://ns.adobe.com/xdm/context/environment",
                            "meta:xdmField": "xdm:environment",
                            "meta:xdmType": "object",
                            properties: {
                              ISP: {
                                "meta:xdmField": "xdm:ISP",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              _dc: {
                                "meta:xdmType": "object",
                                "meta:xedConverted": true,
                                properties: {
                                  language: {
                                    examples: ["en-US", "pt-BR", "es-ES"],
                                    "meta:usereditable": false,
                                    "meta:xdmField": "dc:language",
                                    "meta:xdmType": "string",
                                    pattern:
                                      "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
                                    type: "string",
                                  },
                                },
                                type: "object",
                              },
                              browserDetails: {
                                "meta:referencedFrom":
                                  "https://ns.adobe.com/xdm/context/browserdetails",
                                "meta:xdmField": "xdm:browserDetails",
                                "meta:xdmType": "object",
                                properties: {
                                  acceptLanguage: {
                                    "meta:xdmField": "xdm:acceptLanguage",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  cookiesEnabled: {
                                    "meta:xdmField": "xdm:cookiesEnabled",
                                    "meta:xdmType": "boolean",
                                    type: "boolean",
                                  },
                                  javaEnabled: {
                                    "meta:xdmField": "xdm:javaEnabled",
                                    "meta:xdmType": "boolean",
                                    type: "boolean",
                                  },
                                  javaScriptEnabled: {
                                    "meta:xdmField": "xdm:javaScriptEnabled",
                                    "meta:xdmType": "boolean",
                                    type: "boolean",
                                  },
                                  javaScriptVersion: {
                                    "meta:xdmField": "xdm:javaScriptVersion",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  javaVersion: {
                                    "meta:xdmField": "xdm:javaVersion",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  name: {
                                    "meta:xdmField": "xdm:name",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  quicktimeVersion: {
                                    "meta:xdmField": "xdm:quicktimeVersion",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  thirdPartyCookiesEnabled: {
                                    "meta:xdmField":
                                      "xdm:thirdPartyCookiesEnabled",
                                    "meta:xdmType": "boolean",
                                    type: "boolean",
                                  },
                                  userAgent: {
                                    "meta:xdmField": "xdm:userAgent",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  vendor: {
                                    "meta:xdmField": "xdm:vendor",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  version: {
                                    "meta:xdmField": "xdm:version",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  viewportHeight: {
                                    "meta:xdmField": "xdm:viewportHeight",
                                    "meta:xdmType": "int",
                                    minimum: 0,
                                    type: "integer",
                                  },
                                  viewportWidth: {
                                    "meta:xdmField": "xdm:viewportWidth",
                                    "meta:xdmType": "int",
                                    minimum: 0,
                                    type: "integer",
                                  },
                                },
                                type: "object",
                              },
                              carrier: {
                                "meta:xdmField": "xdm:carrier",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              colorDepth: {
                                "meta:xdmField": "xdm:colorDepth",
                                "meta:xdmType": "int",
                                minimum: 0,
                                type: "integer",
                              },
                              connectionType: {
                                enum: [
                                  "dialup",
                                  "isdn",
                                  "bisdn",
                                  "dsl",
                                  "cable",
                                  "wireless_wifi",
                                  "mobile",
                                  "mobile_edge",
                                  "mobile_2g",
                                  "mobile_3g",
                                  "mobile_lte",
                                  "t1",
                                  "t3",
                                  "oc3",
                                  "lan",
                                  "modem",
                                ],
                                "meta:enum": {
                                  bisdn: "BISDN",
                                  cable: "Cable",
                                  dialup: "Dial-up",
                                  dsl: "DSL",
                                  isdn: "ISDN",
                                  lan: "LAN",
                                  mobile: "Mobile",
                                  mobile_2g: "Mobile 2G",
                                  mobile_3g: "Mobile 3G",
                                  mobile_edge: "Mobile Edge",
                                  mobile_gprs: "Mobile GPRS",
                                  mobile_lte: "Mobile LTE",
                                  modem: "Modem",
                                  oc3: "OC3",
                                  t1: "T1",
                                  t3: "T3",
                                  wireless_wifi: "Wireless wifi",
                                },
                                "meta:xdmField": "xdm:connectionType",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              domain: {
                                "meta:xdmField": "xdm:domain",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              duration: {
                                "meta:xdmField": "xdm:duration",
                                "meta:xdmType": "int",
                                minimum: 0,
                                type: "integer",
                              },
                              ipV4: {
                                format: "ipv4",
                                "meta:xdmField": "xdm:ipV4",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              ipV6: {
                                format: "ipv6",
                                "meta:xdmField": "xdm:ipV6",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              operatingSystem: {
                                "meta:xdmField": "xdm:operatingSystem",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              operatingSystemVendor: {
                                "meta:xdmField": "xdm:operatingSystemVendor",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              operatingSystemVersion: {
                                "meta:xdmField": "xdm:operatingSystemVersion",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              previousScreen: {
                                "meta:xdmField": "xdm:previousScreen",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              type: {
                                enum: [
                                  "browser",
                                  "application",
                                  "iot",
                                  "external",
                                  "widget",
                                ],
                                "meta:enum": {
                                  application: "Application",
                                  browser: "Browser",
                                  external: "External system",
                                  iot: "Internet of things",
                                  widget: "Application extension",
                                },
                                "meta:xdmField": "xdm:type",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              viewedScreen: {
                                "meta:xdmField": "xdm:viewedScreen",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              viewportHeight: {
                                "meta:xdmField": "xdm:viewportHeight",
                                "meta:xdmType": "int",
                                minimum: 0,
                                type: "integer",
                              },
                              viewportWidth: {
                                "meta:xdmField": "xdm:viewportWidth",
                                "meta:xdmType": "int",
                                minimum: 0,
                                type: "integer",
                              },
                            },
                            type: "object",
                          },
                          registrationDate: {
                            format: "date-time",
                            "meta:xdmField": "xdm:registrationDate",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                          token: {
                            "meta:xdmField": "xdm:token",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      "meta:xdmField": "xdm:pushNotificationTokens",
                      "meta:xdmType": "array",
                      type: "array",
                    },
                    testProfile: {
                      default: false,
                      "meta:xdmField": "xdm:testProfile",
                      "meta:xdmType": "boolean",
                      type: "boolean",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            orchestration: {
              "meta:xdmField":
                "https://ns.adobe.com/experience/campaign/orchestration",
              "meta:xdmType": "object",
              properties: {
                eventID: {
                  "meta:xdmField": "xdm:eventID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                originJourneyID: {
                  "meta:xdmField": "xdm:originJourneyID",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        decisioning: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            propositions: {
              items: {
                "meta:referencedFrom":
                  "https://ns.adobe.com/experience/decisioning/proposition-interaction-details",
                "meta:xdmType": "object",
                properties: {
                  decisionEventDetails: {
                    "meta:referencedFrom":
                      "https://ns.adobe.com/experience/decisioning/decisionevent-details",
                    "meta:status": "deprecated",
                    "meta:xdmField": "xdm:decisionEventDetails",
                    "meta:xdmType": "object",
                    properties: {
                      algorithmID: {
                        format: "uri-reference",
                        "meta:xdmField": "xdm:algorithmID",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      experienceID: {
                        "meta:xdmField": "xdm:experienceID",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      trafficType: {
                        "meta:enum": {
                          contextual: "Contextual Traffic",
                          noncontextual: "Non-Contextual Traffic",
                          random: "Random Traffic",
                        },
                        "meta:xdmField": "xdm:trafficType",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                    },
                    type: "object",
                  },
                  decisionEventID: {
                    "meta:status": "deprecated",
                    "meta:xdmField": "xdm:decisionEventID",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  decisionScope: {
                    "meta:status": "deprecated",
                    "meta:xdmField": "xdm:decisionScope",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  decisionScopeDetails: {
                    "meta:referencedFrom":
                      "https://ns.adobe.com/experience/decisioning/scope-details",
                    "meta:status": "deprecated",
                    "meta:xdmField": "xdm:decisionScopeDetails",
                    "meta:xdmType": "object",
                    properties: {
                      activity: {
                        "meta:referencedFrom":
                          "https://ns.adobe.com/experience/decisioning/activity-detail",
                        "meta:xdmField": "xdm:activity",
                        "meta:xdmType": "object",
                        properties: {
                          _repo: {
                            "meta:xdmType": "object",
                            "meta:xedConverted": true,
                            properties: {
                              etag: {
                                "meta:xdmField": "repo:etag",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          endTime: {
                            format: "date-time",
                            "meta:xdmField": "xdm:endTime",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                          fallback: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:fallback",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          id: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:id",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          name: {
                            "meta:xdmField": "xdm:name",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          startTime: {
                            format: "date-time",
                            "meta:xdmField": "xdm:startTime",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                        },
                        required: ["id"],
                        type: "object",
                      },
                      decisionProvider: {
                        "meta:xdmField": "xdm:decisionProvider",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      experience: {
                        "meta:referencedFrom":
                          "#/definitions/experience-option-details",
                        "meta:xdmField": "xdm:experience",
                        "meta:xdmType": "object",
                        properties: {
                          id: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:id",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      id: {
                        "meta:xdmField": "xdm:id",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      interactionMeasurements: {
                        items: {
                          "meta:referencedFrom":
                            "https://ns.adobe.com/experience/decisioning/interaction-measurement",
                          "meta:xdmType": "object",
                          properties: {
                            observation: {
                              "meta:xdmField": "xdm:observation",
                              "meta:xdmType": "object",
                              properties: {
                                field: {
                                  default: "xdm:eventType",
                                  "meta:xdmField": "xdm:field",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                mapping: {
                                  default: "direct",
                                  enum: [
                                    "direct",
                                    "eventTypeValue",
                                    "fieldValue",
                                    "predicate",
                                  ],
                                  "meta:xdmField": "xdm:mapping",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                value: {
                                  "meta:xdmField": "xdm:value",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            outcome: {
                              "meta:xdmField": "xdm:outcome",
                              "meta:xdmType": "object",
                              properties: {
                                _id: {
                                  "meta:xdmField": "@id",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                field: {
                                  "meta:xdmField": "xdm:field",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        "meta:status": "experimental",
                        "meta:xdmField": "xdm:interactionMeasurements",
                        "meta:xdmType": "array",
                        type: "array",
                      },
                      placement: {
                        "meta:referencedFrom":
                          "https://ns.adobe.com/experience/decisioning/placement-detail",
                        "meta:xdmField": "xdm:placement",
                        "meta:xdmType": "object",
                        properties: {
                          _repo: {
                            "meta:xdmType": "object",
                            "meta:xedConverted": true,
                            properties: {
                              etag: {
                                "meta:xdmField": "repo:etag",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          channelID: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:channelID",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          id: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:id",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          name: {
                            "meta:xdmField": "xdm:name",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                        },
                        required: ["id"],
                        type: "object",
                      },
                      strategies: {
                        items: {
                          "meta:referencedFrom":
                            "https://ns.adobe.com/experience/decisioning/strategy-details",
                          "meta:xdmType": "object",
                          properties: {
                            algorithmID: {
                              format: "uri-reference",
                              "meta:xdmField": "xdm:algorithmID",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            step: {
                              "meta:enum": {
                                capping: "Capping Counter",
                                eligibility: "Eligibility Policy",
                                profile: "Profile Merge Policy",
                                ranking: "Ranking Function",
                                suppression: "Suppression Policy",
                              },
                              "meta:xdmField": "xdm:step",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            strategyID: {
                              "meta:xdmField": "xdm:strategyID",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            trafficType: {
                              "meta:enum": {
                                contextual: "Contextual Traffic",
                                noncontextual: "Non-Contextual Traffic",
                                random: "Random Traffic",
                              },
                              "meta:xdmField": "xdm:trafficType",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        "meta:xdmField": "xdm:strategies",
                        "meta:xdmType": "array",
                        type: "array",
                      },
                    },
                    type: "object",
                  },
                  id: {
                    "meta:xdmField": "xdm:id",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  items: {
                    items: {
                      "meta:referencedFrom":
                        "https://ns.adobe.com/experience/decisioning/option-detail",
                      "meta:xdmType": "object",
                      properties: {
                        _experience: {
                          "meta:xdmType": "object",
                          "meta:xedConverted": true,
                          properties: {
                            decisioning: {
                              "meta:xdmType": "object",
                              "meta:xedConverted": true,
                              properties: {
                                propositionsProfile: {
                                  "meta:referencedFrom":
                                    "https://ns.adobe.com/xdm/data/measure",
                                  "meta:xdmField":
                                    "https://ns.adobe.com/experience/decisioning/propositionsProfile",
                                  "meta:xdmType": "object",
                                  properties: {
                                    id: {
                                      "meta:xdmField": "xdm:id",
                                      "meta:xdmType": "string",
                                      type: "string",
                                    },
                                    value: {
                                      "meta:xdmField": "xdm:value",
                                      "meta:xdmType": "number",
                                      type: "number",
                                    },
                                  },
                                  required: ["value"],
                                  type: "object",
                                },
                                propositionsTotal: {
                                  "meta:referencedFrom":
                                    "https://ns.adobe.com/xdm/data/measure",
                                  "meta:xdmField":
                                    "https://ns.adobe.com/experience/decisioning/propositionsTotal",
                                  "meta:xdmType": "object",
                                  properties: {
                                    id: {
                                      "meta:xdmField": "xdm:id",
                                      "meta:xdmType": "string",
                                      type: "string",
                                    },
                                    value: {
                                      "meta:xdmField": "xdm:value",
                                      "meta:xdmType": "number",
                                      type: "number",
                                    },
                                  },
                                  required: ["value"],
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        _repo: {
                          "meta:xdmType": "object",
                          "meta:xedConverted": true,
                          properties: {
                            etag: {
                              "meta:xdmField": "repo:etag",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        characteristics: {
                          additionalProperties: {
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          "meta:xdmField": "xdm:characteristics",
                          "meta:xdmType": "map",
                          type: "object",
                        },
                        id: {
                          format: "uri-reference",
                          "meta:xdmField": "xdm:id",
                          "meta:xdmType": "string",
                          type: "string",
                        },
                        name: {
                          "meta:xdmField": "xdm:name",
                          "meta:xdmType": "string",
                          type: "string",
                        },
                        score: {
                          "meta:xdmField": "xdm:score",
                          "meta:xdmType": "number",
                          minimum: 0,
                          type: "number",
                        },
                        tags: {
                          items: {
                            format: "uri-reference",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          "meta:xdmField": "xdm:tags",
                          "meta:xdmType": "array",
                          type: "array",
                        },
                      },
                      required: ["id"],
                      type: "object",
                    },
                    "meta:xdmField": "xdm:items",
                    "meta:xdmType": "array",
                    type: "array",
                  },
                  scope: {
                    "meta:xdmField": "xdm:scope",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  scopeDetails: {
                    "meta:referencedFrom":
                      "https://ns.adobe.com/experience/decisioning/scope-details",
                    "meta:xdmField": "xdm:scopeDetails",
                    "meta:xdmType": "object",
                    properties: {
                      activity: {
                        "meta:referencedFrom":
                          "https://ns.adobe.com/experience/decisioning/activity-detail",
                        "meta:xdmField": "xdm:activity",
                        "meta:xdmType": "object",
                        properties: {
                          _repo: {
                            "meta:xdmType": "object",
                            "meta:xedConverted": true,
                            properties: {
                              etag: {
                                "meta:xdmField": "repo:etag",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          endTime: {
                            format: "date-time",
                            "meta:xdmField": "xdm:endTime",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                          fallback: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:fallback",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          id: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:id",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          name: {
                            "meta:xdmField": "xdm:name",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          startTime: {
                            format: "date-time",
                            "meta:xdmField": "xdm:startTime",
                            "meta:xdmType": "date-time",
                            type: "string",
                          },
                        },
                        required: ["id"],
                        type: "object",
                      },
                      decisionProvider: {
                        "meta:xdmField": "xdm:decisionProvider",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      experience: {
                        "meta:referencedFrom":
                          "#/definitions/experience-option-details",
                        "meta:xdmField": "xdm:experience",
                        "meta:xdmType": "object",
                        properties: {
                          id: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:id",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                        },
                        type: "object",
                      },
                      id: {
                        "meta:xdmField": "xdm:id",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      interactionMeasurements: {
                        items: {
                          "meta:referencedFrom":
                            "https://ns.adobe.com/experience/decisioning/interaction-measurement",
                          "meta:xdmType": "object",
                          properties: {
                            observation: {
                              "meta:xdmField": "xdm:observation",
                              "meta:xdmType": "object",
                              properties: {
                                field: {
                                  default: "xdm:eventType",
                                  "meta:xdmField": "xdm:field",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                mapping: {
                                  default: "direct",
                                  enum: [
                                    "direct",
                                    "eventTypeValue",
                                    "fieldValue",
                                    "predicate",
                                  ],
                                  "meta:xdmField": "xdm:mapping",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                value: {
                                  "meta:xdmField": "xdm:value",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                            outcome: {
                              "meta:xdmField": "xdm:outcome",
                              "meta:xdmType": "object",
                              properties: {
                                _id: {
                                  "meta:xdmField": "@id",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                field: {
                                  "meta:xdmField": "xdm:field",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                              },
                              type: "object",
                            },
                          },
                          type: "object",
                        },
                        "meta:status": "experimental",
                        "meta:xdmField": "xdm:interactionMeasurements",
                        "meta:xdmType": "array",
                        type: "array",
                      },
                      placement: {
                        "meta:referencedFrom":
                          "https://ns.adobe.com/experience/decisioning/placement-detail",
                        "meta:xdmField": "xdm:placement",
                        "meta:xdmType": "object",
                        properties: {
                          _repo: {
                            "meta:xdmType": "object",
                            "meta:xedConverted": true,
                            properties: {
                              etag: {
                                "meta:xdmField": "repo:etag",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                            },
                            type: "object",
                          },
                          channelID: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:channelID",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          id: {
                            format: "uri-reference",
                            "meta:xdmField": "xdm:id",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          name: {
                            "meta:xdmField": "xdm:name",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                        },
                        required: ["id"],
                        type: "object",
                      },
                      strategies: {
                        items: {
                          "meta:referencedFrom":
                            "https://ns.adobe.com/experience/decisioning/strategy-details",
                          "meta:xdmType": "object",
                          properties: {
                            algorithmID: {
                              format: "uri-reference",
                              "meta:xdmField": "xdm:algorithmID",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            step: {
                              "meta:enum": {
                                capping: "Capping Counter",
                                eligibility: "Eligibility Policy",
                                profile: "Profile Merge Policy",
                                ranking: "Ranking Function",
                                suppression: "Suppression Policy",
                              },
                              "meta:xdmField": "xdm:step",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            strategyID: {
                              "meta:xdmField": "xdm:strategyID",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            trafficType: {
                              "meta:enum": {
                                contextual: "Contextual Traffic",
                                noncontextual: "Non-Contextual Traffic",
                                random: "Random Traffic",
                              },
                              "meta:xdmField": "xdm:trafficType",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                          },
                          type: "object",
                        },
                        "meta:xdmField": "xdm:strategies",
                        "meta:xdmType": "array",
                        type: "array",
                      },
                    },
                    type: "object",
                  },
                },
                type: "object",
              },
              "meta:xdmField":
                "https://ns.adobe.com/experience/decisioning/propositions",
              "meta:xdmType": "array",
              type: "array",
            },
          },
          type: "object",
        },
        journeyOrchestration: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            stepEvents: {
              "meta:xdmField":
                "https://ns.adobe.com/experience/journeyOrchestration/stepEvents",
              "meta:xdmType": "object",
              properties: {
                actionBusinessType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionBusinessType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionExecutionError: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionExecutionError",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionExecutionErrorCode: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionExecutionErrorCode",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionExecutionOriginCode: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginCode",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionExecutionOriginError: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionExecutionOriginError",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionExecutionTime: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionExecutionTime",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                actionID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                actionParameterized: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionParameterized",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                actionSchedulerCount: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionSchedulerCount",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                actionType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/actionType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                batchDeliveryID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/batchDeliveryID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                batchExternalKey: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/batchExternalKey",
                  "meta:xdmType": "string",
                  type: "string",
                },
                batchInstanceID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/batchInstanceID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                batchRecurrenceIndex: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/batchRecurrenceIndex",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                batchToUnitary: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/batchToUnitary",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                batchUnitaryBranchID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/batchUnitaryBranchID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                deliveryJobID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/deliveryJobID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                entrance: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/entrance",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                eventID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/eventID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                eventName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/eventName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                eventProcessed: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/eventProcessed",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                externalKey: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/externalKey",
                  "meta:xdmType": "string",
                  type: "string",
                },
                fetchCount: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchCount",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                fetchCustomCount: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchCustomCount",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                fetchCustomTotalTime: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchCustomTotalTime",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                fetchError: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchError",
                  "meta:xdmType": "string",
                  type: "string",
                },
                fetchErrorCode: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchErrorCode",
                  "meta:xdmType": "string",
                  type: "string",
                },
                fetchOriginError: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchOriginError",
                  "meta:xdmType": "string",
                  type: "string",
                },
                fetchOriginErrorCode: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchOriginErrorCode",
                  "meta:xdmType": "string",
                  type: "string",
                },
                fetchPlatformCount: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformCount",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                fetchPlatformTotalTime: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchPlatformTotalTime",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                fetchTotalTime: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchTotalTime",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                fetchTypeInError: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fetchTypeInError",
                  "meta:xdmType": "string",
                  type: "string",
                },
                fromSegmentTrigger: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/fromSegmentTrigger",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                inTest: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/inTest",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                instanceEnded: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/instanceEnded",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                instanceID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/instanceID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                instanceType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/instanceType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                isExternalEvent: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/isExternalEvent",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                journeyID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/journeyID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                journeyNodeProcessed: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/journeyNodeProcessed",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                journeyVersion: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/journeyVersion",
                  "meta:xdmType": "string",
                  type: "string",
                },
                journeyVersionID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/journeyVersionID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                journeyVersionName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/journeyVersionName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                nodeID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/nodeID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                nodeName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/nodeName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                nodeType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/nodeType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                originJumpJourneyID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                originJumpJourneyInstanceID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyInstanceID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                originJumpJourneyVersionID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/originJumpJourneyVersionID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentNodeID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentNodeID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentNodeName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentNodeName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentNodeType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentNodeType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentStepID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentStepID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentStepName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentStepName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentTransitionID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentTransitionID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentTransitionName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentTransitionName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                parentTransitionType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/parentTransitionType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                previousJumpJourneyID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                previousJumpJourneyInstanceID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyInstanceID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                previousJumpJourneyVersionID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/previousJumpJourneyVersionID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                processingTime: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/processingTime",
                  "meta:xdmType": "int",
                  type: "integer",
                },
                reactionActionID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/reactionActionID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                reactionChannel: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/reactionChannel",
                  "meta:xdmType": "string",
                  type: "string",
                },
                reactionInteractionType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/reactionInteractionType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                reentrance: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/reentrance",
                  "meta:xdmType": "boolean",
                  type: "boolean",
                },
                stepID: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/stepID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                stepName: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/stepName",
                  "meta:xdmType": "string",
                  type: "string",
                },
                stepStatus: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/stepStatus",
                  "meta:xdmType": "string",
                  type: "string",
                },
                stepType: {
                  "meta:xdmField":
                    "https://ns.adobe.com/experience/journeyOrchestration/stepType",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
    _id: {
      format: "uri-reference",
      "meta:xdmField": "@id",
      "meta:xdmType": "string",
      type: "string",
    },
    _salesvelocity: {
      "meta:xdmType": "object",
      properties: {
        attribution: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            campaignGroup: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            campaignName: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            trackingCode: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
          },
          required: [],
          type: "object",
        },
        identification: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            core: {
              isRequired: false,
              "meta:xdmType": "object",
              properties: {
                biometricId: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.ee_identification_core_v1{}.biometricId",
                    ref: [
                      "schema://5e3c6044ba798500006c8afc",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                crmId: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.ee_identification_core_v1{}.crmId",
                    ref: [
                      "schema://5e3c6044ba798500006c8afc",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                ecid: {
                  isRequired: false,
                  "meta:xdmType": "string",
                  required: [],
                  type: "string",
                },
                email: {
                  isRequired: false,
                  "meta:xdmType": "string",
                  required: [],
                  type: "string",
                },
                gaid: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path: "{}._salesvelocity{}.identification{}.core{}.gaid",
                    ref: [
                      "https://ns.adobe.com/salesvelocity/mixins/fb8929e8ab3cabb46cfd9d845bd6ab98",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
                phoneNumber: {
                  isRequired: false,
                  "meta:ui": {
                    editable: true,
                    path:
                      "{}._salesvelocity{}.ee_identification_core_v1{}.phoneNumber",
                    ref: [
                      "schema://5e3c6044ba798500006c8afc",
                      "#/definitions/customFields",
                    ],
                  },
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            retail: {
              isRequired: false,
              "meta:xdmType": "object",
              properties: {
                loyaltyId: {
                  isRequired: false,
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        interactionDetails: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            core: {
              isRequired: false,
              "meta:xdmType": "object",
              properties: {
                bot: {
                  isRequired: false,
                  "meta:xdmType": "object",
                  properties: {
                    botSatisfaction: {
                      isRequired: false,
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    botTopic: {
                      isRequired: false,
                      "meta:xdmType": "string",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                callCenterAgent: {
                  isRequired: false,
                  "meta:referencedFrom":
                    "https://ns.adobe.com/salesvelocity/datatypes/62d76a6fa0ae9572e27b46f87442a63c",
                  "meta:xdmType": "object",
                  properties: {
                    callANI: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callANI",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callAgentComments: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callAgentComments",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callAgentID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callAgentID",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callCenterID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callCenterID",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callEndTime: {
                      format: "date-time",
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callEndTime",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "date-time",
                      type: "string",
                    },
                    callID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callID",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callReason: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callReason",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callResolutionFlag: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callResolutionFlag",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "boolean",
                      type: "boolean",
                    },
                    callSatisfaction: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callSatisfaction",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    callStartTime: {
                      format: "date-time",
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callStartTime",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "date-time",
                      type: "string",
                    },
                    callTicketID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callTicketID",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callTimeElapsed: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callTimeElapsed",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    callTopic: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callTopic",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    callTransferID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_call_center_core_v1{}.callTransferID",
                        ref: [
                          "schema://5e3c8571f6742f0000e2faaa",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            retail: {
              isRequired: false,
              "meta:xdmType": "object",
              properties: {
                promotion: {
                  isRequired: false,
                  "meta:xdmType": "object",
                  properties: {
                    coupon: {
                      isRequired: false,
                      "meta:referencedFrom":
                        "https://ns.adobe.com/salesvelocity/datatypes/cbd9184c6f66471f8d85bd59fa9d0878",
                      "meta:xdmType": "object",
                      properties: {
                        couponID: {
                          isRequired: false,
                          "meta:ui": {
                            editable: true,
                            path:
                              "{}._salesvelocity{}.ee_store_coupon_utilization_retail_v1{}.couponID",
                            ref: [
                              "schema://5e3c8ea1f6ca600000403e74",
                              "#/definitions/customFields",
                            ],
                          },
                          "meta:xdmType": "string",
                          type: "string",
                        },
                        couponSavingsAmt: {
                          isRequired: false,
                          "meta:ui": {
                            editable: true,
                            path:
                              "{}._salesvelocity{}.ee_store_coupon_utilization_retail_v1{}.couponSavingsAmt",
                            ref: [
                              "schema://5e3c8ea1f6ca600000403e74",
                              "#/definitions/customFields",
                            ],
                          },
                          "meta:xdmType": "number",
                          type: "number",
                        },
                        couponUseApplied: {
                          isRequired: false,
                          "meta:ui": {
                            editable: true,
                            path:
                              "{}._salesvelocity{}.ee_store_coupon_utilization_retail_v1{}.couponUseApplied",
                            ref: [
                              "schema://5e3c8ea1f6ca600000403e74",
                              "#/definitions/customFields",
                            ],
                          },
                          "meta:xdmType": "boolean",
                          type: "boolean",
                        },
                        couponUseAttempt: {
                          isRequired: false,
                          "meta:ui": {
                            editable: true,
                            path:
                              "{}._salesvelocity{}.ee_store_coupon_utilization_retail_v1{}.couponUseAttempt",
                            ref: [
                              "schema://5e3c8ea1f6ca600000403e74",
                              "#/definitions/customFields",
                            ],
                          },
                          "meta:xdmType": "boolean",
                          type: "boolean",
                        },
                      },
                      type: "object",
                    },
                  },
                  type: "object",
                },
                return: {
                  isRequired: false,
                  "meta:referencedFrom":
                    "https://ns.adobe.com/salesvelocity/datatypes/2fce9b5e801d836807d2c6437f03ff5a",
                  "meta:xdmType": "object",
                  properties: {
                    returnAmount: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_store_return_utilization_retail_v1{}.returnAmount",
                        ref: [
                          "schema://5e469c7fa6b9ca0000cb3176",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    returnId: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_store_return_utilization_retail_v1{}.returnId",
                        ref: [
                          "schema://5e469c7fa6b9ca0000cb3176",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    returnOriginalOrderID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_store_return_utilization_retail_v1{}.returnOriginalOrderID",
                        ref: [
                          "schema://5e469c7fa6b9ca0000cb3176",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    returnSku: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_store_return_utilization_retail_v1{}.returnSku",
                        ref: [
                          "schema://5e469c7fa6b9ca0000cb3176",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    returnType: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_store_return_utilization_retail_v1{}.returnType",
                        ref: [
                          "schema://5e469c7fa6b9ca0000cb3176",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
          },
          type: "object",
        },
        productListItems: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            SKU: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            mainCategory: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            priceTotal: {
              isRequired: false,
              "meta:xdmType": "number",
              required: [],
              type: "number",
            },
            productAddMethod: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            quantity: {
              isRequired: false,
              "meta:xdmType": "int",
              required: [],
              type: "integer",
            },
            subCategory: {
              isRequired: false,
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
          },
          required: [],
          type: "object",
        },
        proposition: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            description: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                generateDate: 1614629582481,
                isGlobalField: false,
                path: "{}._salesvelocity{}.proposition{}.description",
                ref: [
                  "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            id: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                generateDate: 1614629582481,
                isGlobalField: false,
                path: "{}._salesvelocity{}.proposition{}.id",
                ref: [
                  "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            image: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                generateDate: 1614629582481,
                isGlobalField: false,
                path: "{}._salesvelocity{}.proposition{}.image",
                ref: [
                  "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            link: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                generateDate: 1614629582481,
                isGlobalField: false,
                path: "{}._salesvelocity{}.proposition{}.link",
                ref: [
                  "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            name: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                generateDate: 1614629582481,
                isGlobalField: false,
                path: "{}._salesvelocity{}.proposition{}.name",
                ref: [
                  "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
            offerId: {
              isRequired: false,
              "meta:ui": {
                editable: true,
                generateDate: 1614629582481,
                isGlobalField: false,
                path: "{}._salesvelocity{}.proposition{}.offerId",
                ref: [
                  "https://ns.adobe.com/salesvelocity/mixins/877827813ef27d91b89a568efaeb48ae0f26ce4c834ccfa8",
                  "#/definitions/customFields",
                ],
              },
              "meta:xdmType": "string",
              required: [],
              type: "string",
            },
          },
          required: [],
          type: "object",
        },
        storeIdentification: {
          isRequired: false,
          "meta:xdmType": "object",
          properties: {
            id: { isRequired: false, "meta:xdmType": "string", type: "string" },
          },
          type: "object",
        },
      },
      type: "object",
    },
    commerce: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/commerce",
      "meta:xdmField": "xdm:commerce",
      "meta:xdmType": "object",
      properties: {
        cartAbandons: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:cartAbandons",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        checkouts: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:checkouts",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        inStorePurchase: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:inStorePurchase",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        order: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/order",
          "meta:xdmField": "xdm:order",
          "meta:xdmType": "object",
          properties: {
            _salesvelocity: {
              "meta:xdmType": "object",
              properties: {
                orderDetails: {
                  isRequired: false,
                  "meta:referencedFrom":
                    "https://ns.adobe.com/salesvelocity/datatypes/3733bff0459e4e70aea877cccb811f8c",
                  "meta:xdmType": "object",
                  properties: {
                    orderDeviceID: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.orderDeviceID",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    orderItemNumber: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.orderItemNumber",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "int",
                      type: "integer",
                    },
                    orderType: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.orderType",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    sku: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.sku",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    skuAmount: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.skuAmount",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    skuOriginalPrice: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.skuOriginalPrice",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    skuSaleAmount: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.skuSaleAmount",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    skuUnits: {
                      isRequired: false,
                      "meta:ui": {
                        editable: true,
                        path:
                          "{}._salesvelocity{}.ee_order_utilization_retail_v1{}.skuUnits",
                        ref: [
                          "schema://5e45938a2a3f170000f6de9b",
                          "#/definitions/customFields",
                        ],
                      },
                      "meta:xdmType": "int",
                      type: "integer",
                    },
                  },
                  type: "object",
                },
              },
              type: "object",
            },
            currencyCode: {
              examples: ["USD", "EUR"],
              "meta:xdmField": "xdm:currencyCode",
              "meta:xdmType": "string",
              pattern: "^[A-Z]{3}$",
              type: "string",
            },
            payments: {
              items: {
                "meta:referencedFrom":
                  "https://ns.adobe.com/xdm/data/paymentitem",
                "meta:xdmType": "object",
                properties: {
                  currencyCode: {
                    examples: ["USD", "EUR"],
                    "meta:xdmField": "xdm:currencyCode",
                    "meta:xdmType": "string",
                    pattern: "^[A-Z]{3}$",
                    type: "string",
                  },
                  paymentAmount: {
                    "meta:xdmField": "xdm:paymentAmount",
                    "meta:xdmType": "number",
                    type: "number",
                  },
                  paymentType: {
                    default: "other",
                    "meta:enum": {
                      cash: "Cash",
                      check: "Check",
                      credit_card: "Credit Card",
                      credit_card_reference:
                        "Credit Card Reference Transaction",
                      debit_card: "Debit Card",
                      gift_card: "Gift Card",
                      other: "Other",
                      paypal: "PayPal",
                      wire_transfer: "Wire Transfer",
                    },
                    "meta:xdmField": "xdm:paymentType",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  transactionID: {
                    "meta:xdmField": "xdm:transactionID",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                },
                type: "object",
              },
              "meta:xdmField": "xdm:payments",
              "meta:xdmType": "array",
              type: "array",
            },
            priceTotal: {
              "meta:xdmField": "xdm:priceTotal",
              "meta:xdmType": "number",
              type: "number",
            },
            purchaseID: {
              "meta:xdmField": "xdm:purchaseID",
              "meta:xdmType": "string",
              type: "string",
            },
            purchaseOrderNumber: {
              "meta:xdmField": "xdm:purchaseOrderNumber",
              "meta:xdmType": "string",
              type: "string",
            },
          },
          type: "object",
        },
        productListAdds: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:productListAdds",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        productListOpens: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:productListOpens",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        productListRemovals: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:productListRemovals",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        productListReopens: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:productListReopens",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        productListViews: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:productListViews",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        productViews: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:productViews",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        purchases: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:purchases",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
        saveForLaters: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
          "meta:xdmField": "xdm:saveForLaters",
          "meta:xdmType": "object",
          properties: {
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            value: {
              "meta:xdmField": "xdm:value",
              "meta:xdmType": "number",
              type: "number",
            },
          },
          required: ["value"],
          type: "object",
        },
      },
      type: "object",
    },
    device: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/device",
      "meta:xdmField": "xdm:device",
      "meta:xdmType": "object",
      properties: {
        colorDepth: {
          "meta:xdmField": "xdm:colorDepth",
          "meta:xdmType": "int",
          type: "integer",
        },
        isBackgroundPushEnabled: {
          "meta:xdmField": "xdm:isBackgroundPushEnabled",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        isLocationEnabled: {
          "meta:xdmField": "xdm:isLocationEnabled",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        isPushOptIn: {
          "meta:xdmField": "xdm:isPushOptIn",
          "meta:xdmType": "boolean",
          type: "boolean",
        },
        locationPermission: {
          enum: [
            "SYSTEM_LOCATION_DISABLED",
            "NOT_ALLOWED",
            "ALWAYS_ALLOWED",
            "FOREGROUND_ALLOWED",
            "UNPROMPTED",
          ],
          "meta:xdmField": "xdm:locationPermission",
          "meta:xdmType": "string",
          type: "string",
        },
        manufacturer: {
          "meta:xdmField": "xdm:manufacturer",
          "meta:xdmType": "string",
          type: "string",
        },
        model: {
          "meta:xdmField": "xdm:model",
          "meta:xdmType": "string",
          type: "string",
        },
        modelNumber: {
          "meta:xdmField": "xdm:modelNumber",
          "meta:xdmType": "string",
          type: "string",
        },
        screenHeight: {
          "meta:xdmField": "xdm:screenHeight",
          "meta:xdmType": "int",
          type: "integer",
        },
        screenOrientation: {
          enum: ["portrait", "landscape"],
          "meta:enum": { landscape: "Landscape", portrait: "Portrait" },
          "meta:xdmField": "xdm:screenOrientation",
          "meta:xdmType": "string",
          type: "string",
        },
        screenWidth: {
          "meta:xdmField": "xdm:screenWidth",
          "meta:xdmType": "int",
          type: "integer",
        },
        type: {
          "meta:enum": {
            computers: "Computers",
            desktop: "Desktop",
            ereader: "E-reader",
            gaming: "Gaming console",
            mediaplayer: "Media player",
            mobile: "Mobile",
            settop: "Set-top box",
            tablet: "Tablet",
            television: "Television",
            "tv screens": "TV screens",
          },
          "meta:xdmField": "xdm:type",
          "meta:xdmType": "string",
          type: "string",
        },
        typeID: {
          "meta:xdmField": "xdm:typeID",
          "meta:xdmType": "string",
          type: "string",
        },
        typeIDService: {
          format: "uri",
          "meta:enum": {
            "https://ns.adobe.com/xdm/external/adobecampaign": "Adobe Campaign",
            "https://ns.adobe.com/xdm/external/deviceatlas": "DeviceAtlas",
          },
          "meta:xdmField": "xdm:typeIDService",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    environment: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/environment",
      "meta:xdmField": "xdm:environment",
      "meta:xdmType": "object",
      properties: {
        ISP: {
          "meta:xdmField": "xdm:ISP",
          "meta:xdmType": "string",
          type: "string",
        },
        _dc: {
          "meta:xdmType": "object",
          "meta:xedConverted": true,
          properties: {
            language: {
              examples: ["en-US", "pt-BR", "es-ES"],
              "meta:usereditable": false,
              "meta:xdmField": "dc:language",
              "meta:xdmType": "string",
              pattern:
                "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
              type: "string",
            },
          },
          type: "object",
        },
        browserDetails: {
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/browserdetails",
          "meta:xdmField": "xdm:browserDetails",
          "meta:xdmType": "object",
          properties: {
            acceptLanguage: {
              "meta:xdmField": "xdm:acceptLanguage",
              "meta:xdmType": "string",
              type: "string",
            },
            cookiesEnabled: {
              "meta:xdmField": "xdm:cookiesEnabled",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
            javaEnabled: {
              "meta:xdmField": "xdm:javaEnabled",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
            javaScriptEnabled: {
              "meta:xdmField": "xdm:javaScriptEnabled",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
            javaScriptVersion: {
              "meta:xdmField": "xdm:javaScriptVersion",
              "meta:xdmType": "string",
              type: "string",
            },
            javaVersion: {
              "meta:xdmField": "xdm:javaVersion",
              "meta:xdmType": "string",
              type: "string",
            },
            name: {
              "meta:xdmField": "xdm:name",
              "meta:xdmType": "string",
              type: "string",
            },
            quicktimeVersion: {
              "meta:xdmField": "xdm:quicktimeVersion",
              "meta:xdmType": "string",
              type: "string",
            },
            thirdPartyCookiesEnabled: {
              "meta:xdmField": "xdm:thirdPartyCookiesEnabled",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
            userAgent: {
              "meta:xdmField": "xdm:userAgent",
              "meta:xdmType": "string",
              type: "string",
            },
            vendor: {
              "meta:xdmField": "xdm:vendor",
              "meta:xdmType": "string",
              type: "string",
            },
            version: {
              "meta:xdmField": "xdm:version",
              "meta:xdmType": "string",
              type: "string",
            },
            viewportHeight: {
              "meta:xdmField": "xdm:viewportHeight",
              "meta:xdmType": "int",
              minimum: 0,
              type: "integer",
            },
            viewportWidth: {
              "meta:xdmField": "xdm:viewportWidth",
              "meta:xdmType": "int",
              minimum: 0,
              type: "integer",
            },
          },
          type: "object",
        },
        carrier: {
          "meta:xdmField": "xdm:carrier",
          "meta:xdmType": "string",
          type: "string",
        },
        colorDepth: {
          "meta:xdmField": "xdm:colorDepth",
          "meta:xdmType": "int",
          minimum: 0,
          type: "integer",
        },
        connectionType: {
          enum: [
            "dialup",
            "isdn",
            "bisdn",
            "dsl",
            "cable",
            "wireless_wifi",
            "mobile",
            "mobile_edge",
            "mobile_2g",
            "mobile_3g",
            "mobile_lte",
            "t1",
            "t3",
            "oc3",
            "lan",
            "modem",
          ],
          "meta:enum": {
            bisdn: "BISDN",
            cable: "Cable",
            dialup: "Dial-up",
            dsl: "DSL",
            isdn: "ISDN",
            lan: "LAN",
            mobile: "Mobile",
            mobile_2g: "Mobile 2G",
            mobile_3g: "Mobile 3G",
            mobile_edge: "Mobile Edge",
            mobile_gprs: "Mobile GPRS",
            mobile_lte: "Mobile LTE",
            modem: "Modem",
            oc3: "OC3",
            t1: "T1",
            t3: "T3",
            wireless_wifi: "Wireless wifi",
          },
          "meta:xdmField": "xdm:connectionType",
          "meta:xdmType": "string",
          type: "string",
        },
        domain: {
          "meta:xdmField": "xdm:domain",
          "meta:xdmType": "string",
          type: "string",
        },
        duration: {
          "meta:xdmField": "xdm:duration",
          "meta:xdmType": "int",
          minimum: 0,
          type: "integer",
        },
        ipV4: {
          format: "ipv4",
          "meta:xdmField": "xdm:ipV4",
          "meta:xdmType": "string",
          type: "string",
        },
        ipV6: {
          format: "ipv6",
          "meta:xdmField": "xdm:ipV6",
          "meta:xdmType": "string",
          type: "string",
        },
        operatingSystem: {
          "meta:xdmField": "xdm:operatingSystem",
          "meta:xdmType": "string",
          type: "string",
        },
        operatingSystemVendor: {
          "meta:xdmField": "xdm:operatingSystemVendor",
          "meta:xdmType": "string",
          type: "string",
        },
        operatingSystemVersion: {
          "meta:xdmField": "xdm:operatingSystemVersion",
          "meta:xdmType": "string",
          type: "string",
        },
        previousScreen: {
          "meta:xdmField": "xdm:previousScreen",
          "meta:xdmType": "string",
          type: "string",
        },
        type: {
          enum: ["browser", "application", "iot", "external", "widget"],
          "meta:enum": {
            application: "Application",
            browser: "Browser",
            external: "External system",
            iot: "Internet of things",
            widget: "Application extension",
          },
          "meta:xdmField": "xdm:type",
          "meta:xdmType": "string",
          type: "string",
        },
        viewedScreen: {
          "meta:xdmField": "xdm:viewedScreen",
          "meta:xdmType": "string",
          type: "string",
        },
        viewportHeight: {
          "meta:xdmField": "xdm:viewportHeight",
          "meta:xdmType": "int",
          minimum: 0,
          type: "integer",
        },
        viewportWidth: {
          "meta:xdmField": "xdm:viewportWidth",
          "meta:xdmType": "int",
          minimum: 0,
          type: "integer",
        },
      },
      type: "object",
    },
    eventMergeId: {
      "meta:xdmField": "xdm:eventMergeId",
      "meta:xdmType": "string",
      type: "string",
    },
    eventType: {
      "meta:enum": {
        "advertising.clicks": "Advertising Clicks",
        "advertising.completes": "Advertising Completes",
        "advertising.conversions": "Advertising Conversions",
        "advertising.federated": "Advertising Federated",
        "advertising.firstQuartiles": "Advertising First Quartiles",
        "advertising.impressions": "Advertising Impressions",
        "advertising.midpoints": "Advertising Midpoints",
        "advertising.starts": "Advertising Starts",
        "advertising.thirdQuartiles": "Advertising Third Quartiles",
        "advertising.timePlayed": "Advertising Time Played",
        "commerce.checkouts": "Commerce Checkouts",
        "commerce.productListAdds": "Commerce Product List Adds",
        "commerce.productListOpens": "Commerce Product List Opens",
        "commerce.productListRemovals": "Commerce Product List Removals",
        "commerce.productListReopens": "Commerce Product List Reopens",
        "commerce.productListViews": "Commerce Product List Views",
        "commerce.productViews": "Commerce Product Views",
        "commerce.purchases": "Commerce Purchases",
        "commerce.saveForLaters": "Commerce Save For Laters",
        "delivery.feedback": "Delivery Feedback",
        "directMarketing.emailBounced": "Direct Marketing Email Bounced",
        "directMarketing.emailBouncedSoft":
          "Direct Marketing Email Bounced Soft",
        "directMarketing.emailClicked": "Direct Marketing Email Clicked",
        "directMarketing.emailDelivered": "Direct Marketing Email Delivered",
        "directMarketing.emailOpened": "Direct Marketing Email Opened",
        "directMarketing.emailUnsubscribed":
          "Direct Marketing Email Unsubscribed",
        "leadOperation.convertLead": "Lead Operation Convert Lead",
        "leadOperation.interestingMoment": "Lead Operation Interesting Moment",
        "leadOperation.newLead": "Lead Operation New Lead",
        "leadOperation.scoreChanged": "Lead Operation Score Changed",
        "leadOperation.statusInCampaignProgressionChanged":
          "Lead Operation Status In Campaign Progression Changed",
        "listOperation.addToList": "List Operation Add To List",
        "listOperation.removeFromList": "List Operation Remove From List",
        "message.feedback": "Message Feedback",
        "message.tracking": "Message Tracking",
        "opportunityEvent.addToOpportunity":
          "Opportunity Event Add To Opportunity",
        "opportunityEvent.removeFromOpportunity":
          "Opportunity Event Remove From Opportunity",
        "opportunityevent.opportunityUpdated":
          "Opportunity Event Opportunity Updated",
        "pushTracking.applicationOpened": "Push Tracking Application Opened",
        "pushTracking.customAction": "Push Tracking Custom Action",
        "web.formFilledOut": "Web Form Filled Out",
        "web.webinteraction.linkClicks": "Web Webinteraction Link Clicks",
        "web.webpagedetails.pageViews": "Web Webpagedetails Page Views",
      },
      "meta:xdmField": "xdm:eventType",
      "meta:xdmType": "string",
      type: "string",
    },
    identityMap: {
      additionalProperties: {
        items: {
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/identityitem",
          "meta:xdmType": "object",
          properties: {
            authenticatedState: {
              default: "ambiguous",
              enum: ["ambiguous", "authenticated", "loggedOut"],
              "meta:enum": {
                ambiguous: "Ambiguous",
                authenticated:
                  "User identified by a login or similar action that was valid at the time of the event observation.",
                loggedOut:
                  "User was identified by a login action at some point of time previously, but is not currently logged in.",
              },
              "meta:xdmField": "xdm:authenticatedState",
              "meta:xdmType": "string",
              type: "string",
            },
            id: {
              "meta:xdmField": "xdm:id",
              "meta:xdmType": "string",
              type: "string",
            },
            primary: {
              default: false,
              "meta:xdmField": "xdm:primary",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
          },
          type: "object",
        },
        "meta:xdmType": "array",
        type: "array",
      },
      "meta:xdmField": "xdm:identityMap",
      "meta:xdmType": "map",
      type: "object",
    },
    implementationDetails: {
      "meta:referencedFrom":
        "https://ns.adobe.com/xdm/context/implementationdetails",
      "meta:xdmField": "xdm:implementationDetails",
      "meta:xdmType": "object",
      properties: {
        environment: {
          enum: ["browser", "app", "server", "iot"],
          "meta:enum": {
            app: "Application",
            browser: "Web Browser",
            iot: "Internet of Things Device",
            server: "Server",
          },
          "meta:xdmField": "xdm:environment",
          "meta:xdmType": "string",
          type: "string",
        },
        name: {
          format: "uri",
          "meta:enum": {
            "https://ns.adobe.com/experience/adcloud/viewability":
              "Adobe Advertising Cloud viewability",
            "https://ns.adobe.com/experience/alloy":
              "Adobe Experience Platform Web SDK",
            "https://ns.adobe.com/experience/alloy/reactor":
              "Adobe Experience Platform Web SDK Launch Extension",
            "https://ns.adobe.com/experience/analytics/appmeasurement":
              "Adobe app measurement",
            "https://ns.adobe.com/experience/analytics/mbox":
              "Adobe Target mBox",
            "https://ns.adobe.com/experience/analytics/scode":
              "Adobe Analytics sCode",
            "https://ns.adobe.com/experience/visitorapi":
              "Adobe Visitor service",
          },
          "meta:xdmField": "xdm:name",
          "meta:xdmType": "string",
          type: "string",
        },
        version: {
          "meta:xdmField": "xdm:version",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    placeContext: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/placecontext",
      "meta:xdmField": "xdm:placeContext",
      "meta:xdmType": "object",
      properties: {
        POIinteraction: {
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/poi-interaction",
          "meta:status": "experimental",
          "meta:xdmField": "xdm:POIinteraction",
          "meta:xdmType": "object",
          properties: {
            POIDetail: {
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/context/poi-detail",
              "meta:status": "deprecated",
              "meta:xdmField": "xdm:POIDetail",
              "meta:xdmType": "object",
              properties: {
                POIID: {
                  "meta:status": "deprecated",
                  "meta:xdmField": "xdm:POIID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                beaconInteractionDetails: {
                  "meta:referencedFrom":
                    "https://ns.adobe.com/xdm/context/beacon-interaction-details",
                  "meta:xdmField": "xdm:beaconInteractionDetails",
                  "meta:xdmType": "object",
                  properties: {
                    beaconMajor: {
                      "meta:xdmField": "xdm:beaconMajor",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    beaconMinor: {
                      "meta:xdmField": "xdm:beaconMinor",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    proximity: {
                      enum: ["immediate", "near", "far", "unknown"],
                      "meta:enum": {
                        far: "Greater than 10 meters away.",
                        immediate: "Within a few centimeter.",
                        near: "Within a couple of meters.",
                        unknown:
                          "Not able to ascertain distance, signal likely very weak.",
                      },
                      "meta:xdmField": "xdm:proximity",
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    proximityUUID: {
                      "meta:xdmField": "xdm:proximityUUID",
                      "meta:xdmType": "string",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                category: {
                  "meta:xdmField": "xdm:category",
                  "meta:xdmType": "string",
                  type: "string",
                },
                distanceToPOICenter: {
                  "meta:xdmField": "xdm:distanceToPOICenter",
                  "meta:xdmType": "number",
                  type: "number",
                },
                geoInteractionDetails: {
                  "meta:referencedFrom":
                    "https://ns.adobe.com/xdm/context/geo-interaction-details",
                  "meta:xdmField": "xdm:geoInteractionDetails",
                  "meta:xdmType": "object",
                  properties: {
                    deviceGeoAccuracy: {
                      "meta:xdmField": "xdm:deviceGeoAccuracy",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    distanceToCenter: {
                      "meta:xdmField": "xdm:distanceToCenter",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    geoShape: {
                      "meta:referencedFrom": "http://schema.org/GeoShape",
                      "meta:xdmField": "xdm:geoShape",
                      "meta:xdmType": "object",
                      properties: {
                        _id: {
                          "meta:xdmField": "@id",
                          "meta:xdmType": "string",
                          type: "string",
                        },
                        _schema: {
                          "meta:xdmType": "object",
                          "meta:xedConverted": true,
                          properties: {
                            box: {
                              items: {
                                "meta:referencedFrom":
                                  "http://schema.org/GeoCoordinates",
                                "meta:xdmType": "object",
                                properties: {
                                  _id: {
                                    format: "uri-reference",
                                    "meta:xdmField": "@id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  _schema: {
                                    "meta:xdmType": "object",
                                    "meta:xedConverted": true,
                                    properties: {
                                      description: {
                                        "meta:xdmField": "schema:description",
                                        "meta:xdmType": "string",
                                        type: "string",
                                      },
                                      elevation: {
                                        "meta:xdmField": "schema:elevation",
                                        "meta:xdmType": "number",
                                        type: "number",
                                      },
                                      latitude: {
                                        maximum: 90,
                                        "meta:xdmField": "schema:latitude",
                                        "meta:xdmType": "number",
                                        minimum: -90,
                                        type: "number",
                                      },
                                      longitude: {
                                        maximum: 180,
                                        "meta:xdmField": "schema:longitude",
                                        "meta:xdmType": "number",
                                        minimum: -180,
                                        type: "number",
                                      },
                                    },
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                              maxItems: 2,
                              "meta:xdmField": "schema:box",
                              "meta:xdmType": "array",
                              minItems: 2,
                              type: "array",
                            },
                            circle: {
                              "meta:referencedFrom":
                                "http://schema.org/GeoCircle",
                              "meta:xdmField": "schema:circle",
                              "meta:xdmType": "object",
                              properties: {
                                _id: {
                                  "meta:xdmField": "@id",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                _schema: {
                                  "meta:xdmType": "object",
                                  "meta:xedConverted": true,
                                  properties: {
                                    coordinates: {
                                      "meta:referencedFrom":
                                        "http://schema.org/GeoCoordinates",
                                      "meta:xdmField": "schema:coordinates",
                                      "meta:xdmType": "object",
                                      properties: {
                                        _id: {
                                          format: "uri-reference",
                                          "meta:xdmField": "@id",
                                          "meta:xdmType": "string",
                                          type: "string",
                                        },
                                        _schema: {
                                          "meta:xdmType": "object",
                                          "meta:xedConverted": true,
                                          properties: {
                                            description: {
                                              "meta:xdmField":
                                                "schema:description",
                                              "meta:xdmType": "string",
                                              type: "string",
                                            },
                                            elevation: {
                                              "meta:xdmField":
                                                "schema:elevation",
                                              "meta:xdmType": "number",
                                              type: "number",
                                            },
                                            latitude: {
                                              maximum: 90,
                                              "meta:xdmField":
                                                "schema:latitude",
                                              "meta:xdmType": "number",
                                              minimum: -90,
                                              type: "number",
                                            },
                                            longitude: {
                                              maximum: 180,
                                              "meta:xdmField":
                                                "schema:longitude",
                                              "meta:xdmType": "number",
                                              minimum: -180,
                                              type: "number",
                                            },
                                          },
                                          type: "object",
                                        },
                                      },
                                      type: "object",
                                    },
                                    description: {
                                      "meta:xdmField": "schema:description",
                                      "meta:xdmType": "string",
                                      type: "string",
                                    },
                                    radius: {
                                      "meta:xdmField": "schema:radius",
                                      "meta:xdmType": "number",
                                      type: "number",
                                    },
                                  },
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                            description: {
                              "meta:xdmField": "schema:description",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            elevation: {
                              "meta:xdmField": "schema:elevation",
                              "meta:xdmType": "number",
                              type: "number",
                            },
                            polygon: {
                              items: {
                                "meta:referencedFrom":
                                  "http://schema.org/GeoCoordinates",
                                "meta:xdmType": "object",
                                properties: {
                                  _id: {
                                    format: "uri-reference",
                                    "meta:xdmField": "@id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  _schema: {
                                    "meta:xdmType": "object",
                                    "meta:xedConverted": true,
                                    properties: {
                                      description: {
                                        "meta:xdmField": "schema:description",
                                        "meta:xdmType": "string",
                                        type: "string",
                                      },
                                      elevation: {
                                        "meta:xdmField": "schema:elevation",
                                        "meta:xdmType": "number",
                                        type: "number",
                                      },
                                      latitude: {
                                        maximum: 90,
                                        "meta:xdmField": "schema:latitude",
                                        "meta:xdmType": "number",
                                        minimum: -90,
                                        type: "number",
                                      },
                                      longitude: {
                                        maximum: 180,
                                        "meta:xdmField": "schema:longitude",
                                        "meta:xdmType": "number",
                                        minimum: -180,
                                        type: "number",
                                      },
                                    },
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                              "meta:xdmField": "schema:polygon",
                              "meta:xdmType": "array",
                              minItems: 4,
                              type: "array",
                            },
                          },
                          type: "object",
                        },
                        ceiling: {
                          "meta:xdmField": "xdm:ceiling",
                          "meta:xdmType": "number",
                          type: "number",
                        },
                      },
                      type: "object",
                    },
                  },
                  type: "object",
                },
                locatingType: {
                  "meta:enum": {
                    beacon: "Hardware beacon",
                    gps: "Device GPS",
                    ip: "IP to geo lookup",
                    "ip+wifi": "IP with wifi lookup",
                    "wifi-triangulation": "Wifi triangulation",
                  },
                  "meta:xdmField": "xdm:locatingType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                name: {
                  "meta:xdmField": "xdm:name",
                  "meta:xdmType": "string",
                  type: "string",
                },
                poiID: {
                  "meta:xdmField": "xdm:poiID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                type: {
                  "meta:xdmField": "xdm:type",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            poiDetail: {
              "meta:referencedFrom":
                "https://ns.adobe.com/xdm/context/poi-detail",
              "meta:xdmField": "xdm:poiDetail",
              "meta:xdmType": "object",
              properties: {
                POIID: {
                  "meta:status": "deprecated",
                  "meta:xdmField": "xdm:POIID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                beaconInteractionDetails: {
                  "meta:referencedFrom":
                    "https://ns.adobe.com/xdm/context/beacon-interaction-details",
                  "meta:xdmField": "xdm:beaconInteractionDetails",
                  "meta:xdmType": "object",
                  properties: {
                    beaconMajor: {
                      "meta:xdmField": "xdm:beaconMajor",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    beaconMinor: {
                      "meta:xdmField": "xdm:beaconMinor",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    proximity: {
                      enum: ["immediate", "near", "far", "unknown"],
                      "meta:enum": {
                        far: "Greater than 10 meters away.",
                        immediate: "Within a few centimeter.",
                        near: "Within a couple of meters.",
                        unknown:
                          "Not able to ascertain distance, signal likely very weak.",
                      },
                      "meta:xdmField": "xdm:proximity",
                      "meta:xdmType": "string",
                      type: "string",
                    },
                    proximityUUID: {
                      "meta:xdmField": "xdm:proximityUUID",
                      "meta:xdmType": "string",
                      type: "string",
                    },
                  },
                  type: "object",
                },
                category: {
                  "meta:xdmField": "xdm:category",
                  "meta:xdmType": "string",
                  type: "string",
                },
                distanceToPOICenter: {
                  "meta:xdmField": "xdm:distanceToPOICenter",
                  "meta:xdmType": "number",
                  type: "number",
                },
                geoInteractionDetails: {
                  "meta:referencedFrom":
                    "https://ns.adobe.com/xdm/context/geo-interaction-details",
                  "meta:xdmField": "xdm:geoInteractionDetails",
                  "meta:xdmType": "object",
                  properties: {
                    deviceGeoAccuracy: {
                      "meta:xdmField": "xdm:deviceGeoAccuracy",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    distanceToCenter: {
                      "meta:xdmField": "xdm:distanceToCenter",
                      "meta:xdmType": "number",
                      type: "number",
                    },
                    geoShape: {
                      "meta:referencedFrom": "http://schema.org/GeoShape",
                      "meta:xdmField": "xdm:geoShape",
                      "meta:xdmType": "object",
                      properties: {
                        _id: {
                          "meta:xdmField": "@id",
                          "meta:xdmType": "string",
                          type: "string",
                        },
                        _schema: {
                          "meta:xdmType": "object",
                          "meta:xedConverted": true,
                          properties: {
                            box: {
                              items: {
                                "meta:referencedFrom":
                                  "http://schema.org/GeoCoordinates",
                                "meta:xdmType": "object",
                                properties: {
                                  _id: {
                                    format: "uri-reference",
                                    "meta:xdmField": "@id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  _schema: {
                                    "meta:xdmType": "object",
                                    "meta:xedConverted": true,
                                    properties: {
                                      description: {
                                        "meta:xdmField": "schema:description",
                                        "meta:xdmType": "string",
                                        type: "string",
                                      },
                                      elevation: {
                                        "meta:xdmField": "schema:elevation",
                                        "meta:xdmType": "number",
                                        type: "number",
                                      },
                                      latitude: {
                                        maximum: 90,
                                        "meta:xdmField": "schema:latitude",
                                        "meta:xdmType": "number",
                                        minimum: -90,
                                        type: "number",
                                      },
                                      longitude: {
                                        maximum: 180,
                                        "meta:xdmField": "schema:longitude",
                                        "meta:xdmType": "number",
                                        minimum: -180,
                                        type: "number",
                                      },
                                    },
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                              maxItems: 2,
                              "meta:xdmField": "schema:box",
                              "meta:xdmType": "array",
                              minItems: 2,
                              type: "array",
                            },
                            circle: {
                              "meta:referencedFrom":
                                "http://schema.org/GeoCircle",
                              "meta:xdmField": "schema:circle",
                              "meta:xdmType": "object",
                              properties: {
                                _id: {
                                  "meta:xdmField": "@id",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                _schema: {
                                  "meta:xdmType": "object",
                                  "meta:xedConverted": true,
                                  properties: {
                                    coordinates: {
                                      "meta:referencedFrom":
                                        "http://schema.org/GeoCoordinates",
                                      "meta:xdmField": "schema:coordinates",
                                      "meta:xdmType": "object",
                                      properties: {
                                        _id: {
                                          format: "uri-reference",
                                          "meta:xdmField": "@id",
                                          "meta:xdmType": "string",
                                          type: "string",
                                        },
                                        _schema: {
                                          "meta:xdmType": "object",
                                          "meta:xedConverted": true,
                                          properties: {
                                            description: {
                                              "meta:xdmField":
                                                "schema:description",
                                              "meta:xdmType": "string",
                                              type: "string",
                                            },
                                            elevation: {
                                              "meta:xdmField":
                                                "schema:elevation",
                                              "meta:xdmType": "number",
                                              type: "number",
                                            },
                                            latitude: {
                                              maximum: 90,
                                              "meta:xdmField":
                                                "schema:latitude",
                                              "meta:xdmType": "number",
                                              minimum: -90,
                                              type: "number",
                                            },
                                            longitude: {
                                              maximum: 180,
                                              "meta:xdmField":
                                                "schema:longitude",
                                              "meta:xdmType": "number",
                                              minimum: -180,
                                              type: "number",
                                            },
                                          },
                                          type: "object",
                                        },
                                      },
                                      type: "object",
                                    },
                                    description: {
                                      "meta:xdmField": "schema:description",
                                      "meta:xdmType": "string",
                                      type: "string",
                                    },
                                    radius: {
                                      "meta:xdmField": "schema:radius",
                                      "meta:xdmType": "number",
                                      type: "number",
                                    },
                                  },
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                            description: {
                              "meta:xdmField": "schema:description",
                              "meta:xdmType": "string",
                              type: "string",
                            },
                            elevation: {
                              "meta:xdmField": "schema:elevation",
                              "meta:xdmType": "number",
                              type: "number",
                            },
                            polygon: {
                              items: {
                                "meta:referencedFrom":
                                  "http://schema.org/GeoCoordinates",
                                "meta:xdmType": "object",
                                properties: {
                                  _id: {
                                    format: "uri-reference",
                                    "meta:xdmField": "@id",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  _schema: {
                                    "meta:xdmType": "object",
                                    "meta:xedConverted": true,
                                    properties: {
                                      description: {
                                        "meta:xdmField": "schema:description",
                                        "meta:xdmType": "string",
                                        type: "string",
                                      },
                                      elevation: {
                                        "meta:xdmField": "schema:elevation",
                                        "meta:xdmType": "number",
                                        type: "number",
                                      },
                                      latitude: {
                                        maximum: 90,
                                        "meta:xdmField": "schema:latitude",
                                        "meta:xdmType": "number",
                                        minimum: -90,
                                        type: "number",
                                      },
                                      longitude: {
                                        maximum: 180,
                                        "meta:xdmField": "schema:longitude",
                                        "meta:xdmType": "number",
                                        minimum: -180,
                                        type: "number",
                                      },
                                    },
                                    type: "object",
                                  },
                                },
                                type: "object",
                              },
                              "meta:xdmField": "schema:polygon",
                              "meta:xdmType": "array",
                              minItems: 4,
                              type: "array",
                            },
                          },
                          type: "object",
                        },
                        ceiling: {
                          "meta:xdmField": "xdm:ceiling",
                          "meta:xdmType": "number",
                          type: "number",
                        },
                      },
                      type: "object",
                    },
                  },
                  type: "object",
                },
                locatingType: {
                  "meta:enum": {
                    beacon: "Hardware beacon",
                    gps: "Device GPS",
                    ip: "IP to geo lookup",
                    "ip+wifi": "IP with wifi lookup",
                    "wifi-triangulation": "Wifi triangulation",
                  },
                  "meta:xdmField": "xdm:locatingType",
                  "meta:xdmType": "string",
                  type: "string",
                },
                name: {
                  "meta:xdmField": "xdm:name",
                  "meta:xdmType": "string",
                  type: "string",
                },
                poiID: {
                  "meta:xdmField": "xdm:poiID",
                  "meta:xdmType": "string",
                  type: "string",
                },
                type: {
                  "meta:xdmField": "xdm:type",
                  "meta:xdmType": "string",
                  type: "string",
                },
              },
              type: "object",
            },
            poiEntries: {
              "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
              "meta:xdmField": "xdm:poiEntries",
              "meta:xdmType": "object",
              properties: {
                id: {
                  "meta:xdmField": "xdm:id",
                  "meta:xdmType": "string",
                  type: "string",
                },
                value: {
                  "meta:xdmField": "xdm:value",
                  "meta:xdmType": "number",
                  type: "number",
                },
              },
              required: ["value"],
              type: "object",
            },
            poiExits: {
              "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
              "meta:xdmField": "xdm:poiExits",
              "meta:xdmType": "object",
              properties: {
                id: {
                  "meta:xdmField": "xdm:id",
                  "meta:xdmType": "string",
                  type: "string",
                },
                value: {
                  "meta:xdmField": "xdm:value",
                  "meta:xdmType": "number",
                  type: "number",
                },
              },
              required: ["value"],
              type: "object",
            },
          },
          type: "object",
        },
        activePOIs: {
          items: {
            "meta:referencedFrom":
              "https://ns.adobe.com/xdm/context/poi-detail",
            "meta:xdmType": "object",
            properties: {
              POIID: {
                "meta:status": "deprecated",
                "meta:xdmField": "xdm:POIID",
                "meta:xdmType": "string",
                type: "string",
              },
              beaconInteractionDetails: {
                "meta:referencedFrom":
                  "https://ns.adobe.com/xdm/context/beacon-interaction-details",
                "meta:xdmField": "xdm:beaconInteractionDetails",
                "meta:xdmType": "object",
                properties: {
                  beaconMajor: {
                    "meta:xdmField": "xdm:beaconMajor",
                    "meta:xdmType": "number",
                    type: "number",
                  },
                  beaconMinor: {
                    "meta:xdmField": "xdm:beaconMinor",
                    "meta:xdmType": "number",
                    type: "number",
                  },
                  proximity: {
                    enum: ["immediate", "near", "far", "unknown"],
                    "meta:enum": {
                      far: "Greater than 10 meters away.",
                      immediate: "Within a few centimeter.",
                      near: "Within a couple of meters.",
                      unknown:
                        "Not able to ascertain distance, signal likely very weak.",
                    },
                    "meta:xdmField": "xdm:proximity",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  proximityUUID: {
                    "meta:xdmField": "xdm:proximityUUID",
                    "meta:xdmType": "string",
                    type: "string",
                  },
                },
                type: "object",
              },
              category: {
                "meta:xdmField": "xdm:category",
                "meta:xdmType": "string",
                type: "string",
              },
              distanceToPOICenter: {
                "meta:xdmField": "xdm:distanceToPOICenter",
                "meta:xdmType": "number",
                type: "number",
              },
              geoInteractionDetails: {
                "meta:referencedFrom":
                  "https://ns.adobe.com/xdm/context/geo-interaction-details",
                "meta:xdmField": "xdm:geoInteractionDetails",
                "meta:xdmType": "object",
                properties: {
                  deviceGeoAccuracy: {
                    "meta:xdmField": "xdm:deviceGeoAccuracy",
                    "meta:xdmType": "number",
                    type: "number",
                  },
                  distanceToCenter: {
                    "meta:xdmField": "xdm:distanceToCenter",
                    "meta:xdmType": "number",
                    type: "number",
                  },
                  geoShape: {
                    "meta:referencedFrom": "http://schema.org/GeoShape",
                    "meta:xdmField": "xdm:geoShape",
                    "meta:xdmType": "object",
                    properties: {
                      _id: {
                        "meta:xdmField": "@id",
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      _schema: {
                        "meta:xdmType": "object",
                        "meta:xedConverted": true,
                        properties: {
                          box: {
                            items: {
                              "meta:referencedFrom":
                                "http://schema.org/GeoCoordinates",
                              "meta:xdmType": "object",
                              properties: {
                                _id: {
                                  format: "uri-reference",
                                  "meta:xdmField": "@id",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                _schema: {
                                  "meta:xdmType": "object",
                                  "meta:xedConverted": true,
                                  properties: {
                                    description: {
                                      "meta:xdmField": "schema:description",
                                      "meta:xdmType": "string",
                                      type: "string",
                                    },
                                    elevation: {
                                      "meta:xdmField": "schema:elevation",
                                      "meta:xdmType": "number",
                                      type: "number",
                                    },
                                    latitude: {
                                      maximum: 90,
                                      "meta:xdmField": "schema:latitude",
                                      "meta:xdmType": "number",
                                      minimum: -90,
                                      type: "number",
                                    },
                                    longitude: {
                                      maximum: 180,
                                      "meta:xdmField": "schema:longitude",
                                      "meta:xdmType": "number",
                                      minimum: -180,
                                      type: "number",
                                    },
                                  },
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                            maxItems: 2,
                            "meta:xdmField": "schema:box",
                            "meta:xdmType": "array",
                            minItems: 2,
                            type: "array",
                          },
                          circle: {
                            "meta:referencedFrom":
                              "http://schema.org/GeoCircle",
                            "meta:xdmField": "schema:circle",
                            "meta:xdmType": "object",
                            properties: {
                              _id: {
                                "meta:xdmField": "@id",
                                "meta:xdmType": "string",
                                type: "string",
                              },
                              _schema: {
                                "meta:xdmType": "object",
                                "meta:xedConverted": true,
                                properties: {
                                  coordinates: {
                                    "meta:referencedFrom":
                                      "http://schema.org/GeoCoordinates",
                                    "meta:xdmField": "schema:coordinates",
                                    "meta:xdmType": "object",
                                    properties: {
                                      _id: {
                                        format: "uri-reference",
                                        "meta:xdmField": "@id",
                                        "meta:xdmType": "string",
                                        type: "string",
                                      },
                                      _schema: {
                                        "meta:xdmType": "object",
                                        "meta:xedConverted": true,
                                        properties: {
                                          description: {
                                            "meta:xdmField":
                                              "schema:description",
                                            "meta:xdmType": "string",
                                            type: "string",
                                          },
                                          elevation: {
                                            "meta:xdmField": "schema:elevation",
                                            "meta:xdmType": "number",
                                            type: "number",
                                          },
                                          latitude: {
                                            maximum: 90,
                                            "meta:xdmField": "schema:latitude",
                                            "meta:xdmType": "number",
                                            minimum: -90,
                                            type: "number",
                                          },
                                          longitude: {
                                            maximum: 180,
                                            "meta:xdmField": "schema:longitude",
                                            "meta:xdmType": "number",
                                            minimum: -180,
                                            type: "number",
                                          },
                                        },
                                        type: "object",
                                      },
                                    },
                                    type: "object",
                                  },
                                  description: {
                                    "meta:xdmField": "schema:description",
                                    "meta:xdmType": "string",
                                    type: "string",
                                  },
                                  radius: {
                                    "meta:xdmField": "schema:radius",
                                    "meta:xdmType": "number",
                                    type: "number",
                                  },
                                },
                                type: "object",
                              },
                            },
                            type: "object",
                          },
                          description: {
                            "meta:xdmField": "schema:description",
                            "meta:xdmType": "string",
                            type: "string",
                          },
                          elevation: {
                            "meta:xdmField": "schema:elevation",
                            "meta:xdmType": "number",
                            type: "number",
                          },
                          polygon: {
                            items: {
                              "meta:referencedFrom":
                                "http://schema.org/GeoCoordinates",
                              "meta:xdmType": "object",
                              properties: {
                                _id: {
                                  format: "uri-reference",
                                  "meta:xdmField": "@id",
                                  "meta:xdmType": "string",
                                  type: "string",
                                },
                                _schema: {
                                  "meta:xdmType": "object",
                                  "meta:xedConverted": true,
                                  properties: {
                                    description: {
                                      "meta:xdmField": "schema:description",
                                      "meta:xdmType": "string",
                                      type: "string",
                                    },
                                    elevation: {
                                      "meta:xdmField": "schema:elevation",
                                      "meta:xdmType": "number",
                                      type: "number",
                                    },
                                    latitude: {
                                      maximum: 90,
                                      "meta:xdmField": "schema:latitude",
                                      "meta:xdmType": "number",
                                      minimum: -90,
                                      type: "number",
                                    },
                                    longitude: {
                                      maximum: 180,
                                      "meta:xdmField": "schema:longitude",
                                      "meta:xdmType": "number",
                                      minimum: -180,
                                      type: "number",
                                    },
                                  },
                                  type: "object",
                                },
                              },
                              type: "object",
                            },
                            "meta:xdmField": "schema:polygon",
                            "meta:xdmType": "array",
                            minItems: 4,
                            type: "array",
                          },
                        },
                        type: "object",
                      },
                      ceiling: {
                        "meta:xdmField": "xdm:ceiling",
                        "meta:xdmType": "number",
                        type: "number",
                      },
                    },
                    type: "object",
                  },
                },
                type: "object",
              },
              locatingType: {
                "meta:enum": {
                  beacon: "Hardware beacon",
                  gps: "Device GPS",
                  ip: "IP to geo lookup",
                  "ip+wifi": "IP with wifi lookup",
                  "wifi-triangulation": "Wifi triangulation",
                },
                "meta:xdmField": "xdm:locatingType",
                "meta:xdmType": "string",
                type: "string",
              },
              name: {
                "meta:xdmField": "xdm:name",
                "meta:xdmType": "string",
                type: "string",
              },
              poiID: {
                "meta:xdmField": "xdm:poiID",
                "meta:xdmType": "string",
                type: "string",
              },
              type: {
                "meta:xdmField": "xdm:type",
                "meta:xdmType": "string",
                type: "string",
              },
            },
            type: "object",
          },
          "meta:status": "experimental",
          "meta:xdmField": "xdm:activePOIs",
          "meta:xdmType": "array",
          type: "array",
        },
        geo: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/common/geo",
          "meta:xdmField": "xdm:geo",
          "meta:xdmType": "object",
          properties: {
            _id: {
              format: "uri-reference",
              "meta:xdmField": "@id",
              "meta:xdmType": "string",
              type: "string",
            },
            _schema: {
              "meta:xdmType": "object",
              "meta:xedConverted": true,
              properties: {
                description: {
                  "meta:xdmField": "schema:description",
                  "meta:xdmType": "string",
                  type: "string",
                },
                elevation: {
                  "meta:xdmField": "schema:elevation",
                  "meta:xdmType": "number",
                  type: "number",
                },
                latitude: {
                  maximum: 90,
                  "meta:xdmField": "schema:latitude",
                  "meta:xdmType": "number",
                  minimum: -90,
                  type: "number",
                },
                longitude: {
                  maximum: 180,
                  "meta:xdmField": "schema:longitude",
                  "meta:xdmType": "number",
                  minimum: -180,
                  type: "number",
                },
              },
              type: "object",
            },
            city: {
              "meta:xdmField": "xdm:city",
              "meta:xdmType": "string",
              type: "string",
            },
            countryCode: {
              "meta:xdmField": "xdm:countryCode",
              "meta:xdmType": "string",
              pattern: "^[A-Z]{2}$",
              type: "string",
            },
            dmaID: {
              "meta:xdmField": "xdm:dmaID",
              "meta:xdmType": "int",
              type: "integer",
            },
            msaID: {
              "meta:xdmField": "xdm:msaID",
              "meta:xdmType": "int",
              type: "integer",
            },
            postalCode: {
              "meta:xdmField": "xdm:postalCode",
              "meta:xdmType": "string",
              type: "string",
            },
            stateProvince: {
              examples: ["US-CA", "DE-BB", "JP-13"],
              "meta:xdmField": "xdm:stateProvince",
              "meta:xdmType": "string",
              pattern: "([A-Z]{2}-[A-Z0-9]{1,3}|)",
              type: "string",
            },
          },
          type: "object",
        },
        ianaTimezone: {
          "meta:xdmField": "xdm:ianaTimezone",
          "meta:xdmType": "string",
          type: "string",
        },
        localTime: {
          format: "date-time",
          "meta:xdmField": "xdm:localTime",
          "meta:xdmType": "date-time",
          type: "string",
        },
        localTimezoneOffset: {
          "meta:xdmField": "xdm:localTimezoneOffset",
          "meta:xdmType": "int",
          type: "integer",
        },
      },
      type: "object",
    },
    productListItems: {
      items: {
        "meta:referencedFrom":
          "https://ns.adobe.com/xdm/content/productlistitem",
        "meta:xdmType": "object",
        properties: {
          SKU: {
            "meta:xdmField": "xdm:SKU",
            "meta:xdmType": "string",
            type: "string",
          },
          _id: {
            format: "uri-reference",
            "meta:xdmField": "@id",
            "meta:xdmType": "string",
            type: "string",
          },
          _salesvelocity: {
            "meta:xdmType": "object",
            properties: {
              core: {
                isRequired: false,
                "meta:referencedFrom":
                  "https://ns.adobe.com/salesvelocity/datatypes/000d4c195f109aee69c3bc483869e908",
                "meta:xdmType": "object",
                properties: {
                  description: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.ee_product_details_core_v1{}.description",
                      ref: [
                        "schema://5e4571d2b6f14a0000eb0615",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  imageURL: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.ee_product_details_core_v1{}.imageURL",
                      ref: [
                        "schema://5e4571d2b6f14a0000eb0615",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  mainCategory: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.ee_product_details_core_v1{}.mainCategory",
                      ref: [
                        "schema://5e4571d2b6f14a0000eb0615",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  productURL: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.ee_product_details_core_v1{}.productURL",
                      ref: [
                        "schema://5e4571d2b6f14a0000eb0615",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "string",
                    type: "string",
                  },
                  subCategory: {
                    isRequired: false,
                    "meta:ui": {
                      editable: true,
                      path:
                        "{}._salesvelocity{}.ee_product_details_core_v1{}.subCategory",
                      ref: [
                        "schema://5e4571d2b6f14a0000eb0615",
                        "#/definitions/customFields",
                      ],
                    },
                    "meta:xdmType": "string",
                    type: "string",
                  },
                },
                type: "object",
              },
              retail: {
                "meta:xdmType": "object",
                properties: {
                  productDetails: {
                    isRequired: false,
                    "meta:referencedFrom":
                      "https://ns.adobe.com/salesvelocity/datatypes/0630ec4c7798f502827c06d949a6e07c",
                    "meta:xdmType": "object",
                    properties: {
                      color: {
                        isRequired: false,
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_utilization_retail_v1{}.color",
                          ref: [
                            "schema://5e45709fb6f14a0000eb060e",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      size: {
                        isRequired: false,
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_utilization_retail_v1{}.size",
                          ref: [
                            "schema://5e45709fb6f14a0000eb060e",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      targetGender: {
                        isRequired: false,
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_utilization_retail_v1{}.targetGender",
                          ref: [
                            "schema://5e45709fb6f14a0000eb060e",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "string",
                        type: "string",
                      },
                    },
                    type: "object",
                  },
                  productSpecs: {
                    isRequired: false,
                    "meta:referencedFrom":
                      "https://ns.adobe.com/salesvelocity/datatypes/6225d397de89ead4e324367b190ab438",
                    "meta:xdmType": "object",
                    properties: {
                      allergens: {
                        isRequired: false,
                        items: { "meta:xdmType": "string", type: "string" },
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_details_retail_v1{}.allergens[]{}",
                          ref: [
                            "schema://5e3c8f98f6ca600000403e81",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "array",
                        type: "array",
                      },
                      color: {
                        isRequired: false,
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_details_retail_v1{}.color",
                          ref: [
                            "schema://5e3c8f98f6ca600000403e81",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      fabric: {
                        isRequired: false,
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_details_retail_v1{}.fabric",
                          ref: [
                            "schema://5e3c8f98f6ca600000403e81",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "string",
                        type: "string",
                      },
                      ingredients: {
                        isRequired: false,
                        items: { "meta:xdmType": "string", type: "string" },
                        "meta:ui": {
                          editable: true,
                          path:
                            "{}._salesvelocity{}.ee_product_details_retail_v1{}.ingredients[]{}",
                          ref: [
                            "schema://5e3c8f98f6ca600000403e81",
                            "#/definitions/customFields",
                          ],
                        },
                        "meta:xdmType": "array",
                        type: "array",
                      },
                    },
                    type: "object",
                  },
                },
                type: "object",
              },
            },
            type: "object",
          },
          currencyCode: {
            examples: ["USD", "EUR"],
            "meta:xdmField": "xdm:currencyCode",
            "meta:xdmType": "string",
            pattern: "^[A-Z]{3}$",
            type: "string",
          },
          name: {
            "meta:xdmField": "xdm:name",
            "meta:xdmType": "string",
            type: "string",
          },
          priceTotal: {
            "meta:xdmField": "xdm:priceTotal",
            "meta:xdmType": "number",
            type: "number",
          },
          product: {
            format: "uri",
            "meta:xdmField": "xdm:product",
            "meta:xdmType": "string",
            type: "string",
          },
          productAddMethod: {
            "meta:xdmField": "xdm:productAddMethod",
            "meta:xdmType": "string",
            type: "string",
          },
          quantity: {
            "meta:xdmField": "xdm:quantity",
            "meta:xdmType": "int",
            type: "integer",
          },
        },
        required: ["SKU"],
        type: "object",
      },
      "meta:xdmField": "xdm:productListItems",
      "meta:xdmType": "array",
      type: "array",
    },
    timestamp: {
      format: "date-time",
      "meta:xdmField": "xdm:timestamp",
      "meta:xdmType": "date-time",
      type: "string",
    },
    userActivityRegion: {
      "meta:xdmField": "xdm:userActivityRegion",
      "meta:xdmType": "object",
      properties: {
        captureTimestamp: {
          format: "date-time",
          "meta:xdmField": "xdm:captureTimestamp",
          "meta:xdmType": "date-time",
          type: "string",
        },
        dataCenterLocation: {
          "meta:enum": {
            ARE1: "ARE1",
            ARE2: "ARE2",
            AUS1: "AUS1",
            AUS10: "AUS10",
            AUS2: "AUS2",
            AUS3: "AUS3",
            AUS4: "AUS4",
            AUS5: "AUS5",
            AUS6: "AUS6",
            AUS7: "AUS7",
            AUS8: "AUS8",
            AUS9: "AUS9",
            BEL1: "BEL1",
            BHR1: "BHR1",
            BRA2: "BRA2",
            BRA3: "BRA3",
            BRA4: "BRA4",
            CA1: "CA1",
            CA10: "CA10",
            CA12: "CA12",
            CA13: "CA13",
            CA14: "CA14",
            CA3: "CA3",
            CA4: "CA4",
            CA5: "CA5",
            CA6: "CA6",
            CA7: "CA7",
            CAN1: "CAN1",
            CAN2: "CAN2",
            CAN4: "CAN4",
            CAN5: "CAN5",
            CAN6: "CAN6",
            CAN7: "CAN7",
            CHE1: "CHE1",
            CHE2: "CHE2",
            CHE3: "CHE3",
            CHN1: "CHN1",
            CHN2: "CHN2",
            CHN3: "CHN3",
            CHN4: "CHN4",
            CHN5: "CHN5",
            CHN6: "CHN6",
            DEU1: "DEU1",
            DEU2: "DEU2",
            DEU4: "DEU4",
            DEU5: "DEU5",
            DEU6: "DEU6",
            DEU7: "DEU7",
            DNK1: "DNK1",
            FIN1: "FIN1",
            FRA10: "FRA10",
            FRA2: "FRA2",
            FRA3: "FRA3",
            FRA4: "FRA4",
            FRA5: "FRA5",
            FRA6: "FRA6",
            FRA7: "FRA7",
            FRA8: "FRA8",
            FRA9: "FRA9",
            GBR1: "GBR1",
            GBR10: "GBR10",
            GBR11: "GBR11",
            GBR12: "GBR12",
            GBR13: "GBR13",
            GBR5: "GBR5",
            GBR7: "GBR7",
            GBR8: "GBR8",
            GBR9: "GBR9",
            HKG1: "HKG1",
            HKG2: "HKG2",
            HKG3: "HKG3",
            HKG4: "HKG4",
            HKG5: "HKG5",
            IA1: "IA1",
            IA2: "IA2",
            IA3: "IA3",
            IA4: "IA4",
            IL1: "IL1",
            IND1: "IND1",
            IND2: "IND2",
            IND3: "IND3",
            IND4: "IND4",
            IND5: "IND5",
            IND6: "IND6",
            IRL1: "IRL1",
            IRL2: "IRL2",
            IRL3: "IRL3",
            JPN2: "JPN2",
            JPN3: "JPN3",
            JPN4: "JPN4",
            JPN5: "JPN5",
            JPN6: "JPN6",
            JPN7: "JPN7",
            JPN8: "JPN8",
            KOR1: "KOR1",
            KOR2: "KOR2",
            KOR3: "KOR3",
            MA1: "MA1",
            MA2: "MA2",
            MA3: "MA3",
            MDA1: "MDA1",
            NLD1: "NLD1",
            NLD2: "NLD2",
            NLD3: "NLD3",
            NLD4: "NLD4",
            NOR1: "NOR1",
            NOR2: "NOR2",
            NY7: "NY7",
            OH2: "OH2",
            OR1: "OR1",
            OR2: "OR2",
            OR3: "OR3",
            OR4: "OR4",
            ROU1: "ROU1",
            SC1: "SC1",
            SGP2: "SGP2",
            SGP3: "SGP3",
            SGP4: "SGP4",
            SGP5: "SGP5",
            SGP6: "SGP6",
            SGP7: "SGP7",
            SWE1: "SWE1",
            TWN1: "TWN1",
            TX3: "TX3",
            UT1: "UT1",
            UT2: "UT2",
            VA1: "VA1",
            VA10: "VA10",
            VA11: "VA11",
            VA12: "VA12",
            VA13: "VA13",
            VA14: "VA14",
            VA5: "VA5",
            VA6: "VA6",
            VA7: "VA7",
            VA8: "VA8",
            VA9: "VA9",
            WA1: "WA1",
            WA2: "WA2",
            WY1: "WY1",
            ZAF1: "ZAF1",
            ZAF2: "ZAF2",
          },
          "meta:xdmField": "xdm:dataCenterLocation",
          "meta:xdmType": "string",
          type: "string",
        },
      },
      type: "object",
    },
    web: {
      "meta:referencedFrom": "https://ns.adobe.com/xdm/context/webinfo",
      "meta:xdmField": "xdm:web",
      "meta:xdmType": "object",
      properties: {
        webInteraction: {
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/webinteraction",
          "meta:xdmField": "xdm:webInteraction",
          "meta:xdmType": "object",
          properties: {
            URL: {
              "meta:xdmField": "xdm:URL",
              "meta:xdmType": "string",
              type: "string",
            },
            linkClicks: {
              "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
              "meta:xdmField": "xdm:linkClicks",
              "meta:xdmType": "object",
              properties: {
                id: {
                  "meta:xdmField": "xdm:id",
                  "meta:xdmType": "string",
                  type: "string",
                },
                value: {
                  "meta:xdmField": "xdm:value",
                  "meta:xdmType": "number",
                  type: "number",
                },
              },
              required: ["value"],
              type: "object",
            },
            name: {
              "meta:xdmField": "xdm:name",
              "meta:xdmType": "string",
              type: "string",
            },
            type: {
              enum: ["download", "exit", "other"],
              "meta:enum": {
                download: "Download",
                exit: "Exit",
                other: "Other",
              },
              "meta:xdmField": "xdm:type",
              "meta:xdmType": "string",
              type: "string",
            },
          },
          type: "object",
        },
        webPageDetails: {
          "meta:referencedFrom":
            "https://ns.adobe.com/xdm/context/webpagedetails",
          "meta:xdmField": "xdm:webPageDetails",
          "meta:xdmType": "object",
          properties: {
            URL: {
              "meta:xdmField": "xdm:URL",
              "meta:xdmType": "string",
              pattern:
                "^\\w+:\\/\\/(localhost|[^\\s:\\/]+\\.[^\\s:\\/]+)(:\\d+)?(\\/[^\\s]*)?$",
              type: "string",
            },
            isErrorPage: {
              "meta:xdmField": "xdm:isErrorPage",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
            isHomePage: {
              "meta:xdmField": "xdm:isHomePage",
              "meta:xdmType": "boolean",
              type: "boolean",
            },
            name: {
              "meta:xdmField": "xdm:name",
              "meta:xdmType": "string",
              type: "string",
            },
            pageViews: {
              "meta:referencedFrom": "https://ns.adobe.com/xdm/data/measure",
              "meta:xdmField": "xdm:pageViews",
              "meta:xdmType": "object",
              properties: {
                id: {
                  "meta:xdmField": "xdm:id",
                  "meta:xdmType": "string",
                  type: "string",
                },
                value: {
                  "meta:xdmField": "xdm:value",
                  "meta:xdmType": "number",
                  type: "number",
                },
              },
              required: ["value"],
              type: "object",
            },
            server: {
              "meta:xdmField": "xdm:server",
              "meta:xdmType": "string",
              type: "string",
            },
            siteSection: {
              "meta:xdmField": "xdm:siteSection",
              "meta:xdmType": "string",
              type: "string",
            },
            viewName: {
              "meta:xdmField": "xdm:viewName",
              "meta:xdmType": "string",
              type: "string",
            },
          },
          type: "object",
        },
        webReferrer: {
          "meta:referencedFrom": "https://ns.adobe.com/xdm/context/webreferrer",
          "meta:xdmField": "xdm:webReferrer",
          "meta:xdmType": "object",
          properties: {
            URL: {
              "meta:xdmField": "xdm:URL",
              "meta:xdmType": "string",
              type: "string",
            },
            type: {
              enum: [
                "internal",
                "external",
                "search_engine",
                "typed_bookmarked",
                "email",
                "social",
                "unknown",
                "usenet",
              ],
              "meta:enum": {
                email: "Email",
                external: "External",
                internal: "Internal",
                news: "Usenet newsgroup",
                search_engine: "Search engine",
                social: "Social network",
                typed_bookmarked: "Typed or bookmarked",
                unknown: "Unknown",
              },
              "meta:xdmField": "xdm:type",
              "meta:xdmType": "string",
              type: "string",
            },
          },
          type: "object",
        },
      },
      type: "object",
    },
  },
  required: ["_id", "timestamp"],
  type: "object",
  version: "1.0",
};
const dataInlets = {
  items: [
    {
      inletUrl:
        "https://dcs.adobedc.net/collection/8438a5a3bbfde97f88cbec6034fe6ec86e76cfd0b8cf504c99ce68b98492be03",
      inletId:
        "8438a5a3bbfde97f88cbec6034fe6ec86e76cfd0b8cf504c99ce68b98492be03",
      imsOrg: "E55513145DD2BD010A495CFA@AdobeOrg",
      sourceId: "journeyStepEvents",
      dataType: "xdm",
      status: "active",
      metadata: {
        pipeline: {},
      },
      sandbox: {
        sandboxName: "sandbox1",
      },
      name: "journeyStepEvents",
      description: "journeyStepEvents",
      authenticationRequired: true,
      createdAt: "2021-03-11T18:59:55.178Z",
      createdBy: "bso_core_services@AdobeID",
      modifiedAt: "2021-03-11T18:59:55.178Z",
      modifiedBy: "bso_core_services@AdobeID",
    },
  ],
  pagination: {
    offset: 0,
    limit: 20,
  },
  length: 1,
  total: 1,
};
const aioActivationList = [
  {
    activationId: "92c6709d7478493b86709d7478293b2b",
    annotations: [
      {
        key: "causedBy",
        value: "sequence",
      },
      {
        key: "path",
        value: "adobeio/shared-validators-v1/app-registry",
      },
      {
        key: "waitTime",
        value: 4,
      },
      {
        key: "kind",
        value: "nodejs:10",
      },
      {
        key: "timeout",
        value: false,
      },
      {
        key: "limits",
        value: {
          concurrency: 200,
          logs: 10,
          memory: 256,
          timeout: 60000,
        },
      },
    ],
    cause: "880f2f9733d947998f2f9733d917996c",
    duration: 7,
    end: 1616848502353,
    name: "app-registry",
    namespace: "55355-aepprofileeditor-development",
    publish: false,
    start: 1616848502346,
    statusCode: 0,
    version: "0.0.4",
  },
  {
    activationId: "b14a1fb417f1489e8a1fb417f1b89eb2",
    annotations: [
      {
        key: "causedBy",
        value: "sequence",
      },
      {
        key: "path",
        value:
          "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-sandboxes",
      },
      {
        key: "waitTime",
        value: 140,
      },
      {
        key: "kind",
        value: "nodejs:12",
      },
      {
        key: "timeout",
        value: false,
      },
      {
        key: "limits",
        value: {
          concurrency: 200,
          logs: 10,
          memory: 256,
          timeout: 60000,
        },
      },
      {
        key: "initTime",
        value: 379,
      },
    ],
    cause: "be1e4d5dd7294b5f9e4d5dd7296b5f76",
    duration: 3290,
    end: 1616848459881,
    name: "__secured_get-sandboxes",
    namespace: "55355-aepprofileeditor-development",
    publish: false,
    start: 1616848456591,
    statusCode: 0,
    version: "0.0.22",
  },
  {
    activationId: "dedd39a75c144f999d39a75c14df996f",
    annotations: [
      {
        key: "causedBy",
        value: "sequence",
      },
      {
        key: "path",
        value: "adobeio/shared-validators-v1/app-registry",
      },
      {
        key: "waitTime",
        value: 92,
      },
      {
        key: "kind",
        value: "nodejs:10",
      },
      {
        key: "timeout",
        value: false,
      },
      {
        key: "limits",
        value: {
          concurrency: 200,
          logs: 10,
          memory: 256,
          timeout: 60000,
        },
      },
      {
        key: "initTime",
        value: 177,
      },
    ],
    cause: "be1e4d5dd7294b5f9e4d5dd7296b5f76",
    duration: 4487,
    end: 1616848456445,
    name: "app-registry",
    namespace: "55355-aepprofileeditor-development",
    publish: false,
    start: 1616848451958,
    statusCode: 0,
    version: "0.0.4",
  },
  {
    activationId: "be1e4d5dd7294b5f9e4d5dd7296b5f76",
    annotations: [
      {
        key: "topmost",
        value: true,
      },
      {
        key: "path",
        value:
          "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-sandboxes",
      },
      {
        key: "waitTime",
        value: 17,
      },
      {
        key: "kind",
        value: "sequence",
      },
      {
        key: "limits",
        value: {
          concurrency: 200,
          logs: 10,
          memory: 256,
          timeout: 60000,
        },
      },
    ],
    duration: 8025,
    end: 1616848459888,
    name: "get-sandboxes",
    namespace: "55355-aepprofileeditor-development",
    publish: false,
    start: 1616848451863,
    statusCode: 0,
    version: "0.0.17",
  },
];

const aioActivationLog = {
  logs: [
    "2021-03-27T12:35:02.820Z       stdout: 2021-03-27T12:35:02.819Z [main /55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-activation-list] info: Calling the main action",
    "2021-03-27T12:35:02.900Z       stdout: 2021-03-27T12:35:02.900Z [main /55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-activation-list] info: 200: successful request",
  ],
  result: {
    actionHost: "10.112.8.166",
    activationId: "d5651579d7174114a51579d7171114dd",
    annotations: [
      {
        key: "causedBy",
        value: "sequence",
      },
      {
        key: "path",
        value:
          "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-activation-list",
      },
      {
        key: "waitTime",
        value: 73,
      },
      {
        key: "kind",
        value: "nodejs:12",
      },
      {
        key: "timeout",
        value: false,
      },
      {
        key: "limits",
        value: {
          concurrency: 200,
          logs: 10,
          memory: 256,
          timeout: 60000,
        },
      },
      {
        key: "initTime",
        value: 399,
      },
    ],
    cause: "880f2f9733d947998f2f9733d917996c",
    duration: 484,
    end: 1616848502915,
    invokerInstanceId: {
      instance: 4,
      instanceType: "invoker",
      uniqueName: "rt-invoker-4",
      userMemory: "150000000000000 B",
    },
    logs: [],
    name: "__secured_get-activation-list",
    namespace: "55355-aepprofileeditor-development",
    podName: "wskrt-invoker-44-29782-prewarm-nodejs12",
    publish: false,
    response: {
      result: {
        body: [
          {
            activationId: "92c6709d7478493b86709d7478293b2b",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 4,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "880f2f9733d947998f2f9733d917996c",
            duration: 7,
            end: 1616848502353,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616848502346,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "b14a1fb417f1489e8a1fb417f1b89eb2",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-sandboxes",
              },
              {
                key: "waitTime",
                value: 140,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
              {
                key: "initTime",
                value: 379,
              },
            ],
            cause: "be1e4d5dd7294b5f9e4d5dd7296b5f76",
            duration: 3290,
            end: 1616848459881,
            name: "__secured_get-sandboxes",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616848456591,
            statusCode: 0,
            version: "0.0.22",
          },
          {
            activationId: "dedd39a75c144f999d39a75c14df996f",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 92,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
              {
                key: "initTime",
                value: 177,
              },
            ],
            cause: "be1e4d5dd7294b5f9e4d5dd7296b5f76",
            duration: 4487,
            end: 1616848456445,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616848451958,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "be1e4d5dd7294b5f9e4d5dd7296b5f76",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-sandboxes",
              },
              {
                key: "waitTime",
                value: 17,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 8025,
            end: 1616848459888,
            name: "get-sandboxes",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616848451863,
            statusCode: 0,
            version: "0.0.17",
          },
          {
            activationId: "b0f27ef64bae45adb27ef64bae95ad38",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-schemas",
              },
              {
                key: "waitTime",
                value: 2,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "222774bc694a4638a774bc694a763810",
            duration: 1379,
            end: 1616790960193,
            name: "__secured_get-all-schemas",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790958814,
            statusCode: 0,
            version: "0.0.17",
          },
          {
            activationId: "2555107f0a62419f95107f0a62e19f93",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 6,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "222774bc694a4638a774bc694a763810",
            duration: 2,
            end: 1616790958807,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790958805,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "7e54cb77c7664bbc94cb77c7669bbc89",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-unions",
              },
              {
                key: "waitTime",
                value: 7,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "122c86f465654127ac86f46565612786",
            duration: 1671,
            end: 1616790960475,
            name: "__secured_get-all-unions",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790958804,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "222774bc694a4638a774bc694a763810",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-schemas",
              },
              {
                key: "waitTime",
                value: 4,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1404,
            end: 1616790960203,
            name: "get-all-schemas",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790958799,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "53971b4df0d8408b971b4df0d8b08b92",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 7,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "122c86f465654127ac86f46565612786",
            duration: 3,
            end: 1616790958795,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790958792,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "122c86f465654127ac86f46565612786",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-unions",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1693,
            end: 1616790960478,
            name: "get-all-unions",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790958785,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "5deff025a28e4dbfaff025a28e1dbf3a",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-schemas",
              },
              {
                key: "waitTime",
                value: 4,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "5cb9a2133ad740c9b9a2133ad750c9ab",
            duration: 1568,
            end: 1616790959518,
            name: "__secured_get-all-schemas",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790957950,
            statusCode: 0,
            version: "0.0.17",
          },
          {
            activationId: "4ee01a192c584129a01a192c58812993",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 22,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "5cb9a2133ad740c9b9a2133ad750c9ab",
            duration: 3,
            end: 1616790957947,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790957944,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "5cb9a2133ad740c9b9a2133ad750c9ab",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-schemas",
              },
              {
                key: "waitTime",
                value: 41,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1600,
            end: 1616790959522,
            name: "get-all-schemas",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790957922,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "bb15bfb5bf4c49be95bfb5bf4cc9bed2",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-unions",
              },
              {
                key: "waitTime",
                value: 4,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "939d657a747a447d9d657a747a547d4b",
            duration: 1621,
            end: 1616790959533,
            name: "__secured_get-all-unions",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790957912,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "be1720a1df2643969720a1df26f396bf",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 4,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "939d657a747a447d9d657a747a547d4b",
            duration: 3,
            end: 1616790957904,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790957901,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "939d657a747a447d9d657a747a547d4b",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-unions",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1644,
            end: 1616790959537,
            name: "get-all-unions",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790957893,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "753318b4d01b4fe2b318b4d01b6fe2a1",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-identity-namespaces",
              },
              {
                key: "waitTime",
                value: 4,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "a9532def21524f94932def21527f941e",
            duration: 1766,
            end: 1616790955979,
            name: "__secured_get-identity-namespaces",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954213,
            statusCode: 0,
            version: "0.0.20",
          },
          {
            activationId: "bd8d1fbde0a645d78d1fbde0a6e5d7b7",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-datasets",
              },
              {
                key: "waitTime",
                value: 7,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "4d521a21577b4c16921a21577b6c160f",
            duration: 3558,
            end: 1616790957768,
            name: "__secured_get-all-datasets",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954210,
            statusCode: 0,
            version: "0.0.17",
          },
          {
            activationId: "8322e5b2b4bb4c92a2e5b2b4bbec925c",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-datasets",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "a9286d8c1ada45dfa86d8c1ada45dfe6",
            duration: 1945,
            end: 1616790956154,
            name: "__secured_get-all-datasets",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954209,
            statusCode: 0,
            version: "0.0.17",
          },
          {
            activationId: "0b9c49a9134a45b19c49a9134ab5b1d4",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-all-data-inlets",
              },
              {
                key: "waitTime",
                value: 2,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "34da3820a6c744b69a3820a6c714b688",
            duration: 1777,
            end: 1616790955981,
            name: "__secured_get-all-data-inlets",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954204,
            statusCode: 0,
            version: "0.0.17",
          },
          {
            activationId: "856a4145d6614ba7aa4145d661aba78e",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "34da3820a6c744b69a3820a6c714b688",
            duration: 6,
            end: 1616790954194,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954188,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "b3ed27dba43d400fad27dba43db00fb5",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 13,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "4d521a21577b4c16921a21577b6c160f",
            duration: 7,
            end: 1616790954193,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954186,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "d480e4c31f21486380e4c31f212863f0",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 9,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "a9532def21524f94932def21527f941e",
            duration: 6,
            end: 1616790954191,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954185,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "c4081d451dad4359881d451dad1359a9",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 10,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "a9286d8c1ada45dfa86d8c1ada45dfe6",
            duration: 6,
            end: 1616790954189,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954183,
            statusCode: 0,
            version: "0.0.4",
          },
          {
            activationId: "34da3820a6c744b69a3820a6c714b688",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-data-inlets",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1807,
            end: 1616790955989,
            name: "get-all-data-inlets",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954182,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "4d521a21577b4c16921a21577b6c160f",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-datasets",
              },
              {
                key: "waitTime",
                value: 1,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 3598,
            end: 1616790957771,
            name: "get-all-datasets",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954173,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "a9532def21524f94932def21527f941e",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-identity-namespaces",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1812,
            end: 1616790955984,
            name: "get-identity-namespaces",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954172,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "a9286d8c1ada45dfa86d8c1ada45dfe6",
            annotations: [
              {
                key: "topmost",
                value: true,
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/get-all-datasets",
              },
              {
                key: "waitTime",
                value: 1,
              },
              {
                key: "kind",
                value: "sequence",
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            duration: 1992,
            end: 1616790956159,
            name: "get-all-datasets",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790954167,
            statusCode: 0,
            version: "0.0.16",
          },
          {
            activationId: "8a5d5d77172044f79d5d77172054f715",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value:
                  "55355-aepprofileeditor-development/aepProfileEditor-0.0.1/__secured_get-activation-log",
              },
              {
                key: "waitTime",
                value: 5,
              },
              {
                key: "kind",
                value: "nodejs:12",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "30b4e8ad12924d3eb4e8ad12929d3efe",
            duration: 189,
            end: 1616790903770,
            name: "__secured_get-activation-log",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790903581,
            statusCode: 0,
            version: "0.0.14",
          },
          {
            activationId: "e65eecb360eb47549eecb360eb875410",
            annotations: [
              {
                key: "causedBy",
                value: "sequence",
              },
              {
                key: "path",
                value: "adobeio/shared-validators-v1/app-registry",
              },
              {
                key: "waitTime",
                value: 6,
              },
              {
                key: "kind",
                value: "nodejs:10",
              },
              {
                key: "timeout",
                value: false,
              },
              {
                key: "limits",
                value: {
                  concurrency: 200,
                  logs: 10,
                  memory: 256,
                  timeout: 60000,
                },
              },
            ],
            cause: "30b4e8ad12924d3eb4e8ad12929d3efe",
            duration: 3,
            end: 1616790903575,
            name: "app-registry",
            namespace: "55355-aepprofileeditor-development",
            publish: false,
            start: 1616790903572,
            statusCode: 0,
            version: "0.0.4",
          },
        ],
        statusCode: 200,
      },
      size: 17469,
      status: "success",
      success: true,
    },
    start: 1616848502431,
    subject: "55355-aepprofileeditor-development",
    version: "0.0.17",
  },
};
const data = {
  identityPreviewReport: identityPreviewReport,
  sandboxes: sandboxes,
  profile: profile,
  experienceEvents: experienceEvents,
  identityNamespaces: identityNamespaces,
  datasets: datasets,
  unionSchemas: unionSchemas,
  schemas: schemas,
  postPreviewJob: postPreviewJob,
  previewResult: previewResult,
  profileList: profileList,
  crmSchema: crmSchema,
  dataInlets: dataInlets,
  aioActivationList: aioActivationList,
  aioActivationLog: aioActivationLog,
  experienceEventSchema: experienceEventSchema,
  sampleProfile: sampleProfile,
  profileUnionSchema: profileUnionSchema,
};

module.exports = {
  data: data,
  errors: {
    Bad_Request: BadRequest,
    Unauthorized_Request: UnauthorizedRequest,
    Forbidden_Request: ForbiddenRequest,
    Not_Found: NotFound,
    Internal_Server_Error: InternalServerError,
  },
};
