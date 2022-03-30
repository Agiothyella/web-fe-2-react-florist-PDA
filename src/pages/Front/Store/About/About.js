import MainWrapper from "../../../../components/Container/MainWrapper";
import classes from "./About.module.scss";

function About({ className: classProp }) {
  const classMerged = `${classes["text"]} ${classProp || ""}`.trim();

  return (
    <article className={classMerged}>
      <MainWrapper>
        <h2>Beautiful Flowers Arrangements from Experienced Florist</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati ipsam
          nemo minus. Dolorum nostrum ex odio magnam dicta veniam tempora, eius,
          aspernatur quo unde, molestias quasi labore nisi. Beatae! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Veritatis vero inventore exercitationem
          placeat provident. Sunt repellat excepturi unde animi harum quisquam deleniti
          ad, earum repudiandae neque debitis provident non qui. Illum eius laborum
          deserunt consectetur voluptatum! Quod, doloremque iusto dolorum quas ut vitae
          voluptatem laboriosam minus voluptas, perferendis debitis vel porro dolor.
        </p>
        <h3>Fresh Flowers, Cut Just a Moment Before Delivery</h3>
        <p>
          Ullam, iusto adipisci! Consequatur dicta laborum tenetur doloribus, excepturi
          tempora nisi minima quo assumenda numquam maiores velit dolores atque unde
          placeat doloremque! Quaerat deleniti tenetur amet recusandae explicabo eaque,
          consectetur dignissimos quia neque, molestiae, sed tempore.
        </p>
        <h3>Sapiente tempore sint dignissimos non labore</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid dolore
          et, qui exercitationem recusandae similique iusto quasi dolores quis voluptatem
          temporibus cupiditate in quam officia. Officia impedit debitis atque. Quibusdam
          tempora a, tenetur nulla minus laborum! Totam molestias omnis nostrum eveniet
          est. Assumenda quam necessitatibus cum, non saepe consectetur ex? Facilis?
        </p>
        <h3>Laboriosam sunt ut delectus incidunt repellendus</h3>
        <p>
          Excepturi enim error aut omnis explicabo obcaecati minima suscipit ducimus
          itaque quas soluta, expedita magnam placeat? Modi fuga ratione ad omnis dolore!
          Nulla explicabo aperiam suscipit, a enim at neque laboriosam ratione totam?
          Repudiandae, cupiditate nostrum? Ipsam dolorum consequuntur quas ad repellat
          inventore ab.
        </p>
      </MainWrapper>
    </article>
  );
}

export default About;
