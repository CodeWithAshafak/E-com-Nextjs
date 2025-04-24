
'use client';
import { useState, useEffect } from 'react';
import { getVendorProducts } from "../../actions/vendordisplay";

export default function DisplayProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getVendorProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* ... your JSX, using the 'products' state variable ... */}
    </>
  );
}
