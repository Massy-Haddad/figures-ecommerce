import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import createImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "i4ybe46d",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token:
    "sk9NmiulCyL5PINjFdno5roMqZWhUu33N8VH4OiqWbtl6zAMZF58b4CZTWVlPQm6Ww7nM5nQHu1F82vIveb4wyzdRLIWj40RoULeYejhKn0GZcoAgHX9AxXKiDXy52y5zMMDhZaVEOk7ZtAr6DQZBiql71TpbXMpCtV82jQnKyVxHtRCVv4s",
  // token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
