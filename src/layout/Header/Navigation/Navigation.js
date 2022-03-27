import MainWrapper from "../../../components/Container/MainWrapper";
import NavItemList from "./NavitemList";

import classes from "./Navigation.module.scss";

const navList = [
  { link: "/link", content: "Today's Deal", linkClass: "ph-m" },
  { link: "/link", content: "Earth Day", linkClass: "ph-m" },
  { link: "/link", content: "Spring v", linkClass: "ph-m" },
  { link: "/link", content: "Occasions v", linkClass: "ph-m" },
  { link: "/link", content: "Flowers v", linkClass: "ph-m" },
  { link: "/link", content: "Our Shop v", linkClass: "ph-m" },
];

function Navigation() {
  return (
    <nav className={classes["nav"]}>
      <MainWrapper className={`${classes["container"]} ph-m`}>
        <ul>
          {navList.map((props) => (
            <NavItemList key={props.content} {...props} />
          ))}
        </ul>
      </MainWrapper>
    </nav>
  );
}

export default Navigation;
