import classes from "./Address.module.scss";

function Address({ className: classProp }) {
  const classMerged = `${classes["address"]} ${classProp || ""}`.trim();

  return (
    <address className={classMerged}>
      <span>Mario Zucchelli Station., Terra Nova Bay, Antarctica</span>
      <span>+11-222-78-901</span>
    </address>
  );
}

export default Address;
