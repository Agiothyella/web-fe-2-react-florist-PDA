import MainWrapper from "../../../../components/Container/MainWrapper";
import HeadImg from "./HeadImg";
import Stall from "./Stall";
import classes from "./Today.module.scss";

import today1 from "../../../../assets/images/data-img/placeholder-1.jpg";
import today2 from "../../../../assets/images/data-img/placeholder-2.jpg";
import today3 from "../../../../assets/images/data-img/placeholder-3.jpg";
import today4 from "../../../../assets/images/data-img/placeholder-4.jpg";

const items = [
  {
    imgSrc: today1,
    title: "Consectetur adipisicing",
    discPrice: 76,
    oriPrice: 86,
    link: "/link",
  },
  {
    imgSrc: today2,
    title: "Facere itaque exercitationem",
    discPrice: 86,
    oriPrice: 102,
    link: "/link",
  },
  {
    imgSrc: today3,
    title: "Nostrum quam accusantium",
    discPrice: 78,
    oriPrice: 89,
    link: "/link",
  },
  {
    imgSrc: today4,
    title: "Enim fugit eligendi",
    discPrice: 73,
    oriPrice: 87,
    link: "/link",
  },
];

function Today({ className: classProp }) {
  const classMerged = `${classes["section"]} ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <MainWrapper className={`${classes["container"]} d-grid`}>
        <Stall className={classes.stall} items={items} />
        <HeadImg className={classes.img} />
      </MainWrapper>
    </section>
  );
}

export default Today;
