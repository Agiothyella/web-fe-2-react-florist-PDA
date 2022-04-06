import classes from "./UserMenu.module.scss";
import { ReactComponent as CartIcon } from "../../../../assets/icon/svg/shopping-cart.svg";
import { ReactComponent as UserIcon } from "../../../../assets/icon/svg/user-circle-o.svg";
import { useState } from "react";

function UserMenu({ className: classProps }) {
  // Use state for context -- delete later
  const [cart, setCart] = useState(false);
  const cartHandler = () => {
    setCart(!cart);
  };

  const classMerged = `${classes["menu"]} ${classProps || ""}`.trim();

  return (
    <div className={classMerged}>
      <a href="#a" className={classes["name"]}>
        <UserIcon title="Username" />
        <span>Username</span>
      </a>

      <a href="#b" className={classes["cart"]} onClick={cartHandler}>
        <CartIcon title="Cart" />
        {cart && <div>1</div>}
      </a>
    </div>
  );
}

export default UserMenu;
