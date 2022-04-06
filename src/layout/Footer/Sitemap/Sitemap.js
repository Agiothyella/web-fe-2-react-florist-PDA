import { useEffect, useState } from "react";
import Accordion from "../../../components/MenuList/Accordion";
import LinkList from "../../../components/MenuList/LinkList";
import classes from "./Sitemap.module.scss";

function Sitemap({ className: classProp, sitemap }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const renderList = (
    <>
      {sitemap.map((section) => (
        <LinkList key={section.title} title={section.title} links={section.links} />
      ))}
    </>
  );

  const renderAccordion = (
    <>
      {sitemap.map((section) => (
        <Accordion key={section.title} title={section.title} links={section.links} />
      ))}
    </>
  );

  const classMerged = `${classes["map"]} ${classProp || ""}`.trim();

  return <nav className={classMerged}>{width > 800 ? renderList : renderAccordion}</nav>;
}

export default Sitemap;
