import classes from "./DetailCard.module.scss";

function DetailCard({ imgSrc, title, price, link }) {
  return (
    <a href={link} className={classes.product}>
      <img src={imgSrc} alt={title} />
      <span className={classes.title}>{title}</span>
      <span className={classes.price}>${price}</span>
    </a>
  );
}

export default DetailCard;
