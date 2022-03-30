import classes from "./BackgroundOverlay.module.scss";

function BackgroundOverlay({ children, className: classProp }) {
  const classMerged = `${classes["bg"]} ${classProp || ""}`.trim();

  return <div className={classMerged}>{children}</div>;
}

export default BackgroundOverlay;
