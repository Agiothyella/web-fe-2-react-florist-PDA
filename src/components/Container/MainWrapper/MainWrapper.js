import classes from "./MainWrapper.module.scss";

function MainWrapper({ children, className: classProp, style }) {
  const classMerged = `${classes["wrapper"]} ${classProp || ""}`.trim();

  return (
    <div className={classMerged} style={style}>
      {children}
    </div>
  );
}

export default MainWrapper;
