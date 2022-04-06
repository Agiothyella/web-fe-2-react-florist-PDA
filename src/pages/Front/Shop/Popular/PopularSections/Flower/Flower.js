import { useEffect, useState } from "react";
import SmallCard from "../../../../../../components/Cards/ProductsCard/SmallCard";

import classes from "./Flower.module.scss";
import styles from "../../../../../../styles/variables/_static.scss";

import bg from "../../../../../../assets/images/pop-img.jpg";
import SmallContainer from "../../../../../../components/Container/SmallContainer";

function Flower({ className: classProp, flowers }) {
  const [width, setWidth] = useState(window.innerWidth);

  const bpLarge = parseFloat(styles.bpLarge) * 16;
  const bpMedium = parseFloat(styles.bpMedium) * 16;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  let filter;
  if (width > bpLarge) {
    filter = flowers.filter((_, i) => {
      return i < 8;
    });
  }
  if (width >= bpMedium && width <= bpLarge) {
    filter = flowers.filter((_, i) => {
      return i < 8;
    });
  }
  if (width < bpMedium) {
    filter = flowers.filter((_, i) => {
      return i < 10;
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
