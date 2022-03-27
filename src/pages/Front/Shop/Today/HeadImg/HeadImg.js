import headImg from "../../../../../assets/images/today-img-2x.jpg";
import classes from "./HeadImg.module.scss";

function HeadImg({ className: classProp }) {
  const classMerged = `${classes.frame} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <a href="/" className={`${classes.btn} btn btn--focus`}>
        Explore More
      </a>
      <img src={headImg} alt="Woman holding a bouquet" className={classes.img} />{" "}
    </div>
  );
}

export default HeadImg;
