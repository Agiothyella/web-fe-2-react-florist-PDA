import classes from "./SmallCard.module.scss";

function SmallCard({ imgSrc, title, price, link }) {
  return (
    <a href={link} className={classes.product}>
      <img src={imgSrc} alt={title} />
      <div className={classes.texts}>
        <span className={classes.price}>{price && `$${price}`}</span>
        <span className={classes.title}>{title}</span>
      </div>
    </a>
  );
}

export default SmallCard;
