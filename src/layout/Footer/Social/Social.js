import classes from "./Social.module.scss";

import { ReactComponent as FbLogo } from "../../../assets/icon/svg/facebook.svg";
import { ReactComponent as IgLogo } from "../../../assets/icon/svg/instagram.svg";
import { ReactComponent as TwLogo } from "../../../assets/icon/svg/twitter.svg";
import { ReactComponent as YtLogo } from "../../../assets/icon/svg/youtube.svg";
import { ReactComponent as YelpLogo } from "../../../assets/icon/svg/yelp.svg";
import { ReactComponent as LiLogo } from "../../../assets/icon/svg/linkedin.svg";

function Social({ className: classProp }) {
  const classMerged = `${classes["social"]} ${classProp || ""}`.trim();

  return (
    <ul className={classMerged}>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FbLogo />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <IgLogo />
        </a>
      </li>
      <li>
        <a href="https://Paypal.com" target="_blank" rel="noreferrer">
          <TwLogo />
        </a>
      </li>
      <li>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <YtLogo />
        </a>
      </li>
      <li>
        <a href="https://yelp.com" target="_blank" rel="noreferrer">
          <YelpLogo />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <LiLogo />
        </a>
      </li>
    </ul>
  );
}

export default Social;
