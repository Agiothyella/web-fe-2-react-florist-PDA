import MainWrapper from "../../../components/Container/MainWrapper";
import NavItemList from "./NavitemList";

import classes from "./Navigation.module.scss";

const navList = [
  { link: "/link", content: "Today's Deal", linkClass: "ph-m" },
  { link: "/link", content: "Earth Day", linkClass: "ph-m" },
  {
    link: "/link",
    content: "Spring",
    linkClass: "ph-m",
    subnav: [
      {
        title: "Spring flowers",
        link: "/",
        links: [
          { link: "/", content: "Hydrangea" },
          { link: "/", content: "Pansy" },
          { link: "/", content: "Primrose" },
          { link: "/", content: "Tulip" },
          { link: "/", content: "Columbine" },
        ],
      },
      {
        title: "Spring arrangement",
        link: "/",
        links: [
          { link: "/", content: "Cherry blossom" },
          { link: "/", content: "Hydrangea" },
          { link: "/", content: "Tulip" },
          { link: "/", content: "Rose" },
          { link: "/", content: "Alyssum" },
        ],
      },
    ],
  },
  {
    link: "/link",
    content: "Occasions",
    linkClass: "ph-m",
    subnav: [
      {
        title: "Everyday",
        link: "/",
        links: [
          { link: "/", content: "Just because" },
          { link: "/", content: "Birthday" },
          { link: "/", content: "Anniversary" },
          { link: "/", content: "Congratulations" },
          { link: "/", content: "Get well" },
          { link: "/", content: "Sympathy" },
        ],
      },
      {
        title: "Earth Day special",
        link: "/",
        links: [
          { link: "/", content: "Earth day arrangement" },
          { link: "/", content: "Pot Flowers" },
          { link: "/", content: "Container garden" },
        ],
      },
      {
        title: "Spring festival",
        link: "/",
        links: [
          { link: "/", content: "Totam explicabo" },
          { link: "/", content: "Ducimus quaerat" },
          { link: "/", content: "Est blanditiis dolores" },
          { link: "/", content: "Itaque perspiciatis" },
        ],
      },
    ],
  },
  {
    link: "/link",
    content: "Flowers",
    linkClass: "ph-m",
    subnav: [
      {
        title: "By color",
        link: "/",
        links: [
          { link: "/", content: "Mixed" },
          { link: "/", content: "White" },
          { link: "/", content: "Red" },
          { link: "/", content: "Blue" },
          { link: "/", content: "Yellow" },
          { link: "/", content: "Purple" },
        ],
      },
      {
        title: "By species",
        link: "/",
        links: [
          { link: "/", content: "Roses" },
          { link: "/", content: "Hydrangea" },
          { link: "/", content: "Orchid" },
          { link: "/", content: "Jasmine" },
          { link: "/", content: "Daisy" },
          { link: "/", content: "Rafflesia" },
        ],
      },
      {
        title: "By price",
        links: [
          { link: "/", content: "Under $50" },
          { link: "/", content: "From $50 to $100" },
          { link: "/", content: "Over $100 blossom" },
        ],
      },
    ],
  },
  {
    link: "/link",
    content: "Our Shop",
    linkClass: "ph-m",
    subnav: [
      {
        title: "help",
        links: [
          { link: "/", content: "Customer Service" },
          { link: "/", content: "Delivery" },
          { link: "/", content: "FAQs" },
        ],
      },
    ],
  },
];

function Navigation() {
  return (
    <nav className={classes["nav"]}>
      <MainWrapper className={`${classes["container"]} ph-m`}>
        <ul className={classes["list"]}>
          {navList.map((props) => (
            <NavItemList key={props.content} {...props} />
          ))}
        </ul>
      </MainWrapper>
    </nav>
  );
}

export default Navigation;
