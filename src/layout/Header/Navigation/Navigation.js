import MainWrapper from "../../../components/Container/MainWrapper";
import NavItemList from "./NavitemList";

import classes from "./Navigation.module.scss";
import { useState } from "react";

const navList = [
  {
    nav: {
      link: "/link",
      content: "Today's Deal",
      index: 1,
    },
  },
  {
    nav: {
      link: "/link",
      content: "Earth Day",
      index: 2,
    },
  },
  {
    nav: {
      link: "/link",
      content: "Spring",
      index: 3,
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
  },
  {
    nav: {
      link: "/link",
      content: "Occasions",
      index: 4,
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
        {
          title: "Everydays",
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
          title: "Earth Day specials",
          link: "/",
          links: [
            { link: "/", content: "Earth day arrangement" },
            { link: "/", content: "Pot Flowers" },
            { link: "/", content: "Container garden" },
          ],
        },
        {
          title: "Spring festivals",
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
  },
  {
    nav: {
      link: "/link",
      content: "Flowers",
      index: 5,
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
  },
  {
    nav: {
      link: "/link",
      content: "Our Shop",
      index: 6,
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
  },
];

function Navigation() {
  const [subnavOpen, setSubnavOpen] = useState(null);
  const [subnavActive, setSubnavActive] = useState(null);

  const subnavHandler = (i, activate) => {
    if (!activate) {
      setSubnavOpen(i);
    }
    if (activate) {
      setSubnavActive(i);
    }
  };

  return (
    <nav className={classes["nav"]}>
      <MainWrapper className={`${classes["container"]} ph-m`}>
        <ul className={classes["list"]}>
          {navList.map((item) => (
            <NavItemList
              key={item.nav.index}
              index={item.nav.index}
              open={subnavOpen}
              active={subnavActive}
              nav={item.nav}
              subnavHandler={subnavHandler}
            />
          ))}
        </ul>
      </MainWrapper>
    </nav>
  );
}

export default Navigation;
