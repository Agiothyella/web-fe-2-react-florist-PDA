import classes from "./NavItemList.module.scss";

function NavItemList({ link, content, linkClass }) {
  return (
    <li className={classes["list"]}>
      <a href={link} className={linkClass}>
        {content}
      </a>
    </li>
  );
}

export default NavItemList;
