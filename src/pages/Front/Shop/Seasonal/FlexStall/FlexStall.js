import SmallContainer from "../../../../../components/Container/SmallContainer";
import SmallCard from "../../../../../components/Cards/ProductsCard/SmallCard";
import FlexBasis from "../../../../../components/FlexSelection/FlexBasis";
import classes from "./FlexStall.module.scss";

function FlexStall({ title, subtitle, link, items, bgImg }) {
  return (
    <FlexBasis className={classes.container} style={{ backgroundImage: `url(${bgImg})` }}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <SmallContainer className={classes.stall}>
        {items.map((item) => (
          <SmallCard {...item} />
        ))}
      </SmallContainer>
      <a href={link} className="btn btn--flat">
        Find More
      </a>
    </FlexBasis>
  );
}

export default FlexStall;
