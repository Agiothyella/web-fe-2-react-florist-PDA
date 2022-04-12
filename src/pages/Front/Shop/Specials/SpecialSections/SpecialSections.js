import SpecialSection from "./SpecialSection";
import classes from "./SpecialSections.module.scss";

function SpecialSections({ content, className: classProp }) {
  const classMerged = `${classes["subsec"]} ${classProp || ""}`.trim();

  return (
    <div className={classMerged}>
      {content.map((item) => (
        <SpecialSection
          key={item.title}
          items={item.content}
          imgSrc={item.imgSrc}
          imgSrc2x={item.imgSrc2x}
          title={item.title}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default SpecialSections;
