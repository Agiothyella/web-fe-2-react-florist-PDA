import classes from "./FlexBasis.module.scss";

function FlexBasis({ children, className: classProp, style, bgImg, onClick }) {
  const classMerged = `${classes["base"]} lazy ${classProp || ""}`.trim();

  return (
    <div
      data-bg={bgImg}
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
