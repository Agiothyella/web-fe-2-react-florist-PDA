import classes from "./FlexBasis.module.scss";

function FlexBasis({ children, className: classProp, style, onClick }) {
  const classMerged = `${classes["base"]} ${classProp || ""}`.trim();

  return (
    <div
      className={classMerged}
      style={style}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex="0"
    >
      {children}
    </div>
  );
}

export default FlexBasis;
