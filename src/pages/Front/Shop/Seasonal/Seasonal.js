import MainWrapper from "../../../../components/Container/MainWrapper";
import FlexSelection from "../../../../components/FlexSelection/FlexSelection";
import FlexStall from "./FlexStall";
import classes from "./Seasonal.module.scss";

//#region :  ASSETS IMPORT
import flower1 from "../../../../assets/images/data-img/placeholder-stem-1.jpg";
import flower2 from "../../../../assets/images/data-img/placeholder-stem-2.jpg";
import flower3 from "../../../../assets/images/data-img/placeholder-stem-3.jpg";
import flower4 from "../../../../assets/images/data-img/placeholder-stem-4.jpg";

import bgAutumn from "../../../../assets/images/season-autumn.jpg";
import bgWinter from "../../../../assets/images/season-winter.jpg";
import bgSpring from "../../../../assets/images/season-spring.jpg";
import bgSummer from "../../../../assets/images/season-summer.jpg";
import { useState } from "react";
//#endregion

const seasonalContent = [
  {
    title: "Autumn",
    subtitle: "Feel the autumn breeze, get flowers that only bloom in autumn",
    link: "/",
    style: {
      bgImg: bgAutumn,
      color: "#995224",
    },
    items: [
      {
        imgSrc: flower1,
        title: "Nam auctor fringilla",
        price: 12,
        link: "/",
      },
      {
        imgSrc: flower4,
        title: "Proin felis veli",
        price: 10,
        link: "/",
      },
      {
        imgSrc: flower2,
        title: "convallis sodales fel",
        price: 8,
        link: "/",
      },
      {
        imgSrc: flower1,
        title: "cmagna at",
        price: 6,
        link: "/",
      },
      {
        imgSrc: flower3,
        title: "Cras tempus",
        price: 21,
        link: "/",
      },
      {
        imgSrc: flower4,
        title: "Praesent pellentesque",
        price: 16,
        link: "/",
      },
    ],
  },
  {
    title: "Winter",
    subtitle: "Warm your winter, get flowers that only bloom in winter",
    link: "/",
    style: {
      bgImg: bgWinter,
      color: "#48578e",
    },
    items: [
      {
        imgSrc: flower2,
        title: "Ut congue",
        price: 18,
        link: "/",
      },
      {
        imgSrc: flower3,
        title: "llicitudin tincidu",
        price: 12,
        link: "/",
      },
      {
        imgSrc: flower4,
        title: "Vivamus ullamco",
        price: 18,
        link: "/",
      },
      {
        imgSrc: flower2,
        title: "olestie sit ame",
        price: 20,
        link: "/",
      },
      {
        imgSrc: flower1,
        title: "aximus consectet",
        price: 7,
        link: "/",
      },
      {
        imgSrc: flower3,
        title: "ibulum porttitor vel nisl id frin",
        price: 17,
        link: "/",
      },
    ],
  },
  {
    title: "Spring",
    subtitle: "Start going out again, get flowers that only bloom in spring",
    link: "/",
    style: {
      bgImg: bgSpring,
      color: "#862e9c",
    },
    items: [
      {
        imgSrc: flower4,
        title: "esent eu met",
        price: 18,
        link: "/",
      },
      {
        imgSrc: flower2,
        title: "oin a lacus ne",
        price: 12,
        link: "/",
      },
      {
        imgSrc: flower3,
        title: "d sit amet ero",
        price: 18,
        link: "/",
      },
      {
        imgSrc: flower1,
        title: "iquet magna at males",
        price: 20,
        link: "/",
      },
      {
        imgSrc: flower2,
        title: "ltricies quam auctor sed",
        price: 7,
        link: "/",
      },
      {
        imgSrc: flower4,
        title: "felis velit",
        price: 17,
        link: "/",
      },
    ],
  },
  {
    title: "Summer",
    subtitle: "Relax on summer, get flowers that only bloom in summer",
    link: "/",
    style: {
      bgImg: bgSummer,
      color: "#8c5e00",
    },
    items: [
      {
        imgSrc: flower2,
        title: "unc at mauris",
        price: 18,
        link: "/",
      },
      {
        imgSrc: flower3,
        title: "landit sapien et",
        price: 12,
        link: "/",
      },
      {
        imgSrc: flower1,
        title: "pulvinar lectus",
        price: 18,
        link: "/",
      },
      {
        imgSrc: flower4,
        title: "am ut dapibus dolo",
        price: 20,
        link: "/",
      },
      {
        imgSrc: flower1,
        title: "Aliquam erat volutpa",
        price: 7,
        link: "/",
      },
      {
        imgSrc: flower3,
        title: "Nunc lectus",
        price: 17,
        link: "/",
      },
    ],
  },
];

function Seasonal({ className: classProp }) {
  const [isActive, setIsActive] = useState(2);

  const seasonClickHandler = (selector) => {
    console.log(selector);
    setIsActive(selector);
  };

  const classMerged = `${classes["section"]} ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <MainWrapper>
        <FlexSelection className={classes.container}>
          {seasonalContent.map((sec, index) => {
            if (index === isActive) {
              return (
                <FlexStall
                  {...sec}
                  key={sec.title}
                  selector={index}
                  active={true}
                  onClick={seasonClickHandler}
                />
              );
            }

            return (
              <FlexStall
                {...sec}
                key={sec.title}
                selector={index}
                onClick={seasonClickHandler}
              />
            );
          })}
        </FlexSelection>
      </MainWrapper>
    </section>
  );
}

export default Seasonal;
