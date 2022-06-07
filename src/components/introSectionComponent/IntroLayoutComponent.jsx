import { Layout } from "antd";
import React from "react";
import { IntroBodyComponent } from "./IntroBodyComponent";
import { IntroHeaderComponent } from "./IntroHeaderComponent";
import "./introLayoutComponent.css";
export const IntroLayoutComponent = () => {
  return (
    <section className={"intro--Layout"}>
      <IntroHeaderComponent />
      <IntroBodyComponent />
    </section>
  );
};
