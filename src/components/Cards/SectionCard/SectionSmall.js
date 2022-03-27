import classes from "./SectionSmall.module.scss";

function SectionSmall({ children }) {
  return <div className={classes.card}>{children}</div>;
}

export default SectionSmall;
