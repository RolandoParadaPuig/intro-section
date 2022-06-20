import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Col, Dropdown, Menu, message, Row } from "antd";
import "./introHeaderComponent.css";
import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

export const IntroHeaderComponent = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const featuresClick = (e) => {
    const featureListElem = document.querySelector("#featureList");
    const classListChildren = e.target.children[0].classList;
    const classList = e.target.classList;
    featureListElem.classList.toggle("header--navigation-display-features");
    classList.toggle("header--navigation-btn-selected");
    classListChildren.toggle("header--iconDown");
    classListChildren.toggle("header--iconUp");
  };
  const companyClick = (e) => {
    const featureListElem = document.querySelector("#companyList");
    const classListChildren = e.target.children[0].classList;
    const classList = e.target.classList;
    featureListElem.classList.toggle("header--navigation-display-company");
    classList.toggle("header--navigation-btn-selected");
    classListChildren.toggle("header--iconDown");
    classListChildren.toggle("header--iconUp");
  };
  const btnMinClick = (e) => {
    setMenuDisplayed(!menuDisplayed);
    const classList = e.target.classList;
    const displayMenu = document.querySelector("#header--navigation-menu");
    displayMenu.classList.toggle("header--navigation-menu--closed");
    displayMenu.classList.toggle("header--navigation-menu");
    console.log(displayMenu);

    classList.toggle("header--btn-line-1");
    classList.toggle("header--btn-line-2");
  };

  return (
    <header className={"header--component"}>
      <div className={"header--logo"} />
      <nav
        id="header--navigation-menu"
        className="header--navigation-menu--closed"
      >
        <ul className={"header--navigation-list"}>
          <li>
            <button
              onClick={featuresClick}
              className={"header--navigation-btn"}
            >
              Features <div className="header--iconDown" />
            </button>
            <ul id="featureList" className={"header--navigation-features-list"}>
              <li>
                <button className="header--navigation-features-btn ">
                  <div className="todo-btn" /> Todo List
                </button>
              </li>
              <li>
                <button className="header--navigation-features-btn ">
                  <div className="calendar-btn" /> Calendar
                </button>
              </li>
              <li>
                <button className="header--navigation-features-btn ">
                  <div className="reminders-btn" /> Reminders
                </button>
              </li>
              <li>
                <button className="header--navigation-features-btn ">
                  <div className="planning-btn" /> Planning
                </button>
              </li>
            </ul>
          </li>
          <li>
            <button onClick={companyClick} className={"header--navigation-btn"}>
              Company <div className="header--iconDown" />
            </button>
            <ul id="companyList" className={"header--navigation-company-list"}>
              <li>
                <button className="header--navigation-company-btn">
                  History
                </button>
              </li>
              <li>
                <button className="header--navigation-company-btn">
                  Our Team
                </button>
              </li>
              <li>
                <button className="header--navigation-company-btn">Blog</button>
              </li>
            </ul>
          </li>
          <li>
            <button className={"header--navigation-btn"}>Careers</button>
          </li>
          <li>
            <button className={"header--navigation-btn"}>About</button>
          </li>
        </ul>
        <ul className={"header--navigation-auth"}>
          <li className="header--navigation-login">
            <button className={"header--navigation-btn login-btn"}>
              Login
            </button>
          </li>
          <button className={"header--navigation-btn register-btn"}>
            Register
          </button>
          <li className="header--navigation-register"></li>
        </ul>
      </nav>
      <button onClick={btnMinClick} className="header--btn-mobile">
        <div className={"header--btn-line-1"} />
      </button>
    </header>
  );
};
