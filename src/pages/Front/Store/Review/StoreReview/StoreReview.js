import ProtrudeCard from "../../../../../components/Cards/ProtrudeCard/ProtrudeCard";
import StarRender from "./StarRender";

import classes from "./StoreReview.module.scss";

function StoreReview({ reviews, className: classProp }) {
  const classMerged = `${classes.store} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <ProtrudeCard className={classes.card}>
        <span className={classes.score}>{reviews.rating}</span>

        <StarRender rating={reviews.rating} className={classes.star} />

        <p>{reviews.reviewer} reviews on Google Reviews</p>
      </ProtrudeCard>
      <a href="/" className="btn btn--fill">
        Read reviews
      </a>
    </div>
  );
}

export default StoreReview;
