import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";

import { HashRouter as Router } from "react-router-dom";

import { Provider, defaultTheme } from "@adobe/react-spectrum";
import userEvent from "@testing-library/user-event";
import mock from "../actions/mock";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../web-src/src/utils.js");
import actionWebInvoke from "../../web-src/src/utils.js";
const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: localStorageMock,
});
import ProfileLookupView from "../../web-src/src/components/ProfileLookupView";

const mockIms = {
  token: "fake-token",
  org: "fake-org",
  profile: {
    first_name: "fake-firstname",
  },
};

beforeEach(() => {
  window.sessionStorage.clear(); //clean out session storage
  jest.clearAllMocks(); //clean out mock data
  jest.resetModules();
});

describe("Profile Lookup Page", () => {
  test("initial page view", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");

    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);

        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    //it displays sub heading
    expect(screen.getByText("Find Profiles")).toBeDefined();

    //it displays the Add button by default
    expect(screen.getByText("Add").closest("button")).toBeDefined();

    //it has the view button disabled
    expect(screen.getByText("View").closest("button")).toBeDisabled();

    //it displays progress circle with getting identity namespaces messages
    expect(screen.getByTestId("namespace-list-progress-circle")).toBeDefined();
    expect(
      screen.getAllByLabelText("Getting Identity Namespaces")
    ).toBeDefined();

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //Schema Side Bar

    //it displays sub heading
    expect(screen.getByText("Union Schemas")).toBeDefined();

    //it calls the get all union list runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-all-unions",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    //it displays the profile schema as default selected
    expect(screen.getByTestId("union-schema-list-picker")).toHaveTextContent(
      "XDM Individual Profile"
    );

    //it calls the get all schemas runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-all-schemas",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    //user selects experience event union
    fireEvent.change(
      screen.getByTestId("schema-side-bar-view").querySelector("select"),
      {
        target: { value: "https://ns.adobe.com/xdm/context/experienceevent" },
      }
    );

    //it displays the experience event schema
    expect(screen.getByTestId("union-schema-list-picker")).toHaveTextContent(
      "XDM ExperienceEvent"
    );

    // FindProfile Inputs

    //it calls the get identity namespaces runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-identity-namespaces",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    //it has the text input disabled
    expect(screen.getByTestId("entity-value-textfield")).toBeDisabled();

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    //it has the text input enabled
    expect(screen.getByTestId("entity-value-textfield")).toBeEnabled();

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //it has the view button enabled
    expect(screen.getByText("View").closest("button")).toBeEnabled();

    //user clicks the clear button
    fireEvent.click(screen.getByText("Clear").closest("button"));

    //it has the view button disabled
    expect(screen.getByText("View").closest("button")).toBeDisabled();

    //it has  emptied text value
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue("");

    //it does not have email selected
    expect(screen.getByTestId("namespaces-list-picker")).not.toHaveTextContent(
      "Email"
    );

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    //it has the text input enabled
    expect(screen.getByTestId("entity-value-textfield")).toBeEnabled();

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //it has the view button enabled
    expect(screen.getByText("View").closest("button")).toBeEnabled();
  });

  test("Clicks Add Profile Button", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);
        case "get-profile":
          return Promise.resolve(mock.data.sampleProfile);
        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //it displays the Add button by default
    expect(screen.getByText("Add").closest("button")).toBeDefined();

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    fireEvent.click(screen.getByText("Add").closest("button"));

    //it calls the get all union list runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-all-unions",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    //it displays the profile schema as default selected
    expect(screen.getByTestId("union-schema-list-picker")).toHaveTextContent(
      "XDM Individual Profile"
    );

    //it calls the get all schemas runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-all-schemas",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //Does not display Find Profile

    //it displays sub heading
    expect(screen.queryByText("Find Profiles")).toBeNull();

    //Displays profile schema form

    //it displays sub heading
    expect(screen.queryByText("Profiles")).toBeDefined();

    //it calls the get schema details runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-schema-details",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod", schemaId: "_xdm.context.profile__union" }
    );

    //it does not displays edit profile button
    expect(screen.queryByText("Edit Profile")).toBeNull();
    // screen.debug();
  });
  test("Find Profile Experience Events", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");

    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);

        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //user selects experience event union
    fireEvent.change(
      screen.getByTestId("schema-side-bar-view").querySelector("select"),
      {
        target: { value: "https://ns.adobe.com/xdm/context/experienceevent" },
      }
    );

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //user clicks the clear button
    fireEvent.click(screen.getByText("View").closest("button"));

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it calls the get experience Events runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-profile-experience-events",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        identityValue: "example@email.com",
        identityNamespace: "EMAIL",
      }
    );

    //it calls the get schema details for experience events schema
    expect(actionWebInvoke).toBeCalledWith(
      "get-schema-details",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        schemaId: "_xdm.context.experienceevent__union",
      }
    );
    //Event List has elements

    //it displays the form
    expect(screen.getByTestId("json-schema-form-view")).toBeDefined();
  });
  test("Changes Form Theme", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);

        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //user selects experience event union
    fireEvent.change(
      screen.getByTestId("schema-side-bar-view").querySelector("select"),
      {
        target: { value: "https://ns.adobe.com/xdm/context/experienceevent" },
      }
    );

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //user clicks the clear button
    fireEvent.click(screen.getByText("View").closest("button"));

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it displays the form
    expect(screen.getByTestId("json-schema-form-view")).toBeDefined();

    //it displays the form in fluent VUI
    expect(screen.getByTestId("fluent-ui-form")).toBeDefined();

    //it has the theme button on the form
    fireEvent.click(
      screen.getByTestId("json-schema-form-theme-button").closest("button")
    );
    //user chooses bootstrap 3
    fireEvent.click(screen.getByText("Bootstrap 3"));
    //it displays the form in bootstrap 3 UI
    expect(screen.getByTestId("core-form")).toBeDefined();

    //it has the theme button on the form
    fireEvent.click(
      screen.getByTestId("json-schema-form-theme-button").closest("button")
    );
    //user chooses bootstrap 4
    fireEvent.click(screen.getByText("Bootstrap 4"));
    //it displays the form in bootstrap 4 UI
    expect(screen.getByTestId("bootstrap-4-form")).toBeDefined();

    //it has the theme button on the form
    fireEvent.click(
      screen.getByTestId("json-schema-form-theme-button").closest("button")
    );
    //user chooses Material UI
    fireEvent.click(screen.getByText("Material UI"));
    //it displays the form in Material UI
    expect(screen.getByTestId("material-ui-form")).toBeDefined();

    //it has the theme button on the form
    fireEvent.click(
      screen.getByTestId("json-schema-form-theme-button").closest("button")
    );
    //user chooses Material UI
    fireEvent.click(screen.getByText("Semantic UI"));
    //it displays the form in Semantic UI
    expect(screen.getByTestId("semantic-ui-form")).toBeDefined();

    await waitFor(() => {
      // screen.debug();
    });
  });

  test("Fails to get schema details", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.reject({ message: "fake-error" });

        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //user selects experience event union
    fireEvent.change(
      screen.getByTestId("schema-side-bar-view").querySelector("select"),
      {
        target: { value: "https://ns.adobe.com/xdm/context/experienceevent" },
      }
    );

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //user clicks the clear button
    fireEvent.click(screen.getByText("View").closest("button"));

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it calls the get experience Events runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-profile-experience-events",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        identityValue: "example@email.com",
        identityNamespace: "EMAIL",
      }
    );

    //it calls the get schema details for experience events schema
    expect(actionWebInvoke).toBeCalledWith(
      "get-schema-details",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        schemaId: "_xdm.context.experienceevent__union",
      }
    );
    //Event List has elements

    //it does not display the form
    expect(screen.queryByTestId("json-schema-form-view")).toBeNull();
  });
  test("Find Profile Union Data", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);
        case "get-profile":
          return Promise.resolve(mock.data.sampleProfile);
        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //user clicks the clear button
    fireEvent.click(screen.getByText("View").closest("button"));

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it calls the get experience Events runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-profile",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        identityValue: "example@email.com",
        identityNamespace: "EMAIL",
      }
    );

    //it calls the get schema details for experience events schema
    expect(actionWebInvoke).toBeCalledWith(
      "get-schema-details",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        schemaId: "_xdm.context.profile__union",
      }
    );
    //Event List has elements

    //it displays the form
    expect(screen.getByTestId("json-schema-form-view")).toBeDefined();

    //it has the theme button on the form
    expect(screen.getByTestId("json-schema-form-theme-button")).toBeDefined();
  });
  test("initial page view with no union schemas", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-schemas":
          return Promise.reject({ message: "fake-error" });
        default:
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    //it displays sub heading
    expect(screen.getByText("Find Profiles")).toBeDefined();

    //it displays the Add button by default
    expect(screen.getByText("Add").closest("button")).toBeDefined();

    //it has the view button disabled
    expect(screen.getByText("View").closest("button")).toBeDisabled();

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it calls the get all schemas runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-all-schemas",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    // it displays an empty union schema drop down
    expect(
      screen.getByTestId("union-schema-list-view").querySelector("select")
    ).toBeEmptyDOMElement();
  });
  test("initial page view with no namespace", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");

    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-identity-namespaces":
          return Promise.reject({ message: "fake-error" });
        default:
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    //it displays the Add button by default
    expect(screen.getByText("Add").closest("button")).toBeDefined();

    //it has the view button disabled
    expect(screen.getByText("View").closest("button")).toBeDisabled();

    //it displays progress circle with getting identity namespaces messages
    expect(screen.getByTestId("namespace-list-progress-circle")).toBeDefined();
    expect(
      screen.getAllByLabelText("Getting Identity Namespaces")
    ).toBeDefined();

    //wait for namespaces to be loaded
    await waitForElementToBeRemoved(
      screen.queryAllByTestId("namespace-list-progress-circle")
    );

    //it displays sub heading
    expect(screen.getByText("Find Profiles")).toBeDefined();

    //it calls the get identity namespaces runtime action once
    expect(actionWebInvoke).toBeCalledWith(
      "get-identity-namespaces",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      { sandboxName: "prod" }
    );

    // it displays an empty namespace drop down
    expect(
      screen.getByTestId("namespace-view").querySelector("select")
    ).toBeEmptyDOMElement();
  });
  test("View Profile with No Experience Events", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.reject({ message: "fake-error" });
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);

        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //user selects experience event union
    fireEvent.change(
      screen.getByTestId("schema-side-bar-view").querySelector("select"),
      {
        target: { value: "https://ns.adobe.com/xdm/context/experienceevent" },
      }
    );

    //it displays the experience event schema
    expect(screen.getByTestId("union-schema-list-picker")).toHaveTextContent(
      "XDM ExperienceEvent"
    );

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //user clicks the clear button
    fireEvent.click(screen.getByText("View").closest("button"));

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it calls the get experience Events runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-profile-experience-events",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        identityValue: "example@email.com",
        identityNamespace: "EMAIL",
      }
    );

    //it calls the get schema details for experience events schema
    expect(actionWebInvoke).toBeCalledWith(
      "get-schema-details",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        schemaId: "_xdm.context.experienceevent__union",
      }
    );

    //Event List is empty

    //it displays the form
    expect(screen.getByTestId("json-schema-form-view")).toBeDefined();

    //it has the theme button on the form
    expect(screen.getByTestId("json-schema-form-theme-button")).toBeDefined();
    // screen.debug();
  });
  test("View Profile with No Profile Data", async () => {
    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-all-datasets":
          return Promise.resolve(mock.data.datasets);
        case "get-identity-namespaces":
          return Promise.resolve(mock.data.identityNamespaces);
        case "get-all-schemas":
          return Promise.resolve(mock.data.schemas);
        case "get-all-data-inlets":
          return Promise.resolve(mock.data.dataInlets);
        case "get-all-unions":
          return Promise.resolve(mock.data.unionSchemas);
        case "get-profile-experience-events":
          return Promise.resolve(mock.data.experienceEvents);
        case "get-schema-details":
          return Promise.resolve(mock.data.experienceEventSchema);
        case "get-profile":
          return Promise.reject({ message: "fake-error" });
        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <ProfileLookupView ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //user selects identity namespace
    fireEvent.change(
      screen.getByTestId("namespace-view").querySelector("select"),
      {
        target: { value: "EMAIL" },
      }
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("entity-value-textfield"),
      "example@email.com"
    );
    expect(screen.getByTestId("entity-value-textfield")).toHaveValue(
      "example@email.com"
    );

    //user clicks the clear button
    fireEvent.click(screen.getByText("View").closest("button"));

    //wait for all progress circles to be removed
    await waitForElementToBeRemoved(screen.queryAllByRole("progressbar"));

    //it calls the get experience Events runtime action
    expect(actionWebInvoke).toBeCalledWith(
      "get-profile",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        identityValue: "example@email.com",
        identityNamespace: "EMAIL",
      }
    );

    //it calls the get schema details for experience events schema
    expect(actionWebInvoke).toBeCalledWith(
      "get-schema-details",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        sandboxName: "prod",
        schemaId: "_xdm.context.profile__union",
      }
    );
    //Event List has elements

    //it displays the form
    expect(screen.getByTestId("json-schema-form-view")).toBeDefined();

    //it has the theme button on the form
    expect(screen.getByTestId("json-schema-form-theme-button")).toBeDefined();
  });
});
