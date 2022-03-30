import SectionSmall from "../../../../components/Cards/SectionCard/SectionSmall";
import MainWrapper from "../../../../components/Container/MainWrapper";
import ProductReview from "./ProductReview";
import classes from "./Review.module.scss";
import StoreReview from "./StoreReview";

import img1 from "../../../../assets/images/data-img/placeholder-1.jpg";
import img2 from "../../../../assets/images/data-img/placeholder-2.jpg";
import img3 from "../../../../assets/images/data-img/placeholder-3.jpg";

const productReviews = [
  {
    key: 1,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem animi aliquid a, nesciunt assumenda aspernatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem animi aliquid a, nesciunt assumenda aspernatur!",
    reviewer: "Reviewer Name",
    product: { name: "Product name", imgSrc: img1, link: "/" },
    date: "32/6/2021",
  },
  {
    key: 2,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem, molestias aliquam sit perspiciatis, nesciunt assumenda aspernatur!",
    reviewer: "Vero illum saracollumer polikon",
    product: { name: "Similique vitae", imgSrc: img2, link: "/" },
    date: "32/6/2021",
  },
  {
    key: 3,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia minima cumque omnis ab, molestias aliquam sit perspiciatis, nesciunt assumenda aspernatur!",
    reviewer: "Velit iste",
    product: {
      name: "Sapiente aperiam aperiam aperiam aperiam",
      imgSrc: img3,
      link: "/",
    },
    date: "32/6/2021",
  },
];
const storeReview = { rating: 4.7, reviewer: 613 };

function Review({ className: classProp }) {
  const classMerged = `${classes["text"]} ${classProp || ""}`.trim();

  return (
    <article className={classMerged}>
      <MainWrapper>
        <SectionSmall>
          <header>
            <h1>What people think about us</h1>
          </header>

          <div className={classes.container}>
            <StoreReview reviews={storeReview} className={classes.store} />
            <ProductReview reviews={productReviews} className={classes.product} />
          </div>
        </SectionSmall>
      </MainWrapper>
    </article>
  );
}

export default Review;
