import SubmenuList from "./SubmenuList";
import classes from "./Submenu.module.scss";
import sideImg from "../../../../assets/images/subnav-img-2x.jpg";

function Submenu({ menu }) {
  console.log(menu);
  return (
    <nav className={classes["container"]}>
      <div className={classes.wrap}>
        {menu &&
          menu.map((list) => (
            <SubmenuList
              key={list.title}
              title={list.title}
              link={list.link}
              links={list.links}
            />
          ))}
        <img src={sideImg} aria-hidden="true" alt="" className={classes.img} />
      </div>
    </nav>
  );
}

export default Submenu;
