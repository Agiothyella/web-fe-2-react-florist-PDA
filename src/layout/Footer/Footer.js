import MainWrapper from "../../components/Container/MainWrapper";
import Address from "./Address";
import classes from "./Footer.module.scss";
import Payments from "./Payments";
import Sitemap from "./Sitemap";
import Social from "./Social";

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

function Footer({ children, className: classProp }) {
  const classMerged = `${classes["foot"]} ${classProp || ""}`.trim();

  return (
    <>
      {children}
      <footer className={classMerged}>
        <MainWrapper className={`${classes["container"]} pv-ml ph-ml`}>
          <Sitemap className={classes["map"]} sitemap={sitemap} />
          <Payments className={classes["pay"]} />
          <Social className={`${classes["social"]} mv-l`} />
          <Address className={classes["address"]} />
          <small className={classes["copy"]}>Copyright© 2021 Agiothyella</small>
        </MainWrapper>
      </footer>
    </>
  );
}

export default Footer;
