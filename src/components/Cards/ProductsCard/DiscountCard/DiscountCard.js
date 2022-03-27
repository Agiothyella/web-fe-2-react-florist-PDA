import classes from "./DiscountCard.module.scss";

function DiscountCard({ imgSrc, title, discPrice, oriPrice, link }) {
  return (
    <a href={link} className={classes.product}>
      <img src={imgSrc} alt={title} />
      <span className={classes.title}>{title}</span>
      <span className={classes.price}>${discPrice}</span>
      <span className={classes.from}>
        from <span>${oriPrice}</span>
      </span>
    </a>
  );
}

export default DiscountCard;
