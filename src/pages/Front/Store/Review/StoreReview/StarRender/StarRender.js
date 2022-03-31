import classes from "./StarRender.module.scss";

import { ReactComponent as FullStar } from "../../../../../../assets/icon/svg/star.svg";
import { ReactComponent as HalfStar } from "../../../../../../assets/icon/svg/star-outlined.svg";

function StarRender({ rating, className: classProp }) {
  const classMerged = `${classes.stars} ${classProp || ""}`.trim();

  const starForm = Math.floor(rating);

  const renderStar = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= starForm) {
      renderStar.push(<FullStar key={i} title={rating} />);
    }
    if (i > starForm) {
      renderStar.push(<HalfStar key={i} title={rating} />);
    }
  }

  return <div className={classMerged}>{renderStar.map((star) => star)}</div>;
}

export default StarRender;
