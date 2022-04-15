import { useEffect } from "react";
import classes from "./LazyBouquet.module.scss";
import lazyLoadInit from "../../../app/lazyLoad/lazy-load-init";

import placeholder from "../../../assets/images/data-img/bouquet-lazy.jpg";

lazyLoadInit();

function LazyBouquet({ imgSrc, title, className: classProp }) {
  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  const classMerged = [classes.img, "lazy", classProp || ""].join(" ").trim();

  return <img src={placeholder} data-src={imgSrc} alt={title} className={classMerged} />;
}

export default LazyBouquet;
