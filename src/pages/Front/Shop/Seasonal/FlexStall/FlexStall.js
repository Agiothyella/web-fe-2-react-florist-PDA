import SmallContainer from "../../../../../components/Container/SmallContainer";
import SmallCard from "../../../../../components/Cards/ProductsCard/SmallCard";
import FlexBasis from "../../../../../components/FlexSelection/FlexBasis";
import classes from "./FlexStall.module.scss";
import { useEffect, useState } from "react";

function FlexStall({ data, style, status, onClick, className: classProp }) {
  const [isActive, setIsActive] = useState(false);
  const [isSeason, setIsSeason] = useState(false);

  useEffect(() => {
    if (status.active === status.index) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (status.season === status.index) {
      setIsSeason(true);
    } else {
      setIsSeason(false);
    }
  }, [status]);

  const clickHandler = () => {
    onClick(status.index);
  };

  const classMerged = [
    classProp || "",
    classes.container || "",
    isSeason ? classes.season : "",
    isActive ? classes.active : "",
  ].join(" ");

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
      <header>
        {!isActive && <h2>{data.title}</h2>}
        {isActive && <h4>{data.subtitle}</h4>}
      </header>

      {isActive && (
        <>
          <SmallContainer className={classes.stall}>
            {data.items.map((item) => (
              <SmallCard key={item.title} {...item} />
            ))}
          </SmallContainer>
          <a href={data.link} className="btn btn--chameleon">
            Find More
          </a>
        </>
      )}
    </FlexBasis>
  );
}

export default FlexStall;
