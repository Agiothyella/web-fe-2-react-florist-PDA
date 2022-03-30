import MainWrapper from "../../components/Container/MainWrapper";
import Social from "../../components/ItemList/Social";
import Address from "./Address";
import classes from "./Footer.module.scss";
import Payments from "./Payments";
import Sitemap from "./Sitemap";

import { ReactComponent as FbLogo } from "../../assets/icon/svg/facebook.svg";
import { ReactComponent as IgLogo } from "../../assets/icon/svg/instagram.svg";
import { ReactComponent as TwLogo } from "../../assets/icon/svg/twitter.svg";
import { ReactComponent as YtLogo } from "../../assets/icon/svg/youtube.svg";
import { ReactComponent as YelpLogo } from "../../assets/icon/svg/yelp.svg";
import { ReactComponent as LiLogo } from "../../assets/icon/svg/linkedin.svg";

const sitemap = [
  {
    title: "About Us",
    links: [
      { link: "/", content: "Agiothyella Corporate" },
      { link: "/", content: "Corporate Services" },
      { link: "/", content: "Privacy" },
      { link: "/", content: "Become an Affiliate" },
      { link: "/", content: "Blog" },
    ],
  },
  {
    title: "Policy",
    links: [
      { link: "/", content: "Terms of Service" },
      { link: "/", content: "Delivery Policy" },
      { link: "/", content: "Substitution Policy" },
      { link: "/", content: "Privacy Policy " },
    ],
  },
  {
    title: "Help",
    links: [
      { link: "/", content: "Customer Service" },
      { link: "/", content: "Track Delivery" },
      { link: "/", content: "Sitemap" },
    ],
  },
];

const social = [
  { logo: FbLogo, link: "https://facebook.com", title: "Facebook" },
  { logo: IgLogo, link: "https://instagram.com", title: "Instagram" },
  { logo: TwLogo, link: "https://Paypal.com", title: "Twitter" },
  { logo: YtLogo, link: "https://youtube.com", title: "Youtube" },
  { logo: YelpLogo, link: "https://yelp.com", title: "Yelp" },
  { logo: LiLogo, link: "https://linkedin.com", title: "Linked In" },
];

function Footer({ children, className: classProp }) {
  const classMerged = `${classes["foot"]} ${classProp || ""}`.trim();

  return (
    <>
      {children}
      <footer className={classMerged}>
        <MainWrapper className={`${classes["container"]} pv-ml ph-ml`}>
          <Sitemap className={classes["map"]} sitemap={sitemap} />
          <Payments className={classes["pay"]} />
          <Social list={social} className={`${classes["social"]} mv-l`} />
          <Address className={classes["address"]} />
          <small className={classes["copy"]}>Copyright© 2021 Agiothyella</small>
        </MainWrapper>
      </footer>
    </>
  );
}

export default Footer;
