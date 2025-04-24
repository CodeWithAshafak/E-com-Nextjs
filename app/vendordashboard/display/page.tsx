
"use server";
import { getVendorProducts } from "../../actions/vendordisplay";

export default async function DisplayProductsPage() {
  const products = await getVendorProducts();
console.log("Fetched products:", products); 
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            {/* ...table header... */}
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-t">
                {/* ...table row... */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
