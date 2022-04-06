import About from "./About";
import Contact from "./Contact";
import Review from "./Review";
import classes from "./Store.module.scss";

function Store() {
  return (
    <div className={classes["store"]}>
      <Review className="mv-h" />
      <Contact className="mv-h" />
      <About className="mv-h" />
    </div>
  );
}

export default Store;
