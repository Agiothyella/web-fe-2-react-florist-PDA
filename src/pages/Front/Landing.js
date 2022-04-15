import Shop from "./Shop";
import Store from "./Store";
import lazyLoadInit from "../../app/lazyLoad/lazy-load-init";
import classes from "./Landing.module.scss";

lazyLoadInit();

function Main() {
  return (
    <main className={classes["main"]}>
      <Shop />
      <Store />
    </main>
  );
}

export default Main;
