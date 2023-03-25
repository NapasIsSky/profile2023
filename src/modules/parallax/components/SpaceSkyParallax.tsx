import React from "react";

import Style from "@/styles/SpaceSkyParallax.module.css";
import { CloudLeftIcon, CloudRigthIcon, MoonIcon, SuturnIcon } from "@/components/icon";

interface ISpaceSkyParallax {}

const SpaceSkyParallax: React.FC<ISpaceSkyParallax> = (props) => {
  const {} = props;
  return (
    <div className={Style.spaceSkyBg}>
      <SuturnIcon />
      <MoonIcon className={Style.moon} />
      <CloudLeftIcon className={Style.cloudLeft} />
      <CloudRigthIcon className={Style.cloudRight} />
    </div>
  );
};

export default SpaceSkyParallax;
