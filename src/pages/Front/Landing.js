import Shop from "./Shop";
import Store from "./Store";
import classes from "./Landing.module.scss";

function Main() {
  return (
    <main className={classes["main"]}>
      <Shop />
      <Store />
    </main>
  );
}

export default Main;
