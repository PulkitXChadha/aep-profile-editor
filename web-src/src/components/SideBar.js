/*
 * <license header>
 */

import React from "react";
import { NavLink } from "react-router-dom";
import {
  ListBox,
  ProgressCircle,
  Item,
  Text,
  ActionButton,
  View,
  Grid,
  Section,
  Flex,
  Heading,
  Divider,
} from "@adobe/react-spectrum";
import HomeIcon from "@spectrum-icons/workflow/Home";
import ProfileIcon from "@spectrum-icons/workflow/RealTimeCustomerProfile";
import TestProfileIcon from "@spectrum-icons/workflow/TestProfile";
import DocumentIcon from "@spectrum-icons/workflow/Document";
import ImportIcon from "@spectrum-icons/workflow//Import";
function SideBar(props) {
  return (
    <ul className="SideNav">
      <li className="SideNav-item">
        <NavLink
          className="SideNav-itemLink"
          activeClassName="is-selected"
          aria-current="page"
          exact
          to="/"
        >
          <Flex direction="row" gap="size-100" alignItems="center">
            <HomeIcon size="S" />
            <Text>Home</Text>
          </Flex>
        </NavLink>
      </li>
      {props.isSandboxSelected && (
        <li className="SideNav-item">
          <NavLink
            className="SideNav-itemLink"
            activeClassName="is-selected"
            aria-current="page"
            exact
            to="/profile"
          >
            <Flex direction="row" gap="size-100" alignItems="center">
              <ProfileIcon size="S" />
              <Text>Profile Lookup</Text>
            </Flex>
          </NavLink>
        </li>
      )}
      {props.isSandboxSelected && (
        <li className="SideNav-item">
          <NavLink
            className="SideNav-itemLink"
            activeClassName="is-selected"
            aria-current="page"
            exact
            to="/testProfiles"
          >
            <Flex direction="row" gap="size-100" alignItems="center">
              <TestProfileIcon size="S" />
              <Text>Test Profiles</Text>
            </Flex>
          </NavLink>
        </li>
      )}
      <li className="SideNav-item">
        <NavLink
          className="SideNav-itemLink"
          activeClassName="is-selected"
          aria-current="page"
          to="/about"
        >
          <Flex direction="row" gap="size-100" alignItems="center">
            <DocumentIcon size="S" />
            <Text>About</Text>
          </Flex>
        </NavLink>
      </li>
    </ul>
  );
}

export default SideBar;
