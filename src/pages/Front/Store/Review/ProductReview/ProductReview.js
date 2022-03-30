import classes from "./ProductReview.module.scss";
import ReviewBlock from "../../../../../components/ReviewBlock";

function ProductReview({ reviews, className: classProp }) {
  const classMerged = `${classes.prod || ""} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <h2>Products review</h2>
      {reviews.slice(0, 3).map((review) => {
        return <ReviewBlock {...review} />;
      })}
    </div>
  );
}

export default ProductReview;
