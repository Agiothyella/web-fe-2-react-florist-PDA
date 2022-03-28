import DiscountCard from "../../../../../components/Cards/ProductsCard/DiscountCard";
import ProductsContainer from "../../../../../components/Container/ProductsContainer/ProductsContainer";

import classes from "./Stall.module.scss";

function Stall({ items, className: classProp }) {
  const classMerged = `${classes.stall} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <header>
        <h1>Today's Special</h1>
        <h4>Check out our best deal today, only for you to grab!</h4>
      </header>

      <ProductsContainer className={classes.cont}>
        {items.map((item) => (
          <DiscountCard key={item.imgSrc} {...item} />
        ))}
      </ProductsContainer>
    </div>
  );
}

export default Stall;
