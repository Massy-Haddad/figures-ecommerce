import { client } from "../../lib/client";

export default async function product(req, res) {
  const { start, end } = req.query;
  
  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(404).end();
  }
  
  const { products, total } = await loadData(start, end);

  res.status(200).json({ 
    products, 
    total 
  });
};


export async function loadData(start, end) {
  const query = `{
    "products": *[_type == "product"] | order(price asc) [${start}...${end}]{
      thumbnail,
      name,
      slug,
      price,
      
      "work": work->,
      "manufactor": manufactor->,
    }, 
    "total": count(*[_type == "product"])
  }`;

  const { products, total } = await client.fetch(query);
  
  return {
    products,
    total
  }
}