import classes from "./LinkList.module.scss";

function LinkList({ title, links, className: classProp }) {
  const classMerged = `${classes.menu} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      <h5>{title}</h5>

      <ul className={classes.list}>
        {links.map((link) => (
          <li key={link.content}>
            <a href={link.link}>{link.content}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
