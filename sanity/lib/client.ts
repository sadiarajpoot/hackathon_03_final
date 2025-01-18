import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export const fetchProductById = async (id:any) => {
  const query = `*[_type == "product" && _id == $id] {
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    },
    discountPercentage,
    category,
    description,
    review
  }`;

  try {
    const product = await client.fetch(query, { id });
    return product[0]; // Return the first product
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
