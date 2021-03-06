import { useEffect } from "react";
import DetailCard from "../../../../../../components/Cards/ProductsCard/DetailCard";
import ProductsContainer from "../../../../../../components/Container/ProductsContainer";
import preventDefault from "../../../../../../util/prevent-default";

import classes from "./Bouquet.module.scss";

function Bouquet({ className: classProp, bouquets }) {
  useEffect(() => {}, []);

  const classMerged = `${classes.sect} v-ce ${classProp || ""}`.trim();

  return (
    <section className={classMerged}>
      <ProductsContainer className={classes.cont}>
        {bouquets.map((item) => (
          <DetailCard key={item.title} {...item} onClick={preventDefault} />
        ))}
      </ProductsContainer>

      <a href="/" className="btn btn--fill" onClick={preventDefault}>
        more arrangements
      </a>
    </section>
  );
}

export default Bouquet;
