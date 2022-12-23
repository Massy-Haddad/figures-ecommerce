import { GiVerticalBanner } from "react-icons/gi";
import { CgBorderBottom, CgBorderTop } from "react-icons";

export default {
  name: "banner",
  title: "Banner",
  type: "document",
  icon: GiVerticalBanner,

  fields: [
    {
      name: "banner",
      title: "Banner",
      type: "string",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: [
          { title: "Hero", value: "hero" },
          { title: "Footer", value: "footer" },
        ],
      },
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
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
  
  preview: {
    select: {
      title: 'banner',
      media: 'products.0.thumbnail'
    },
  },
};
