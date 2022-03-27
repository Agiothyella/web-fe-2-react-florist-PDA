import classes from "./SmallContainer.module.scss";

function SmallContainer({ children, className: classProp }) {
  const classMerged = `d-grid ${classes.container} ${classProp}`.trim();

  return <div className={classMerged}>{children}</div>;
}

export default SmallContainer;
