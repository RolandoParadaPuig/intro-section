import { Image } from "antd";
import React from "react";
import { IntroHeaderComponent } from "../introSectionComponent/IntroHeaderComponent";
import { IntroLayoutComponent } from "../introSectionComponent/IntroLayoutComponent";
import "./introSectionContainer.css";
export const IntroSectionContainer = () => {
  return (
    <main className={"container"}>
      <section className={"chart--container"}>
        <IntroLayoutComponent />
      </section>
    </main>
  );
};
