 
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  try {
    await mongooseConnect();
    const { query } = req.query;

    console.log('Search query:', query); // Log the search query

    const searchData = await Product.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    });

    console.log('Search results:', searchData); // Log the search results

    res.json(searchData);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'An error occurred while fetching search results' });
  }
}
