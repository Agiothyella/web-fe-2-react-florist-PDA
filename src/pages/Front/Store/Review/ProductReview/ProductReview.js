import ReviewBlock from "../../../../../components/ReviewBlock";
import { useEffect, useState } from "react";

import classes from "./ProductReview.module.scss";
import styles from "../../../../../styles/variables/_static.scss";

function ProductReview({ reviews, className: classProp }) {
  const [width, setWidth] = useState(window.innerWidth);
  const bpMedium = parseFloat(styles.bpMedium);
  const bpSmallest = parseFloat(styles.bpSmallest);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  let block = false;
  if (width <= bpMedium && width > bpSmallest) {
    block = true;
  }

  const classMerged = `${classes.prod || ""} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <h2>Products review</h2>
      {block && <div className={classes.sdf} />}
      {reviews.slice(0, 3).map((review) => {
        return <ReviewBlock {...review} className={classes.block} />;
      })}
    </div>
  );
}

export default ProductReview;
