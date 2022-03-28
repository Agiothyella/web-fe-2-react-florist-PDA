import SectionWide from "../../../../components/Cards/SectionCard/SectionWide";
import MainWrapper from "../../../../components/Container/MainWrapper";
import classes from "./Specials.module.scss";
import SpecialSections from "./SpecialSections";

import springImg from "../../../../assets/images/spring-img-2x.jpg";
import roseImg from "../../../../assets/images/rose-img-2x.jpg";
import aquaImg from "../../../../assets/images/aquatic-img-2x.jpg";

import img1 from "../../../../assets/images/data-img/placeholder-1.jpg";
import img2 from "../../../../assets/images/data-img/placeholder-2.jpg";
import img3 from "../../../../assets/images/data-img/placeholder-3.jpg";
import img4 from "../../../../assets/images/data-img/placeholder-4.jpg";

const specialList = [
  {
    title: "spring",
    imgSrc: springImg,
    link: "/",
    content: [
      {
        title: "Sed dicta nulla",
        imgSrc: img3,
        price: 105,
        link: "/",
      },
      {
        title: "Reiciendis ratione",
        imgSrc: img2,
        price: 98,
        link: "/",
      },
      {
        title: "ab saepe odio dolorum",
        imgSrc: img1,
        price: 89,
        link: "/",
      },
      {
        title: "impedit sit excepturi",
        imgSrc: img4,
        price: 108,
        link: "/",
      },
    ],
  },
  {
    title: "roses",
    imgSrc: roseImg,
    link: "/",
    content: [
      {
        title: "Minus quia",
        imgSrc: img4,
        price: 75,
        link: "/",
      },
      {
        title: "sunt suscipit esse",
        imgSrc: img1,
        price: 86,
        link: "/",
      },
      {
        title: " placeat magni quibusdam",
        imgSrc: img3,
        price: 78,
        link: "/",
      },
      {
        title: "assumenda explicabo quisquam",
        imgSrc: img2,
        price: 84,
        link: "/",
      },
    ],
  },
  {
    title: "aquatic",
    imgSrc: aquaImg,
    link: "/",
    content: [
      {
        title: "Autem rerum aliquam",
        imgSrc: img1,
        price: 112,
        link: "/",
      },
      {
        title: "Voluptate amet voluptatibus",
        imgSrc: img2,
        price: 108,
        link: "/",
      },
      {
        title: "Possimus magnam ossimus magn",
        imgSrc: img3,
        price: 110,
        link: "/",
      },
      {
        title: "veniam sed quo harum",
        imgSrc: img4,
        price: 96,
        link: "/",
      },
    ],
  },
];

function Specials({ className: classProp }) {
  const classMerged = `${classes["section"]} ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <MainWrapper className={classes["container"]}>
        <SectionWide>
          <header>
            <h1>Special This Season</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
          </header>

          <SpecialSections content={specialList} />
        </SectionWide>
      </MainWrapper>
    </section>
  );
}

export default Specials;
