import ProtrudeCard from "../../../../../components/Cards/ProtrudeCard";
import Social from "../../../../../components/ItemList/Social";
import classes from "./Address.module.scss";

function Address({ social, className: classProp }) {
  const classMerged = `${classes["list"]} ${classProp || ""}`.trim();

  return (
    <ProtrudeCard rCard className={classMerged}>
      <p>Agiothyella Flowers</p>
      <address className={classes.addr}>
        <ul>
          <li>
            <a href="mailto:flower@agiothyella.com">flower@agiothyella.com</a>
            <span>E-mail</span>
          </li>
          <li>
            <a href="tel:+1122278901">+11-222-78-901</a>
            <span>Phone</span>
          </li>
          <li>
            <a href="https://maps.google.com/maps?ll=-74.695873,164.10568&z=13&t=m&hl=en-US&gl=US&mapclient=embed&q=Zucchelli%20Station%20Antarctica">
              Mario Zucchelli Station.,
              <br /> Terra Nova Bay, Antarctica
            </a>
            <span>Address</span>
          </li>
        </ul>
      </address>
      <Social list={social} className={classes.social} />
    </ProtrudeCard>
  );
}

export default Address;
