import { MdLooks } from "react-icons/md";

export default {
  name: "manufactor",
  type: "document",
  title: "Manufactor",
  icon: MdLooks,

  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "redirectUrl",
      type: "url",
    },
    {
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
};
