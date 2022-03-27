import preventDefault from "../../../../util/prevent-default";
import logoH from "../../../../assets/images/logo-horizontal.PNG";
import classes from "./Identity.module.scss";

function Identity({ className: classProp }) {
  const classMerged = `${classes["id"]} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <a href="/" onClick={preventDefault}>
        <img src={logoH} alt="Agiothyella Logo" />
      </a>

      <p>Deliver fresh flowers and handcrafted flower arrangements</p>
    </div>
  );
}

export default Identity;
