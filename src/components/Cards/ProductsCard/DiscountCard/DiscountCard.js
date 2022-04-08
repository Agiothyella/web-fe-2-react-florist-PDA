import classes from "./DiscountCard.module.scss";

function DiscountCard({ imgSrc, title, discPrice, oriPrice, link, onClick }) {
  return (
    <a href={link} className={classes.product} onClick={onClick}>
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
