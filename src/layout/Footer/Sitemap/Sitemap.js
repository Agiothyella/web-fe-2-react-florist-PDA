import classes from "./Sitemap.module.scss";

function Sitemap({ className: classProp, sitemap }) {
  const classMerged = `${classes["map"]} ${classProp || ""}`.trim();

  return (
    <nav className={classMerged}>
      {sitemap.map((section) => (
        <div key={section.title}>
          <h5>{section.title}</h5>
          <ul className={classes["list"]}>
            {section.links.map((link) => (
              <li key={link.content}>
                <a href={link.link}>{link.content}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default Sitemap;
