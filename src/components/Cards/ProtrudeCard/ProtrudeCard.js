import classes from "./ProtrudeCard.module.scss";

function ProtrudeCard({ children, className: classProp }) {
  const classMerged = `${classes.card} ${classProp || ""}`.trim();

  return <div className={classMerged}>{children}</div>;
}

export default ProtrudeCard;
