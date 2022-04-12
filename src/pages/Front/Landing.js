import LazyLoad from "vanilla-lazyload";
import Shop from "./Shop";
import Store from "./Store";
import classes from "./Landing.module.scss";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad();
}

function Main() {
  return (
    <main className={classes["main"]}>
      <Shop />
      <Store />
    </main>
  );
}

export default Main;
