import Submenu from "../Submenu";
import classes from "./NavItemList.module.scss";

function NavItemList({ link, content, subnav, linkClass }) {
  return (
    <li className={classes["list"]}>
      <a href={link} className={linkClass}>
        {content}
      </a>
      {subnav && <Submenu menu={subnav} />}
    </li>
  );
}

export default NavItemList;
