import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import TopMenu from "./TopMenu";

import classes from "./Header.module.scss";
import styles from "../../styles/variables/_static.scss";

function Header({ children, className: classProp }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const bpSmall = parseFloat(styles.bpSmall);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  let mobileMode = false;
  if (width <= bpSmall) {
    mobileMode = true;
  }

  const toggleMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const classMerged = `${classes["head"]} ${classProp || ""}`.trim();

  return (
    <>
      <header className={classMerged}>
        <TopMenu mobile={mobileMode} onToggleMenu={toggleMenuHandler} />
        <Navigation mobile={mobileMode} open={menuOpen} />
      </header>
      {children}
    </>
  );
}

export default Header;
