import classes from "./FlexSelection.module.scss";

function FlexSelection({ children, className: classProp }) {
  const classMerged = `${classes["flex"]} ${classProp || ""}`.trim();

  return <div className={classMerged}>{children}</div>;
}

export default FlexSelection;
