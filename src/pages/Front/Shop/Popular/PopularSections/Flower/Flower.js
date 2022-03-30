import { useEffect, useState } from "react";
import SmallCard from "../../../../../../components/Cards/ProductsCard/SmallCard";

import classes from "./Flower.module.scss";

import bg from "../../../../../../assets/images/pop-img.jpg";
import SmallContainer from "../../../../../../components/Container/SmallContainer";

function Flower({ className: classProp, flowers }) {
  const [width, setWidth] = useState(window.innerWidth);

  const breakpointLarge = 850;
  const breakpointSmall = 600;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  let filter;
  if (width > breakpointLarge) {
    filter = flowers.filter((_, i) => {
      return i < 8;
    });
  }
  if (width >= breakpointSmall && width <= breakpointLarge) {
    filter = flowers.filter((_, i) => {
      return i < 12;
    });
  }
  if (width < breakpointSmall) {
    filter = flowers.filter((_, i) => {
      return i < 9;
    });
  }

  const classMerged = `${classes.sect} v-ce ${classProp || ""}`.trim();

  return (
    <section
      className={classMerged}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <SmallContainer className={classes.cont}>
        {filter.map((item) => (
          <SmallCard key={item.title} {...item} />
        ))}
      </SmallContainer>

      <a className="btn btn--flat" href="/">
        more flowers
      </a>
    </section>
  );
}

export default Flower;
