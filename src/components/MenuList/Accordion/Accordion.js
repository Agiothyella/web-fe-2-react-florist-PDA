import { useState } from "react";
import classes from "./Accordion.module.scss";

function MenuList({ title, links, className: classProp }) {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive(!isActive);
  };

  const keyHandler = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      setIsActive(!isActive);
    }
  };

  const classMerged = `${isActive ? classes.active : ""} ${classes.accord} ${
    classProp || ""
  }`.trim();

  return (
    <div className={classMerged}>
      <h5
        className={classes.title}
        onClick={clickHandler}
        onKeyDown={keyHandler}
        tabIndex="0"
      >
        {title}
      </h5>

      <ul className={classes.list}>
        {links.map((link) => (
          <li key={link.content}>
            <a href={link.link}>{link.content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
