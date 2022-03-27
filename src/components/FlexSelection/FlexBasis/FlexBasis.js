import classes from "./FlexBasis.module.scss";

function FlexBasis({ children, className: classProp, style }) {
  const classMerged = `${classes["base"]} ${classProp || ""}`.trim();

  return (
    <div className={classMerged} style={style}>
      {children}
    </div>
  );
}

export default FlexBasis;
