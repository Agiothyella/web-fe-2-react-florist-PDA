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
    e && e.preventDefault();

    subnavHandler(null, false);
    subnavHandler(index, true);
  };

  const deactivateSubnav = (e) => {
    e && e.preventDefault();

    subnavHandler(null, true);
    console.log("asd");
  };

  const linkClass = [
    classes.a,
    "ph-m",
    nav.subnav ? classes.sub : "",
    // nav.isActive || nav.isOpen ? classes.focus : "",
  ]
    .join(" ")
    .trim();

  return (
    <li
      className={classes["list"]}
      onMouseEnter={openSubnav}
      onMouseLeave={closeSubnav}
      onClick={activateSubnav}
      onBlur={deactivateSubnav}
    >
      <a href={nav.link} className={linkClass}>
        {nav.content}
      </a>
      {nav.subnav && (isOpen || isActive) && <Submenu menu={nav.subnav} />}
    </li>
  );
}

export default NavItemList;
