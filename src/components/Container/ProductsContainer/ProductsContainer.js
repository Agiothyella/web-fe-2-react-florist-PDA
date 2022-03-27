import classes from "./ProductsContainer.module.scss";

function ProductsContainer({ children, className: classProp }) {
  const classMerged = `d-grid ${classes.container} ${classProp}`.trim();

  return <div className={classMerged}>{children}</div>;
}

export default ProductsContainer;
