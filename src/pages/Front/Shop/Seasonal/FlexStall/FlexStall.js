import { useEffect, useState } from "react";
import SmallContainer from "../../../../../components/Container/SmallContainer";
import SmallCard from "../../../../../components/Cards/ProductsCard/SmallCard";
import preventDefault from "../../../../../util/prevent-default";
import FlexBasis from "../../../../../components/FlexSelection/FlexBasis";

import classes from "./FlexStall.module.scss";
import styles from "../../../../../styles/variables/_static.scss";

function FlexStall({ data, style, status, onClick, className: classProp }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isActive, setIsActive] = useState(false);
  const [isSeason, setIsSeason] = useState(false);

  const bpSquareBreak = parseFloat(styles.bpSquareBreak);

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

    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [status]);

  let filter;
  if (width > bpSquareBreak) {
    filter = data.items.slice(0, 6);
  }
  if (width <= bpSquareBreak) {
    filter = data.items.slice(0, 4);
  }

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
      <header className={classes.head}>
        {!isActive && <h2>{data.title}</h2>}
        {isActive && <h6>{data.subtitle}</h6>}
      </header>

      {isActive && (
        <>
          <SmallContainer className={classes.stall}>
            {filter.map((item) => (
              <SmallCard key={item.title} {...item} onClick={preventDefault} />
            ))}
          </SmallContainer>
          <a href={data.link} className="btn btn--chameleon" onClick={preventDefault}>
            Find More
          </a>
        </>
      )}
    </FlexBasis>
  );
}

export default FlexStall;
