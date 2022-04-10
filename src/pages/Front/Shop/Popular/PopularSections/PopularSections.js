import Bouquet from "./Bouquet";
import Flower from "./Flower";
import classes from "./PopularSections.module.scss";

function PopularSections({ className: classProp, flowers, bouquets }) {
  const classMerged = `d-grid ${classes.contain} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <Bouquet bouquets={bouquets} className={classes.bouquet} />
      <Flower flowers={flowers} className={classes.flower} />
    </div>
  );
}

export default PopularSections;
