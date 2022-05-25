import { GiVerticalBanner } from "react-icons/gi";

export default {
  name: "banner",
  title: "Banner",
  type: "document",
  icon: GiVerticalBanner,

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: { type: "product" },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
    {
      name: "midText",
      title: "MidText",
      type: "string",
    },
    {
      name: "largeText1",
      title: "LargeText1",
      type: "string",
    },
    {
      name: "largeText2",
      title: "LargeText2",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "saleTime",
      title: "SaleTime",
      type: "string",
    },
  ],
};
