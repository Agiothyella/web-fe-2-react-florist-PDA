import classes from "./Social.module.scss";

function Social({ list, className: classProp }) {
  const classMerged = `${classes["social"]} ${classProp || ""}`.trim();

  return (
    <ul className={classMerged}>
      {list.map((social) => (
        <li key={social.link}>
          <a href={social.link} target="_blank" rel="noreferrer">
            <social.logo title={social.title} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
