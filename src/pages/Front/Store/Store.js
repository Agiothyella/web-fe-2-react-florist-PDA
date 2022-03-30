import About from "./About";
import Contact from "./Contact";
import Review from "./Review";
import classes from "./Store.module.scss";

function Store() {
  return (
    <div className={classes["store"]}>
      <Review />
      <Contact />
      <About />
    </div>
  );
}

export default Store;
