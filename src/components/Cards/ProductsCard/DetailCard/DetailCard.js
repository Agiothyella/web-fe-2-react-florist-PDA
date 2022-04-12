import LazyBouquet from "../../../ImgLazy/LazyBouquet";
import classes from "./DetailCard.module.scss";

function DetailCard({ imgSrc, title, price, link, onClick }) {
  return (
    <a href={link} className={classes.product} onClick={onClick}>
      <LazyBouquet imgSrc={imgSrc} title={title} />
      <span className={classes.title}>{title}</span>
      <span className={classes.price}>${price}</span>
    </a>
  );
}

export default DetailCard;
