import classes from "./SubmenuList.module.scss";

function SubmenuList({ title, link, links }) {
  return (
    <div className={classes.menu}>
      <p className={classes.title}>{title}</p>
      <ul className={classes.list}>
        {links.map((item) => (
          <li key={item.content}>
            <a href={item.link}>{item.content}</a>
          </li>
        ))}
      </ul>
      {link && <a href={link}>More...</a>}
    </div>
  );
}

export default SubmenuList;
