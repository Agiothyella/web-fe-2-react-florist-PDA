import { useEffect } from "react";
import LazyLoad from "vanilla-lazyload";
import classes from "./LazyFlower.module.scss";

import placeholder from "../../../assets/images/data-img/flower-lazy.jpg";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad();
}

function LazyFlower({ imgSrc, title, className: classProp }) {
  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  const classMerged = [classes.img, "lazy", classProp || ""].join(" ").trim();

  return <img src={placeholder} data-src={imgSrc} alt={title} className={classMerged} />;
}

export default LazyFlower;
