import SubmenuList from "./SubmenuList";
import classes from "./Submenu.module.scss";
import sideImg from "../../../../assets/images/subnav-img.jpg";
import sideImg2x from "../../../../assets/images/subnav-img-2x.jpg";

function Submenu({ menu, className: classProp }) {
  const classMerged = `${classes.container} ${classProp || ""}`.trim();

  return (
    <nav className={classMerged}>
      <div className={classes.wrap}>
        <div className={classes.menus}>
          {menu &&
            menu.map((list) => (
              <SubmenuList
                key={list.title}
                title={list.title}
                link={list.link}
                links={list.links}
              />
            ))}
        </div>

        <picture>
          <source data-srcset={`${sideImg} 1x, ${sideImg2x} 2x`} />
          <img
            alt=""
            aria-hidden="true"
            className={`${classes.img} lazy`}
            data-src={sideImg}
          />
        </picture>
      </div>
    </nav>
  );
}

export default Submenu;
