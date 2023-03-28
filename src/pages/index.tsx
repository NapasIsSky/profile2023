import React from "react";

import { CloudLeftIcon, CloudRigthIcon, MoonIcon, SuturnIcon } from "@/components/icon";

import Style from "@/styles/SpaceSkyParallax.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <section>
        <div className={Style.spaceSkyBg}>
          <SuturnIcon />
          <MoonIcon className={Style.moon} />
          <CloudLeftIcon className={Style.cloudLeft} />
          <CloudRigthIcon className={Style.cloudRight} />
        </div>
      </section>
    </React.Fragment>
  );
}
