import UserMenu from "./UserMenu";
import Search from "../../../components/Input/Search";
import MainWrapper from "../../../components/Container/MainWrapper";
import Identity from "./Identity";

import classes from "./TopMenu.module.scss";

// -----------------------------------------------------------//

function TopMenu() {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes["top"]}>
      <MainWrapper className={`${classes["container"]} ph-ml`}>
        <Identity className={classes["id"]} />

        <Search
          onSubmit={searchHandler}
          placeholder="Search flower, bouquet, or by color"
          className={`pv-ms ${classes["search"]}`}
        />

        <UserMenu className={`pv-ms ${classes["menu"]}`} />
      </MainWrapper>
    </div>
  );
}

export default TopMenu;
