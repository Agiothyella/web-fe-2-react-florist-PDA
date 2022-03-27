import classes from "./UserMenu.module.scss";
import { ReactComponent as CartIcon } from "../../../../assets/icon/svg/shopping-cart.svg";
import { ReactComponent as UserIcon } from "../../../../assets/icon/svg/user-circle-o.svg";

function UserMenu({ className: classProps }) {
  const classMerged = `${classes["menu"]} ${classProps || ""}`.trim();

  return (
    <div className={classMerged}>
      <a href="#a" className={classes["name"]}>
        <UserIcon title="Username" />
        <span>Username</span>
      </a>

      <a href="#b" className={classes["cart"]}>
        <CartIcon title="Cart" />
      </a>
    </div>
  );
}

export default UserMenu;
