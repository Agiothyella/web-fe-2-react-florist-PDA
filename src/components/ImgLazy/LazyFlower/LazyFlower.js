import { useEffect } from "react";
import classes from "./LazyFlower.module.scss";
import lazyLoadInit from "../../../app/lazyLoad/lazy-load-init";

import placeholder from "../../../assets/images/data-img/flower-lazy.jpg";

lazyLoadInit();

function LazyFlower({ imgSrc, title, className: classProp }) {
  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  const classMerged = [classes.img, "lazy", classProp || ""].join(" ").trim();

  return <img src={placeholder} data-src={imgSrc} alt={title} className={classMerged} />;
}

export default LazyFlower;
