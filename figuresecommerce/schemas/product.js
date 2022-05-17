import { BsPersonSquare } from "react-icons/bs";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: BsPersonSquare,

  fields: [
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Release date",
      name: "releaseDate",
      type: "date",
    },
    {
      name: "work",
      title: "Work",
      type: "reference",
      to: { type: "work" },
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "string",
    },
    {
      name: "manufactor",
      title: "Manufactor",
      type: "reference",
      to: { type: "manufactor" },
    },
  ],
  initialValue: {
    specifications: "none",
  },
  preview: {
    select: {
      title: "name",
      subtitle: "manufactor.name",
      media: "thumbnail",
    },
  },
};
