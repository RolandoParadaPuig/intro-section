import { Image } from "antd";
import React from "react";
import { IntroLayoutComponent } from "../introSectionComponent/introLayoutComponent/IntroLayoutComponent";
import "./introSectionContainer.css";
export const IntroSectionContainer = () => {
  return (
    <main className={"container"}>
      <section className={"intro--container"}>
        <IntroLayoutComponent />
      </section>
    </main>
  );
};
