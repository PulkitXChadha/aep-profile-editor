import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

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
import App from "../../web-src/src/components/App";

const onSelectionChange = jest.fn();
const mockRuntime = { on: () => {} };
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

describe("App Page", () => {
  test("initial home page view", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke.mockResolvedValueOnce(mock.data.sandboxes);

    const { container, asFragment } = render(
      <App
        runtime={mockRuntime}
        ims={mockIms}
        onSelectionChange={onSelectionChange}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    // it does not display a prompt to select sandbox
    expect(screen.queryByText("Select a Sandbox")).toBeNull();

    //it displays progress circle with getting sandboxes message
    expect(screen.getAllByRole("progressbar")).toBeDefined();
    expect(screen.getAllByLabelText("Getting Sandboxes")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toBeCalledWith(
      "get-sandboxes",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {}
    );
    expect(actionWebInvoke).toBeCalledTimes(1);
    //it displays has 3 links on the page
    expect(screen.getAllByRole("link")).toHaveLength(3);

    //it displays sidebar with 3 items
    expect(container.getElementsByClassName("SideNav").length).toBe(1);
    expect(container.getElementsByClassName("SideNav-item").length).toBe(3);
    expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(3);

    //it has a link to the about page
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "#/about"
    );
    //it has a link to the home page
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "#/");

    //it has a link to the runtime logs page
    expect(screen.getByText("Runtime Logs").closest("a")).toHaveAttribute(
      "href",
      "#/runtimeLogs"
    );

    //wait for response from get sandboxes runtime action
    await waitFor(() => {
      // it has cached the response
      expect(setItemSpy).toBeCalledTimes(1);
      const cachedValue = window.sessionStorage.getItem(
        `get-sandboxes${JSON.stringify({
          authorization: "Bearer fake-token",
          "x-gw-ims-org-id": "fake-org",
        })}${JSON.stringify({})}`
      );

      //it has cached the response data
      expect(cachedValue).toEqual(JSON.stringify(mock.data.sandboxes));

      //it does not display the progress circle
      expect(screen.queryByRole("progressbar")).toBeNull();
      expect(screen.queryByText("Getting Sandboxes")).toBeNull();

      //it now displays the sandbox picker
      expect(screen.getByRole("button")).toBeDefined();
      expect(screen.getByText("select a sandbox")).toBeDefined();

      //it now displays a heading and prompt to select sandbox
      expect(screen.getAllByRole("heading")).toBeDefined();
      expect(screen.getByText("Select a Sandbox")).toBeDefined();

      //it displays sidebar with 3 items
      expect(container.getElementsByClassName("SideNav").length).toBe(1);
      expect(container.getElementsByClassName("SideNav-item").length).toBe(3);
      expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(
        3
      );

      //it has a link to the about page
      expect(screen.getByText("About").closest("a")).toHaveAttribute(
        "href",
        "#/about"
      );
      //it has a link to the home page
      expect(screen.getByText("Home").closest("a")).toHaveAttribute(
        "href",
        "#/"
      );

      //it has a link to the runtime logs page
      expect(screen.getByText("Runtime Logs").closest("a")).toHaveAttribute(
        "href",
        "#/runtimeLogs"
      );
    });
  });

  test("initial home page view - without first-name", async () => {
    const mockIms = {
      token: "fake-token",
      org: "fake-org",
      profile: {},
    };
    actionWebInvoke.mockResolvedValueOnce(mock.data.sandboxes);
    const { asFragment } = render(
      <App
        runtime={mockRuntime}
        ims={mockIms}
        onSelectionChange={onSelectionChange}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    //wait for response from get sandboxes runtime action
    await waitFor(() => {
      //it does not display the progress circle
      expect(screen.queryByRole("progressbar")).toBeNull();
      expect(screen.queryByText("Getting Sandboxes")).toBeNull();
      expect(
        screen.getByText("Welcome to AEP Profile Editor!")
      ).toBeInTheDocument();
    });
  });

  test("initial home page view - sandbox list request errors", async () => {
    actionWebInvoke.mockRejectedValueOnce("fake-error");
    const { asFragment } = render(
      <App
        runtime={mockRuntime}
        ims={mockIms}
        onSelectionChange={onSelectionChange}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    //it displays progress circle with getting sandboxes message
    expect(screen.getAllByRole("progressbar")).toBeDefined();
    expect(screen.getAllByLabelText("Getting Sandboxes")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toBeCalledWith(
      "get-sandboxes",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {}
    );
    expect(actionWebInvoke).toBeCalledTimes(1);

    //wait for response from get sandboxes runtime action
    await waitFor(() => {
      //it does not display the progress circle
      expect(screen.queryByRole("progressbar")).toBeNull();
      expect(screen.queryByText("Getting Sandboxes")).toBeNull();
    });

    //wait for response from get sandboxes runtime action
    await waitFor(() => {
      expect(
        screen.getByText("Error encountered while getting Sandbox")
      ).toBeDefined();
    });
  });

  test("home page view - post sandbox selection", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke.mockResolvedValueOnce(mock.data.sandboxes);

    const { container, asFragment } = render(
      <App
        runtime={mockRuntime}
        ims={mockIms}
        onSelectionChange={onSelectionChange}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    // it does not display a prompt to select sandbox
    expect(screen.queryByText("Select a Sandbox")).toBeNull();

    //it displays progress circle with getting sandboxes message
    expect(screen.getAllByRole("progressbar")).toBeDefined();
    expect(screen.getAllByLabelText("Getting Sandboxes")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toBeCalledWith(
      "get-sandboxes",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {}
    );
    expect(actionWebInvoke).toBeCalledTimes(1);
    //it displays has 3 links on the page
    expect(screen.getAllByRole("link")).toHaveLength(3);

    //it displays sidebar with 3 items
    expect(container.getElementsByClassName("SideNav").length).toBe(1);
    expect(container.getElementsByClassName("SideNav-item").length).toBe(3);
    expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(3);

    //it has a link to the about page
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "#/about"
    );
    //it has a link to the home page
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "#/");

    //it has a link to the runtime logs page
    expect(screen.getByText("Runtime Logs").closest("a")).toHaveAttribute(
      "href",
      "#/runtimeLogs"
    );

    //wait for response from get sandboxes runtime action
    await waitFor(() => {
      // it has cached the response
      expect(setItemSpy).toBeCalledTimes(1);
      const cachedValue = window.sessionStorage.getItem(
        `get-sandboxes${JSON.stringify({
          authorization: "Bearer fake-token",
          "x-gw-ims-org-id": "fake-org",
        })}${JSON.stringify({})}`
      );

      //it has cached the response data
      expect(cachedValue).toEqual(JSON.stringify(mock.data.sandboxes));

      //it does not display the progress circle
      expect(screen.queryByRole("progressbar")).toBeNull();
      expect(screen.queryByText("Getting Sandboxes")).toBeNull();

      //it now displays the sandbox picker
      expect(screen.getByRole("button")).toBeDefined();
      expect(screen.getByText("select a sandbox")).toBeDefined();

      //it now displays a heading and prompt to select sandbox
      expect(screen.getAllByRole("heading")).toBeDefined();
      expect(screen.getByText("Select a Sandbox")).toBeDefined();

      //it displays sidebar with 3 items
      expect(container.getElementsByClassName("SideNav").length).toBe(1);
      expect(container.getElementsByClassName("SideNav-item").length).toBe(3);
      expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(
        3
      );

      //it has a link to the about page
      expect(screen.getByText("About").closest("a")).toHaveAttribute(
        "href",
        "#/about"
      );
      //it has a link to the home page
      expect(screen.getByText("Home").closest("a")).toHaveAttribute(
        "href",
        "#/"
      );

      //it has a link to the runtime logs page
      expect(screen.getByText("Runtime Logs").closest("a")).toHaveAttribute(
        "href",
        "#/runtimeLogs"
      );
    });

    //select a sandbox from the drop down
    fireEvent.change(container.querySelector("select"), {
      target: { value: "prod" },
    });

    // wait for the dom to change
    await waitFor(() => {
      //it not display a prompt to select sandbox

      expect(screen.queryAllByText("Select a Sandbox")).toEqual([]);

      //it displays sidebar with 3 items
      expect(container.getElementsByClassName("SideNav").length).toBe(1);
      expect(container.getElementsByClassName("SideNav-item").length).toBe(5);
      expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(
        5
      );

      //it has a link to the about page
      expect(screen.getByText("About").closest("a")).toHaveAttribute(
        "href",
        "#/about"
      );
      //it has a link to the home page
      expect(screen.getByText("Home").closest("a")).toHaveAttribute(
        "href",
        "#/"
      );

      //it has a link to the runtime logs page
      expect(screen.getByText("Sample Profiles").closest("a")).toHaveAttribute(
        "href",
        "#/sampleProfiles"
      );

      //it has a link to the runtime logs page
      expect(screen.getByText("Profile Lookup").closest("a")).toHaveAttribute(
        "href",
        "#/profile"
      );
    });
  });
});

describe("App - About Page", () => {
  test("initial about page view", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke.mockResolvedValueOnce(mock.data.sandboxes);

    const { container, asFragment } = render(
      <App
        runtime={mockRuntime}
        ims={mockIms}
        onSelectionChange={onSelectionChange}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    //it displays progress circle with getting sandboxes message
    expect(screen.getAllByRole("progressbar")).toBeDefined();
    expect(screen.getAllByLabelText("Getting Sandboxes")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toBeCalledWith(
      "get-sandboxes",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {}
    );
    expect(actionWebInvoke).toBeCalledTimes(1);

    //it displays has 3 links on the page
    expect(screen.getAllByRole("link")).toHaveLength(3);

    //it displays sidebar with 3 items
    expect(container.getElementsByClassName("SideNav").length).toBe(1);
    expect(container.getElementsByClassName("SideNav-item").length).toBe(3);
    expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(3);

    //it has a link to the about page
    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "#/about"
    );
    //it has a link to the home page
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "#/");

    //it has a link to the runtime logs page
    expect(screen.getByText("Runtime Logs").closest("a")).toHaveAttribute(
      "href",
      "#/runtimeLogs"
    );

    //wait for response from get sandboxes runtime action
    await waitFor(() => {
      // it has cached the response
      expect(setItemSpy).toBeCalledTimes(1);
      const cachedValue = window.sessionStorage.getItem(
        `get-sandboxes${JSON.stringify({
          authorization: "Bearer fake-token",
          "x-gw-ims-org-id": "fake-org",
        })}${JSON.stringify({})}`
      );

      //it has cached the response data
      expect(cachedValue).toEqual(JSON.stringify(mock.data.sandboxes));

      //it does not display the progress circle
      expect(screen.queryByRole("progressbar")).toBeNull();
      expect(screen.queryByText("Getting Sandboxes")).toBeNull();

      //it now displays the sandbox picker
      expect(screen.getByRole("button")).toBeDefined();
      expect(screen.getByText("select a sandbox")).toBeDefined();

      //it now displays a heading and prompt to select sandbox
      expect(screen.getAllByRole("heading")).toBeDefined();
      expect(screen.getByText("Select a Sandbox")).toBeDefined();

      //it displays sidebar with 3 items
      expect(container.getElementsByClassName("SideNav").length).toBe(1);
      expect(container.getElementsByClassName("SideNav-item").length).toBe(3);
      expect(container.getElementsByClassName("SideNav-itemLink").length).toBe(
        3
      );

      //it has a link to the about page
      expect(screen.getByText("About").closest("a")).toHaveAttribute(
        "href",
        "#/about"
      );
      //it has a link to the home page
      expect(screen.getByText("Home").closest("a")).toHaveAttribute(
        "href",
        "#/"
      );

      //it has a link to the runtime logs page
      expect(screen.getByText("Runtime Logs").closest("a")).toHaveAttribute(
        "href",
        "#/runtimeLogs"
      );
    });

    //user clicks the runtime logs page
    fireEvent.click(screen.getByText("About").closest("a"));

    //wait to get activation list
    await waitFor(() => {
      //displays a heading
      expect(
        screen.getByText("Useful documentation for your app")
      ).toBeDefined();

      // it does not show any progressbars and no message of getting sandboxes or getting actions list
      expect(screen.queryAllByRole("progressbar")).toEqual([]);
      expect(screen.queryAllByText("Getting Sandboxes")).toEqual([]);
      expect(screen.queryAllByText("Getting Activation List")).toEqual([]);

      //it has called the Runtime actions twice
      expect(actionWebInvoke).toBeCalledTimes(1);
    });
  });
});
