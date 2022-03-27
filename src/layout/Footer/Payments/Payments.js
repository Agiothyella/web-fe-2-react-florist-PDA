import classes from "./Payments.module.scss";

import { ReactComponent as PaypalLogo } from "../../../assets/icon/svg/paypal.svg";
import { ReactComponent as ApplepayLogo } from "../../../assets/icon/svg/applepay.svg";
import { ReactComponent as GpayLogo } from "../../../assets/icon/svg/googlepay.svg";
import { ReactComponent as DiscoverLogo } from "../../../assets/icon/svg/discover.svg";
import { ReactComponent as MastercardLogo } from "../../../assets/icon/svg/mastercard.svg";
import { ReactComponent as VisaLogo } from "../../../assets/icon/svg/visa.svg";

function Payments({ className: classProp }) {
  const classMerged = `${classes["pay"]} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <h6>Payment Methods</h6>
      <ul>
        <li>
          <PaypalLogo title="We accept Paypal" />
        </li>
        <li>
          <ApplepayLogo title="We accept Apple Pay" />
        </li>
        <li>
          <GpayLogo title="We accept Google Pay" />
        </li>
        <li>
          <DiscoverLogo title="We accept Discover" />
        </li>
        <li>
          <MastercardLogo title="We accept Mastercard" />
        </li>
        <li>
          <VisaLogo title="We accept Visa" />
        </li>
      </ul>
    </div>
  );
}

export default Payments;
