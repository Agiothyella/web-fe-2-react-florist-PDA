import SmallContainer from "../../../../../components/Container/SmallContainer";
import SmallCard from "../../../../../components/Cards/ProductsCard/SmallCard";
import FlexBasis from "../../../../../components/FlexSelection/FlexBasis";
import classes from "./FlexStall.module.scss";

function FlexStall({ title, subtitle, link, items, style, selector, active, onClick }) {
  const clickHandler = () => {
    onClick(selector);
  };

  const classMerged = `${classes["container"]} ${active ? classes.active : ""}`.trim();

  return (
    <FlexBasis
      className={classMerged}
      style={{
        backgroundImage: `url(${style.bgImg})`,
        color: style.color,
        backgroundColor: style.color,
      }}
      onClick={clickHandler}
    >
      <h2>{title}</h2>

      {active && (
        <>
          <p>{subtitle}</p>
          <SmallContainer className={classes.stall}>
            {items.map((item) => (
              <SmallCard key={item.title} {...item} />
            ))}
          </SmallContainer>
          <a href={link} className="btn btn--chameleon">
            Find More
          </a>
        </>
      )}
    </FlexBasis>
  );
}

export default FlexStall;
