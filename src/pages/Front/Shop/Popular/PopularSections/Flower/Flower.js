import { useEffect, useState } from "react";
import SmallContainer from "../../../../../../components/Container/SmallContainer";
import SmallCard from "../../../../../../components/Cards/ProductsCard/SmallCard";
import preventDefault from "../../../../../../util/prevent-default";

import classes from "./Flower.module.scss";
import styles from "../../../../../../styles/variables/_static.scss";

import bg from "../../../../../../assets/images/pop-img.jpg";

function Flower({ className: classProp, flowers }) {
  const [width, setWidth] = useState(window.innerWidth);

  const bpMedium = parseFloat(styles.bpMedium);
  const bpSmall = parseFloat(styles.bpSmall);
  const bpSmallest = parseFloat(styles.bpSmallest);
  const bpMobileBreak = parseFloat(styles.bpMobileBreak);
  const bpSquareBreak = parseFloat(styles.bpSquareBreak);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  let filter = flowers;
  if (width > bpMedium) {
    filter = flowers.slice(0, 8);
  }
  if (width > bpSmall && width <= bpMedium) {
    filter = flowers.slice(0, 12);
  }
  if (width > bpSmallest && width <= bpSmall) {
    filter = flowers.slice(0, 10);
  }
  if (width > bpMobileBreak && width <= bpSmallest) {
    filter = flowers.slice(0, 8);
  }
  if (width > bpSquareBreak && width <= bpMobileBreak) {
    filter = flowers.slice(0, 9);
  }
  if (width <= bpSquareBreak) {
    filter = flowers.slice(0, 6);
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
          <SmallCard key={item.title} {...item} onClick={preventDefault} />
        ))}
      </SmallContainer>

      <a href="/" className="btn btn--flat" onClick={preventDefault}>
        more flowers
      </a>
    </section>
  );
}

export default Flower;
