import Submenu from "../Submenu";
import classes from "./NavItemList.module.scss";

function NavItemList({ index, active, open, nav, subnavHandler }) {
  let isActive = false;
  if (active === index) {
    isActive = true;
  }

  let isOpen = false;
  if (open === index) {
    isOpen = true;
  }

  const openSubnav = () => {
    if (!active) {
      subnavHandler(null, true);
      subnavHandler(index, false);
    }
  };

  const closeSubnav = () => {
    if (!active) {
      subnavHandler(null, false);
    }
  };

  const activateSubnav = (e) => {
    if (nav.subnav) {
      e && e.preventDefault();
    }

    if (isActive) {
      subnavHandler(null, true);
      subnavHandler(null, false);
      return;
    }

    subnavHandler(null, false);
    subnavHandler(index, true);
  };

  const linkClass = [
    classes.a,
    "ph-m",
    nav.subnav ? classes["have-subnav"] : "",
    isActive ? classes.active : "",
    isOpen ? classes.open : "",
  ]
    .join(" ")
    .trim();

  const subnavClass = [
    classes.subnav,
    isOpen ? classes["mobile-controller"] : "",
    (nav.subnav && (isOpen || isActive) && classes.visible) || "",
  ]
    .join(" ")
    .trim();

  return (
    <li className={classes["list"]} onMouseEnter={openSubnav} onMouseLeave={closeSubnav}>
      <a href={nav.link} className={linkClass} onClick={activateSubnav}>
        {nav.content}
      </a>
      {<Submenu menu={nav.subnav} className={subnavClass} />}
    </li>
  );
}

export default NavItemList;
