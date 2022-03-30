import SectionSmall from "../../../../components/Cards/SectionCard/SectionSmall";
import MainWrapper from "../../../../components/Container/MainWrapper";
import Address from "./Address";
import Map from "./Map";
import classes from "./Contact.module.scss";

import { ReactComponent as FbLogo } from "../../../../assets/icon/svg/facebook.svg";
import { ReactComponent as IgLogo } from "../../../../assets/icon/svg/instagram.svg";
import { ReactComponent as TwLogo } from "../../../../assets/icon/svg/twitter.svg";

const social = [
  { logo: FbLogo, link: "https://facebook.com", title: "Facebook" },
  { logo: IgLogo, link: "https://instagram.com", title: "Instagram" },
  { logo: TwLogo, link: "https://Paypal.com", title: "Twitter" },
];

function Contact({ className: classProp }) {
  const classMerged = `${classes["main"] || ""} ${classProp || ""}`.trim();

  return (
    <article className={classMerged}>
      <MainWrapper>
        <SectionSmall>
          <div className={classes.grid}>
            <Map className={classes.map} />
            <Address social={social} className={classes.addr} />
          </div>
        </SectionSmall>
      </MainWrapper>
    </article>
  );
}

export default Contact;
