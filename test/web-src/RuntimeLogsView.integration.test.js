import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  act,
} from "@testing-library/react";

import { HashRouter as Router } from "react-router-dom";

import { Provider, defaultTheme } from "@adobe/react-spectrum";
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
import RuntimeLogsView from "../../web-src/src/components/RuntimeLogsView";

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

// used to set height on the listbox so react testing library renders
let offsetWidth, offsetHeight, scrollHeight;
beforeAll(function () {
  offsetWidth = jest
    .spyOn(window.HTMLElement.prototype, "clientWidth", "get")
    .mockImplementation(() => 1000);
  offsetHeight = jest
    .spyOn(window.HTMLElement.prototype, "clientHeight", "get")
    .mockImplementation(() => 1000);
  scrollHeight = jest
    .spyOn(window.HTMLElement.prototype, "scrollHeight", "get")
    .mockImplementation(() => 48);
  jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => cb());
  jest.useFakeTimers();
});
describe("Runtime Page", () => {
  test("initial page view", async () => {
    const promise = Promise.resolve();
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");

    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-activation-list":
          return Promise.resolve(mock.data.aioActivationList);
        case "get-activation-log":
          return Promise.resolve(mock.data.aioActivationLog);
        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <RuntimeLogsView ims={mockIms} />
        </Provider>
      </Router>
    );

    //it shows progressbar with getting the activation list message
    expect(screen.getByTestId("activation-list-progress-circle")).toBeDefined();
    expect(screen.getByLabelText("Getting Activation List")).toBeDefined();

    //wait to get activation list
    await waitForElementToBeRemoved(
      screen.getByTestId("activation-list-progress-circle")
    );

    //displays a heading
    expect(screen.getByText("Runtime Activation Logs")).toBeDefined();

    // it does not show any progressbars and no message of getting sandboxes or getting actions list
    expect(screen.queryAllByRole("progressbar")).toEqual([]);
    expect(screen.queryAllByText("Getting Sandboxes")).toEqual([]);
    expect(screen.queryAllByText("Getting Activation List")).toEqual([]);

    // it has called the get activation list action
    expect(actionWebInvoke).toBeCalledWith(
      "get-activation-list",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {}
    );

    //it has called the Runtime actions twice
    expect(actionWebInvoke).toBeCalledTimes(1);

    // it has cached the response
    expect(setItemSpy).toBeCalledTimes(1);
    const cachedValue = window.sessionStorage.getItem(
      `get-activation-list${JSON.stringify({
        authorization: "Bearer fake-token",
        "x-gw-ims-org-id": "fake-org",
      })}${JSON.stringify({})}`
    );

    //it has cached the activation list response data
    expect(cachedValue).toEqual(JSON.stringify(mock.data.aioActivationList));

    //it displays an activation list box
    expect(screen.getByTestId("activationListBox")).toBeDefined();

    //it displays the text Activation List
    expect(screen.getByText("Activation List")).toBeDefined();

    //it displays 4 activation logs
    expect(screen.getAllByRole("option")).toHaveLength(4);

    //user clicks on first activation log
    fireEvent.click(screen.getAllByRole("option")[0]);

    //it shows progressbar with getting the activation log
    expect(
      screen.getByTestId("activation-log-progress-circle")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Getting Activation Log")).toBeDefined();

    await act(() => promise);

    //it does not display the progress circle
    expect(screen.queryByTestId("activation-log-progress-circle")).toBeNull();
    //it displays the log and result view for the activation ID
    expect(screen.getByTestId("activationLog-view")).toBeDefined();
    expect(screen.getByTestId("activationResult-view")).toBeDefined();
  });

  test("Fails to get activation list", async () => {
    const promise = Promise.resolve();
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");

    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-activation-list":
          return Promise.reject({ message: "fake-error" });
        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <RuntimeLogsView ims={mockIms} />
        </Provider>
      </Router>
    );

    //it shows progressbar with getting the activation list message
    expect(screen.getByTestId("activation-list-progress-circle")).toBeDefined();
    expect(screen.getByLabelText("Getting Activation List")).toBeDefined();

    //wait to get activation list
    await waitForElementToBeRemoved(
      screen.getByTestId("activation-list-progress-circle")
    );

    //displays a heading
    expect(screen.getByText("Runtime Activation Logs")).toBeDefined();

    // it does not show any progressbars and no message of getting sandboxes or getting actions list
    expect(screen.queryAllByRole("progressbar")).toEqual([]);
    expect(screen.queryAllByText("Getting Sandboxes")).toEqual([]);
    expect(screen.queryAllByText("Getting Activation List")).toEqual([]);

    // it has called the get activation list action
    expect(actionWebInvoke).toBeCalledWith(
      "get-activation-list",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {}
    );

    //it has called the Runtime actions twice
    expect(actionWebInvoke).toBeCalledTimes(1);

    // it has not cached the response
    expect(setItemSpy).toBeCalledTimes(0);

    //it does not display an activation list box
    expect(screen.queryByTestId("activationListBox")).toBeNull();

    //it does not display the text Activation List
    expect(screen.queryByTestId("Activation List")).toBeNull();

    //it display the no result message
    expect(screen.getByText("No Activations Found")).toBeDefined();
  });
  test("Fails to get activation log", async () => {
    const promise = Promise.resolve();
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");

    actionWebInvoke.mockImplementation((actionName, headers, params) => {
      switch (actionName) {
        case "get-activation-list":
          return Promise.resolve(mock.data.aioActivationList);
        case "get-activation-log":
          return Promise.reject({ message: "fake-error" });
        default:
          console.log(`actionName = ${actionName}`);
          return Promise.reject(new Error("not found"));
      }
    });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <RuntimeLogsView ims={mockIms} />
        </Provider>
      </Router>
    );

    //it waits to get activation list
    await waitForElementToBeRemoved(
      screen.getByTestId("activation-list-progress-circle")
    );

    //user clicks on first activation log
    fireEvent.click(screen.getAllByRole("option")[0]);

    //it shows progressbar with getting the activation log
    expect(
      screen.getByTestId("activation-log-progress-circle")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Getting Activation Log")).toBeDefined();

    await act(() => promise);

    //it does not display the progress circle
    expect(screen.queryByTestId("activation-log-progress-circle")).toBeNull();

    //it  display the progress circle
    expect(screen.queryByTestId("activation-log-progress-circle")).toBeNull();

    //it does not displays the log and result view for the activation ID
    expect(screen.queryByTestId("activationLog-view")).toBeNull();
    expect(screen.queryByTestId("activationResult-view")).toBeNull();

    //it display the no result message
    expect(screen.getByText("No Activation Logs Found")).toBeDefined();
  });
});
