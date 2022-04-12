import { useEffect } from "react";
import LazyLoad from "vanilla-lazyload";
import classes from "./LazyBouquet.module.scss";

import placeholder from "../../../assets/images/data-img/bouquet-lazy.jpg";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad();
}

function LazyBouquet({ imgSrc, title, className: classProp }) {
  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  const classMerged = [classes.img, "lazy", classProp || ""].join(" ").trim();

  return <img src={placeholder} data-src={imgSrc} alt={title} className={classMerged} />;
}

export default LazyBouquet;
