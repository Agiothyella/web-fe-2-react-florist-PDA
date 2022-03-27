import classes from "./Submenu.module.scss";

function Submenu({ children }) {
  return <div className={classes["container"]}>{children}</div>;
}

export default Submenu;
