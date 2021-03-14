/*
 * <license header>
 */

import React from "react";
import { NavLink } from "react-router-dom";
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
          Home
        </NavLink>
      </li>
      {props.isSandboxSelected && (
        <li className="SideNav-item">
          <NavLink
            className="SideNav-itemLink"
            activeClassName="is-selected"
            aria-current="page"
            exact
            to="/unionSchema"
          >
            Union Schema
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
            to="/profile"
          >
            Profile Lookup
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
            Test Profiles
          </NavLink>
        </li>
      )}
      <li className="SideNav-item">
        <NavLink
          className="SideNav-itemLink"
          activeClassName="is-selected"
          aria-current="page"
          to="/actions"
        >
          Your App Actions
        </NavLink>
      </li>
      <li className="SideNav-item">
        <NavLink
          className="SideNav-itemLink"
          activeClassName="is-selected"
          aria-current="page"
          to="/about"
        >
          About Project Firefly Apps
        </NavLink>
      </li>
    </ul>
  );
}

export default SideBar;
