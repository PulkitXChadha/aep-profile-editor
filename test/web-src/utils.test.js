const utils = require("../../web-src/src/utils");

jest.mock("node-fetch");
const fetch = require("node-fetch");
beforeEach(() => {
  jest.clearAllMocks(); //clean out mock data
  jest.resetModules();
});

const fakeParams = {
  actionsName: "fake-action",
  header: {
    authorization: "Bearer fake",
    "x-gw-ims-org-id": "fake IMS ORG",
  },
  params: {
    apiKey: "fake API Key",
  },
};
const mockFetchErrorResponse = {
  ok: false,
  status: 400,
  text: () => Promise.reject({ data: { name: "Luke Skywalker" } }),
};
const mockFetchResponse = {
  ok: true,
  status: 200,
  text: () => Promise.resolve({ data: { name: "Luke Skywalker" } }),
};
describe("actionWebInvoke", () => {
  test("returns response data", async () => {
    fetch.mockResolvedValueOnce(mockFetchResponse);
    const response = await utils.default(fakeParams);
    expect(response).toEqual({
      data: { name: "Luke Skywalker" },
    });
  });
});
