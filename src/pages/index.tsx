import React from "react";

import { CloudLeftIcon, CloudRigthIcon, Logo, MoonIcon, SuturnIcon } from "@/components/icon";
import { Stars } from "@/components/wallpaper";

import Style from "@/styles/SpaceSkyParallax.module.css";

interface IHardSkills {
  img: string;
  label: string;
}

const HARD_SKILLS: IHardSkills[] = [
  {
    img: "/images/JS-icon.png",
    label: "Javascript",
  },
  {
    img: "/images/TS-icon.png",
    label: "Typescript",
  },
];

export default function Home() {
  const renderNameAndPosition = () => {
    return (
      <div className={Style.name_and_position}>
        <h1 className="uppercase white-text">{"Napas Kavalee"}</h1>
        <h2 className="uppercase blue-text">{"front-end developer"}</h2>
      </div>
    );
  };

  return (
    <div className={Style.space_bg}>
      <div className={Style.sky_bg}>
        <Stars className={Style.stars_1} />
        <SuturnIcon className={Style.suturn} />
        <div className={Style.nepjune} />
        {renderNameAndPosition()}
        <MoonIcon className={Style.moon} />
        <div className={Style.clouds}>
          <CloudLeftIcon className={Style.cloud_left} />
          <CloudRigthIcon className={Style.cloud_right} />
        </div>

        <div className="flex">
          <div className="md:flex-1" />
          <div className="px-4 md:p-0 md:flex-4">
            <section className={Style.section_about}>
              <h2 className="uppercase white-text text-center">{"about"}</h2>
              <div className="bg-neutral-950 bg-opacity-30 rounded-lg backdrop-blur">
                <p className="btn-text white-text text-center whitespace-break-spaces p-10">
                  I'm a Front-End Developer with 3 years of experience and proficient coding user
                  interface with a framework and Atomic Design System. Studying in Artificial
                  Intelligence for Business Analytice enchance other Back-End Developer skills and
                  competencies .
                </p>
              </div>
            </section>

            <section className={Style.section_logo}>
              <Logo />
            </section>

            <section className={Style.section_details}>
              <nav className="sticky flex flex-row items-center justify-between">
                <div className="flex-1">
                  <Logo className="w-16 h-16" />
                </div>
                <div className="flex flex-row items-center justify-between flex-1">
                  <p className="btn-text white-text uppercase">skills</p>
                  <p className="btn-text white-text uppercase">experience </p>
                  <p className="btn-text white-text uppercase">education</p>
                  <p className="btn-text white-text uppercase">contact</p>
                </div>
              </nav>
              <div className="flex flex-col items-center overflow-x-hidden overflow-y-auto h-40 mt-16">
                {/* skills */}
                <div className="bg-neutral-950 bg-opacity-30 rounded-lg backdrop-blur flex flex-row items-center justify-around w-full">
                  <div className="auto-cols-max flex-1">
                    {HARD_SKILLS.map((skill: IHardSkills, index: number) => (
                      <div key={index} className="flex flex-col items-center">
                        <img src={skill.img} className="w-9 object-contain" />
                        <p className="text-xs white-text">{skill.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* experience */}
                <div>
                  <div className="bg-neutral-950 bg-opacity-30 rounded-lg backdrop-blur flex flex-row items-center justify-around p-10">
                    <p>
                      Mungmee Software Co., Ltd Front-End Developer (Jan 2021 - present) Fast-build
                      user interface and integrate API for web (React, Vue) public: Mungmee (web for
                      a retailer), E-Merchant (web for wholesaler) Cooperate with other Back-End
                      Developers for the rest APIs Cooperate with Systems Analyst and User Interface
                      and User Experience Designer to create and modify features upon the Business
                      requirements Manage to troubleshoot business and user problems Review and
                      refactored coding with the Front-End team Supervise intern and junior staff
                    </p>
                  </div>

                  <div className="bg-neutral-950 bg-opacity-30 rounded-lg backdrop-blur flex flex-row items-center justify-around p-10">
                    <p>
                      Front-End Developer (Mar 2020 - Jan 2021) Cupcode Co., Ltd Was a fast-build
                      user interface for websites (React) and mobile applications (React Native)
                      internal: Stationary (Thaioil group), Fram to school (Nectec), etc. public: SB
                      design square Manage to troubleshoot client requirements Cooperated with
                      Back-End Developer, Systems Analyst, and User Interface and User Experience
                      Designer
                    </p>
                  </div>

                  <div className="bg-neutral-950 bg-opacity-30 rounded-lg backdrop-blur flex flex-row items-center justify-around p-10">
                    <p>
                      Researcher Assistant, Botanical Illustrator, and Graphic Designer (Jun 2017 -
                      Oct 2018) Drew botanical illustrators for research papers Reviewed research
                      papers and experimented with Thai Traditional and Lanna Traditional Medicine
                      Designed packaging and supported Thai Traditional Medicine product production
                      Medicinal Plants Innovation Center of Mae Fah Laung University
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="md:flex-1" />
        </div>
      </div>
    </div>
  );
}
