import Navigation from "./Navigation";
import TopMenu from "./TopMenu";
import classes from "./Header.module.scss";

function Header({ children, className: classProp }) {
  const classMerged = `${classes["head"]} ${classProp || ""}`.trim();

  return (
    <>
      <header className={classMerged}>
        <TopMenu />
        <Navigation />
      </header>
      {children}
    </>
  );
}

export default Header;
