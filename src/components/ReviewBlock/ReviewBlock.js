import quotImg from "../../assets/icon/i-quots.png";
import classes from "./ReviewBlock.module.scss";

function ReviewBlock({ review, reviewer, product, date, className: classProp }) {
  const classMerged = `${classes.card} ${classProp || ""}`.trim();
  return (
    <div
      className={classMerged}
      style={{
        backgroundImage: `url(${quotImg})`,
      }}
    >
      <div className={classes.text}>
        <p>{review}</p>
        <a href="/" className="inline-link">
          Read More...
        </a>
      </div>

      <div className={classes.desc}>
        <img src={product.imgSrc} alt={product.name} className={classes.img} />
        <a href={product.link} className={classes.link}>
          {product.name}
        </a>
        <span className={classes.reviewer}>{reviewer}</span>
        <span className={classes.date}>
          Verified Purchase <br />
          {date}
        </span>
      </div>
    </div>
  );
}

export default ReviewBlock;
