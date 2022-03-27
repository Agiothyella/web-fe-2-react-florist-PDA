import classes from "./SectionWide.module.scss";

function SectionWide({ children }) {
  return <div className={classes.card}>{children}</div>;
}

export default SectionWide;
