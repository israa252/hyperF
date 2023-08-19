import Header from "@/components/Header";
import Featured from "@/components/Featured";
// import Nav from "@/components/Nav";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import ShopByCategory from "@/components/ShopByCategory";
import Footer from "@/components/Footer";

 
 

export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div>
       {/* <Nav/> */}
      <Header />
      <Featured product={featuredProduct} />
      
      <ShopByCategory/>
       
      <NewProducts products={newProducts} />
  
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '64da3b0d4d62e64b001b2e1f';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}