import Popular from "./Popular";
import Seasonal from "./Seasonal";
import Specials from "./Specials";
import Today from "./Today";

import classes from "./Shop.module.scss";
import BackgroundOverlay from "../../../components/Container/BackgroundOverlay/BackgroundOverlay";

function Shop() {
  return (
    <div className={classes["shop"]}>
      <Today />
      <BackgroundOverlay className={`${classes.wide} `}>
        <Popular className="pv-vh v-ce" />
        <Specials className="pv-vh v-ce" />
        <Seasonal className="pv-vh v-ce" />
      </BackgroundOverlay>
    </div>
  );
}

export default Shop;
