import { Layout } from "antd";
import React from "react";
import { IntroBodyComponent } from "../introBodyComponent/IntroBodyComponent";
import { IntroHeaderComponent } from "../introHeaderComponent/IntroHeaderComponent";
import "./introLayoutComponent.css";
export const IntroLayoutComponent = () => {
  return (
    <section className={"intro--Layout"}>
      <IntroHeaderComponent />
      <IntroBodyComponent />
    </section>
  );
};
