import DetailCard from "../../../../../../components/Cards/ProductsCard/DetailCard";
import ProductsContainer from "../../../../../../components/Container/ProductsContainer";
import preventDefault from "../../../../../../util/prevent-default";
import classes from "./SpecialSection.module.scss";

function SpecialSection({ items, imgSrc, imgSrc2x, title, link, className: classProp }) {
  const classMerged = `${classes["sub"]} ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <h2 className={classes["title"]}>{title}</h2>
      <div className={classes.img}>
        <picture>
          <source data-srcset={`${imgSrc} 1x, ${imgSrc2x} 2x`} />
          <img
            alt="Woman holding a bouquet"
            className={`${classes.img} lazy`}
            data-src={imgSrc}
          />
        </picture>
      </div>
      <ProductsContainer className={classes.container}>
        {items.map((item) => (
          <DetailCard key={item.title} {...item} onClick={preventDefault} />
        ))}
      </ProductsContainer>
      <a href={link} className="btn btn--flat" onClick={preventDefault}>
        find more
      </a>
    </section>
  );
}

export default SpecialSection;
