import DetailCard from "../../../../../../components/Cards/ProductsCard/DetailCard";
import ProductsContainer from "../../../../../../components/Container/ProductsContainer";
import classes from "./SpecialSection.module.scss";

function SpecialSection({ items, imgSrc, title, link, className: classProp }) {
  const classMerged = `${classes["sub"]} ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <h2 className={classes["title"]}>{title}</h2>
      <div className={classes.img}>
        <img src={imgSrc} alt={title} />
        <div />
      </div>
      <ProductsContainer className={classes.container}>
        {items.map((item) => (
          <DetailCard key={item.title} {...item} />
        ))}
      </ProductsContainer>
      <a href={link} className="btn btn--flat">
        find more
      </a>
    </section>
  );
}

export default SpecialSection;
