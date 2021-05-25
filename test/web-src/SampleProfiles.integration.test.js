import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
  waitForElementToBeRemoved,
  within,
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
import SampleProfiles from "../../web-src/src/components/SampleProfiles";

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

describe("SampleProfiles Page", () => {
  test("initial page view", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <SampleProfiles ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );
  });

  test("errors out while submitting preview job", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke.mockRejectedValueOnce({ message: "fake-error" });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <SampleProfiles ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    // user clicks get sample profiles
    fireEvent.click(screen.getByText("Get Sample Profiles").closest("button"));

    //it displays progress circle with getting sandboxes message
    expect(screen.getByTestId("preview-job-progress-circle")).toBeDefined();
    expect(screen.getAllByLabelText("Submitting Preview Job")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "post-preview-job",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        expression: "testProfile = true  ",
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(1);

    await waitForElementToBeRemoved(
      screen.getByTestId("preview-job-progress-circle")
    );
    expect(
      screen.getByText("Error encountered while submitting preview job")
    ).toBeDefined();

    expect(screen.getByText("fake-error")).toBeDefined();
  });

  test("errors out while getting preview job results", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke
      .mockResolvedValueOnce(mock.data.postPreviewJob) // submit job
      .mockRejectedValueOnce({ message: "fake-error" });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <SampleProfiles ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    // user clicks get sample profiles
    fireEvent.click(screen.getByText("Get Sample Profiles").closest("button"));

    //it displays progress circle with getting sandboxes message
    expect(screen.getByTestId("preview-job-progress-circle")).toBeDefined();
    expect(screen.getAllByLabelText("Submitting Preview Job")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "post-preview-job",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        expression: "testProfile = true  ",
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(1);

    //it waits for preview job to respond
    await waitForElementToBeRemoved(
      screen.getByTestId("preview-job-progress-circle")
    );

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "get-preview-job-results",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        limit: 100,
        offset: 0,
        previewJobID: mock.data.postPreviewJob.previewId,
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(2);

    expect(
      screen.getByText("Error encountered while getting preview job results")
    ).toBeDefined();

    expect(screen.getByText("fake-error")).toBeDefined();
  });

  test("errors out while getting profile from preview job results", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke
      .mockResolvedValueOnce(mock.data.postPreviewJob) // submit job
      .mockResolvedValueOnce(mock.data.previewResult) //get 1st page results from job
      .mockRejectedValueOnce({ message: "fake-error" });

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <SampleProfiles ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    // user clicks get sample profiles
    fireEvent.click(screen.getByText("Get Sample Profiles").closest("button"));

    //it displays progress circle with getting sandboxes message
    expect(screen.getByTestId("preview-job-progress-circle")).toBeDefined();
    expect(screen.getAllByLabelText("Submitting Preview Job")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "post-preview-job",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        expression: "testProfile = true  ",
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(1);

    await waitFor(() => {
      expect(screen.queryByTestId("preview-job-progress-circle")).toBeNull();
      //it calls the get sandboxes runtime action once
      expect(actionWebInvoke).toHaveBeenLastCalledWith(
        "get-preview-job-results",
        { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
        {
          limit: 100,
          offset: 0,
          previewJobID: mock.data.postPreviewJob.previewId,
          sandboxName: "prod",
        }
      );
      expect(actionWebInvoke).toBeCalledTimes(2);
    });

    await waitFor(() => {
      expect(
        screen.queryByTestId("preview-job-results-progress-circle")
      ).toBeNull();
      //it calls the get sandboxes runtime action once
      expect(actionWebInvoke).toHaveBeenLastCalledWith(
        "get-profile-list",
        { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
        {
          sandboxName: "prod",
          entityValues: [
            "GhxXokFpY3JtaWQ6gusTfg",
            "GhxXokFpY3JtaWQ6guv-VA",
            "GhxXokFpY3JtaWQ6gsvkRA",
            "GhxXokFpY3JtaWQ6gghLEg",
            "GhxXokFpY3JtaWQ6gs2zEQ",
          ],
          fields: ["identities", "person"],
        }
      );

      // it has make 3 runtime calls.
      expect(actionWebInvoke).toBeCalledTimes(3);
    });

    expect(
      screen.getByText(
        "Error encountered while getting sample profiles from the preview job results"
      )
    ).toBeDefined();

    expect(screen.getByText("fake-error")).toBeDefined();
  });

  test("getting sample profiles", async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    actionWebInvoke
      .mockResolvedValueOnce(mock.data.postPreviewJob) // submit job
      .mockResolvedValueOnce(mock.data.previewResult) //get 1st page results from job
      .mockResolvedValueOnce(mock.data.profileList) // get list of profiles
      .mockResolvedValueOnce(mock.data.previewResult) //next page call (page 2)
      .mockResolvedValueOnce(mock.data.previewResult) //next page call (page 15)
      .mockResolvedValueOnce(mock.data.previewResult); //next page call (page 90)

    const { container } = render(
      <Router>
        <Provider theme={defaultTheme} colorScheme="light">
          <SampleProfiles ims={mockIms} sandboxName="prod" />
        </Provider>
      </Router>
    );

    //displays a heading
    expect(screen.getByText("Profiles")).toBeDefined();

    // it does not show any progressbars and no message of getting sandboxes or getting actions list
    expect(screen.queryAllByRole("progressbar")).toEqual([]);
    expect(screen.queryAllByText("Getting Sandboxes")).toEqual([]);
    expect(screen.queryAllByText("Getting Activation List")).toEqual([]);

    //it has called the Runtime actions twice
    expect(actionWebInvoke).toBeCalledTimes(0);

    const filter = screen.getByTestId("sample-profile-filters");
    expect(screen.getByTestId("sample-profile-filters")).toBeDefined();

    //
    expect(screen.getByText("Test Profiles")).toBeDefined();
    expect(screen.getByTestId("filter-test-profile-checkbox")).toBeDefined();

    // has two variant buttons
    expect(screen.getByTestId("filter-variant-button-1")).toBeDefined();
    expect(screen.getByTestId("filter-variant-button-2")).toBeDefined();

    // logic variant buttons should be And by default
    expect(screen.getAllByText("And")).toHaveLength(2);
    expect(screen.queryAllByText("Or")).toHaveLength(0);

    //user clicks first logic button thrice
    fireEvent.click(screen.getByTestId("filter-variant-button-1"));
    fireEvent.click(screen.getByTestId("filter-variant-button-1"));
    fireEvent.click(screen.getByTestId("filter-variant-button-1"));

    // wait for dom to load
    await waitFor(() => {
      //both logic buttons have toggled.
      expect(screen.getAllByText("Or")).toHaveLength(2);
      expect(screen.queryAllByText("And")).toHaveLength(0);
    });

    //click second logic button twice
    fireEvent.click(screen.getByTestId("filter-variant-button-2"));
    fireEvent.click(screen.getByTestId("filter-variant-button-2"));
    fireEvent.click(screen.getByTestId("filter-variant-button-2"));

    // wait for dom to load
    await waitFor(() => {
      //both logic buttons have toggled.
      expect(screen.getAllByText("And")).toHaveLength(2);
      expect(screen.queryAllByText("Or")).toHaveLength(0);
    });
    // user enters first name
    userEvent.type(
      screen.getByTestId("filter-first-name-textfield"),
      "first name"
    );
    expect(screen.getByTestId("filter-first-name-textfield")).toHaveValue(
      "first name"
    );

    // user enters first name
    userEvent.type(
      screen.getByTestId("filter-last-name-textfield"),
      "last name"
    );
    expect(screen.getByTestId("filter-last-name-textfield")).toHaveValue(
      "last name"
    );

    // user un checks test profiles
    userEvent.click(screen.getByTestId("filter-test-profile-checkbox"));
    expect(
      screen.getByTestId("filter-test-profile-checkbox")
    ).not.toBeChecked();

    // user clicks get sample profiles
    fireEvent.click(screen.getByText("Get Sample Profiles").closest("button"));

    //it displays progress circle with getting sandboxes message
    expect(screen.getByTestId("preview-job-progress-circle")).toBeDefined();
    expect(screen.getAllByLabelText("Submitting Preview Job")).toBeDefined();

    //it calls the get sandboxes runtime action once
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "post-preview-job",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        expression:
          '1 = 1  and person.name.firstName.contains("first name", false)  and  person.name.lastName.contains("last name", false)',
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(1);

    // it waits from preview job to return
    await waitFor(() => {
      expect(screen.queryByTestId("preview-job-progress-circle")).toBeNull();
      expect(
        screen.getByTestId("preview-job-results-progress-circle")
      ).toBeDefined();
      expect(
        screen.getAllByLabelText("Getting Preview Job Results")
      ).toBeDefined();

      //it calls the get sandboxes runtime action once
      expect(actionWebInvoke).toHaveBeenLastCalledWith(
        "get-preview-job-results",
        { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
        {
          limit: 100,
          offset: 0,
          previewJobID: mock.data.postPreviewJob.previewId,
          sandboxName: "prod",
        }
      );
      expect(actionWebInvoke).toBeCalledTimes(2);
    });

    // it waits from preview job results to return
    await waitFor(() => {
      // calls the runtime action with the right parameters
      expect(
        screen.queryByTestId("preview-job-results-progress-circle")
      ).toBeNull();
      expect(actionWebInvoke).toHaveBeenLastCalledWith(
        "get-profile-list",
        { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
        {
          sandboxName: "prod",
          entityValues: [
            "GhxXokFpY3JtaWQ6gusTfg",
            "GhxXokFpY3JtaWQ6guv-VA",
            "GhxXokFpY3JtaWQ6gsvkRA",
            "GhxXokFpY3JtaWQ6gghLEg",
            "GhxXokFpY3JtaWQ6gs2zEQ",
          ],
          fields: ["identities", "person"],
        }
      );

      // it has make 3 runtime calls.
      expect(actionWebInvoke).toBeCalledTimes(3);

      //   screen.getByRole("");
    });

    // it gets a profile grid and has 5 headings for 5 profiles.
    let profileList = screen.getByTestId("profiles-grid");
    const { getAllByRole } = within(profileList);
    let items = getAllByRole("heading");
    expect(items.length).toBe(5);

    // has displayed next and previous buttons
    expect(screen.getByLabelText("next")).toBeInTheDocument();
    expect(screen.getByLabelText("previous")).toBeInTheDocument();

    // the previous button is disabled and next button is enabled
    expect(screen.getByLabelText("next").closest("button")).toBeEnabled();
    expect(screen.getByLabelText("previous").closest("button")).toBeDisabled();

    //it has page 1 displayed in the text field
    expect(screen.getByTestId("current-page-textfield")).toHaveValue("1");

    //it has the correct number of pages displayed
    expect(screen.getByTestId("total-pages-text")).toHaveTextContent(
      `of ${
        Math.ceil(mock.data.previewResult.previewSampledResultsCount) / 100
      } Pages`
    );

    //user press next button
    fireEvent.click(screen.getByLabelText("next").closest("button"));

    // it updates the current page to 2
    expect(screen.getByTestId("current-page-textfield")).toHaveValue("2");

    //it displays the progress circle while loading
    expect(
      screen.getByTestId("preview-job-results-progress-circle")
    ).toBeDefined();
    expect(
      screen.getAllByLabelText("Getting Preview Job Results")
    ).toBeDefined();

    // screen.getByRole("");

    // it waits from preview job results 2nd page to load
    await waitForElementToBeRemoved(
      screen.getByTestId("preview-job-results-progress-circle")
    );

    //it calls gets preview job results offset by 100
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "get-preview-job-results",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        limit: 100,
        offset: 100,
        previewJobID: mock.data.postPreviewJob.previewId,
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(4);

    //user press previous button
    fireEvent.click(screen.getByLabelText("previous").closest("button"));

    // it updates the current page to 1
    expect(screen.getByTestId("current-page-textfield")).toHaveValue("1");

    // user enters a value in current page text box
    userEvent.type(screen.getByTestId("current-page-textfield"), "5");
    expect(screen.getByTestId("current-page-textfield")).toHaveValue("15");

    //it displays the progress circle while loading
    expect(
      screen.getByTestId("preview-job-results-progress-circle")
    ).toBeDefined();
    expect(
      screen.getAllByLabelText("Getting Preview Job Results")
    ).toBeDefined();

    // screen.getByRole("");

    // it waits from preview job results 2nd page to load
    await waitForElementToBeRemoved(
      screen.getByTestId("preview-job-results-progress-circle")
    );

    //it calls gets preview job results offset by 100
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "get-preview-job-results",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        limit: 100,
        offset: 1500,
        previewJobID: mock.data.postPreviewJob.previewId,
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(5);

    // user enters a value in current page text box
    fireEvent.change(screen.getByTestId("current-page-textfield"), {
      target: {
        value: `${
          Math.ceil(mock.data.previewResult.previewSampledResultsCount) / 100
        }`,
      },
    });

    expect(screen.getByTestId("current-page-textfield")).toHaveValue(
      `${Math.ceil(mock.data.previewResult.previewSampledResultsCount) / 100}`
    );

    // it waits from preview job results last page to load
    await waitForElementToBeRemoved(
      screen.getByTestId("preview-job-results-progress-circle")
    );

    //it calls gets preview job results offset by 100
    expect(actionWebInvoke).toHaveBeenLastCalledWith(
      "get-preview-job-results",
      { authorization: "Bearer fake-token", "x-gw-ims-org-id": "fake-org" },
      {
        limit: 100,
        offset: 9000,
        previewJobID: mock.data.postPreviewJob.previewId,
        sandboxName: "prod",
      }
    );
    expect(actionWebInvoke).toBeCalledTimes(6);

    //it disables next button when on last page
    expect(screen.getByLabelText("next").closest("button")).toBeDisabled();
    expect(screen.getByLabelText("previous").closest("button")).toBeEnabled();
  });
});
