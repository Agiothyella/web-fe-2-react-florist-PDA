import UserMenu from "./UserMenu";
import Search from "../../../components/Input/Search";
import MainWrapper from "../../../components/Container/MainWrapper";
import Identity from "./Identity";
import { ReactComponent as MenuLogo } from "../../../assets/icon/svg/menu.svg";

import classes from "./TopMenu.module.scss";

// -----------------------------------------------------------//

function TopMenu({ mobile, onToggleMenu }) {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes["top"]}>
      <MainWrapper className={`${classes["container"]}`}>
        <div className={classes["head-wrapper"]}>
          <Identity className={classes["id"]} />
          {mobile && (
            <button className={classes["mobile-menu"]} onClick={onToggleMenu}>
              <MenuLogo title="Menu" />
            </button>
          )}
        </div>

        <div className={classes["tooltip-wrapper"]}>
          <div className={classes.tooltip}>
            <Search
              onSubmit={searchHandler}
              placeholder="Search flower, bouquet, or by color"
              className={`${classes["search"]}`}
            />

            <UserMenu className={`${classes["menu"]}`} />
          </div>
        </div>
      </MainWrapper>
    </div>
  );
}

export default TopMenu;
