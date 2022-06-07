import { Button, Col, Dropdown, Row } from "antd";
import "./introHeaderComponent.css";
import { CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";
export const IntroHeaderComponent = () => {
  const [toggleArrowF, setToggleArrowF] = useState(false);
  const [toggleArrowC, setToggleArrowC] = useState(false);
  const onEnterF = () => {
    setToggleArrowF(!toggleArrowF);
  };
  const onEnterC = () => {
    setToggleArrowC(!toggleArrowC);
  };
  const btnClick = (e) => {
    const classList = e.target.classList;
    classList.toggle("header--btn-line-1");
    classList.toggle("header--btn-line-2");
    console.log(classList);
  };
  return (
    <header className={"header--component"}>
      <Row justify="space-between">
        <Col align="center" xs={4}>
          <div className={"header--logo"} />
        </Col>
        <Col align="center" xs={0}>
          <nav className={"header--navigation-menu"}>
            <button
              type="link"
              onMouseEnter={onEnterF}
              onMouseLeave={onEnterF}
              className={"header--navigation-btn"}
            >
              Features <div className="header--iconDown" />
              <div className="header--iconUp" />
            </button>
            <button
              type="link"
              onMouseEnter={onEnterC}
              onMouseLeave={onEnterC}
              className={"header--navigation-btn"}
            >
              Company{" "}
              {!toggleArrowC ? (
                <div className="header--iconDown" />
              ) : (
                <div className="header--iconUp" />
              )}
            </button>
            <button type="link" className={"header--navigation-btn"}>
              Careers
            </button>
            <button type="link" className={"header--navigation-btn"}>
              About
            </button>
          </nav>
        </Col>
        <Col align="center" xs={0}>
          <div className={"header--navigation-auth"}>
            <button type="link" className={"header--navigation-btn"}>
              Login
            </button>
            <button className={"header--navigation-btn register"}>
              Register
            </button>
          </div>
        </Col>
        <Col xs={2}>
          <button onClick={btnClick} className="header--btn-mobile">
            <div className={"header--btn-line-1"} />
          </button>
        </Col>
      </Row>
    </header>
  );
};
