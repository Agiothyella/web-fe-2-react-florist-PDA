import classes from "./Map.module.scss";

function Map({ className: classProp }) {
  const classMerged = `${classes.map} ${classProp || ""}`.trim();

  return (
    <iframe
      className={classMerged}
      title="Agiothyella Flowers Location"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmXYzTM5nbK8R-r-y6cUSAkE&key=AIzaSyDcpTNHMPWIXMaFi-7rns0LtY8tqHcZz4Q"
    ></iframe>
  );
}

export default Map;
