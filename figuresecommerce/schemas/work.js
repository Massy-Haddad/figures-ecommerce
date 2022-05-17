import { RiMovie2Line } from "react-icons/ri";

export default {
  name: "work",
  type: "document",
  title: "Work",
  icon: RiMovie2Line,

  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "bgColor",
      title: "Background Color",
      type: "color",
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
