import classes from "./HeadImg.module.scss";
import headImg from "../../../../../assets/images/today-img.jpg";
import headImg2x from "../../../../../assets/images/today-img-2x.jpg";

function HeadImg({ className: classProp }) {
  const classMerged = `${classes.frame} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <a href="/" className={`${classes.btn} btn btn--focus`}>
        Explore More
      </a>

      <picture>
        <source data-srcset={`${headImg} 1x, ${headImg2x} 2x`} />
        <img
          alt="Woman holding a bouquet"
          className={`${classes.img} lazy`}
          data-src={headImg}
        />
      </picture>
    </div>
  );
}

export default HeadImg;
