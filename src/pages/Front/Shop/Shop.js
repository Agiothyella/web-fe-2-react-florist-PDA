import Popular from "./Popular";
import Seasonal from "./Seasonal";
import Specials from "./Specials";
import Today from "./Today";

import classes from "./Shop.module.scss";

function Shop() {
  return (
    <div className={classes["shop"]}>
      <Today />
      <div className={`${classes.wide} `}>
        <Popular className="pv-vh v-ce" />
        <Specials className="pv-vh v-ce" />
        <Seasonal className="pv-vh v-ce" />
      </div>
    </div>
  );
}

export default Shop;
