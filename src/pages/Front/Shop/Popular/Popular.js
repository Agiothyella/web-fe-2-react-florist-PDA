import MainWrapper from "../../../../components/Container/MainWrapper";
import SectionWide from "../../../../components/Cards/SectionCard/SectionWide";
import PopularSections from "./PopularSections";
import classes from "./Popular.module.scss";

//#region : MEDIA IMPORTS
import flower1 from "../../../../assets/images/data-img/placeholder-stem-1.jpg";
import flower2 from "../../../../assets/images/data-img/placeholder-stem-2.jpg";
import flower3 from "../../../../assets/images/data-img/placeholder-stem-3.jpg";
import flower4 from "../../../../assets/images/data-img/placeholder-stem-4.jpg";

import bouquet1 from "../../../../assets/images/data-img/placeholder-1.jpg";
import bouquet2 from "../../../../assets/images/data-img/placeholder-2.jpg";
import bouquet3 from "../../../../assets/images/data-img/placeholder-3.jpg";
import bouquet4 from "../../../../assets/images/data-img/placeholder-4.jpg";
//#endregion

const flowers = [
  {
    imgSrc: flower1,
    title: "temibus quis",
    price: "6",
    link: "/",
  },
  {
    imgSrc: flower2,
    title: "orro asnda",
    price: "18",
    link: "/",
  },
  {
    imgSrc: flower3,
    title: "debtis expeita",
    price: "4",
    link: "/",
  },
  {
    imgSrc: flower4,
    title: "Veo quae",
    price: "2",
    link: "/",
  },
  {
    imgSrc: flower1,
    title: "tempibus quis",
    price: "6",
    link: "/",
  },
  {
    imgSrc: flower2,
    title: "porro ssenda",
    price: "18",
    link: "/",
  },
  {
    imgSrc: flower3,
    title: "debis xedita",
    price: "4",
    link: "/",
  },
  {
    imgSrc: flower4,
    title: "ero quae",
    price: "2",
    link: "/",
  },
  {
    imgSrc: flower1,
    title: "tempobs quis",
    price: "6",
    link: "/",
  },
  {
    imgSrc: flower2,
    title: "porro assuma",
    price: "18",
    link: "/",
  },
  {
    imgSrc: flower3,
    title: "detis expta",
    price: "4",
    link: "/",
  },
  {
    imgSrc: flower4,
    title: "Vero uae",
    price: "2",
    link: "/",
  },
];

const bouquet = [
  {
    imgSrc: bouquet1,
    title: "nobis officia laborum deectus et doloremque",
    price: "70",
    link: "/",
  },
  {
    imgSrc: bouquet2,
    title: "Reiciendis raione",
    price: "98",
    link: "/",
  },
  {
    imgSrc: bouquet3,
    title: "labore aepe",
    price: "83",
    link: "/",
  },
  {
    imgSrc: bouquet4,
    title: "delectus et doloremqe",
    price: "70",
    link: "/",
  },
  {
    imgSrc: bouquet2,
    title: "eiciedis ratione ratione ratione",
    price: "83",
    link: "/",
  },
  {
    imgSrc: bouquet4,
    title: "labore sape",
    price: "98",
    link: "/",
  },
];

function Popular({ className: classProp }) {
  const classMerged = `${classes["section"] || ""} ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <MainWrapper className={classes["container"]}>
        <SectionWide>
          <header>
            <h1>Liked By Many</h1>
            <h4>Our most popular flowers and arrangements!</h4>
          </header>

          <PopularSections flowers={flowers} bouquets={bouquet} />
        </SectionWide>
      </MainWrapper>
    </section>
  );
}

export default Popular;
