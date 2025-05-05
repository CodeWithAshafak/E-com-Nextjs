'use client'
import { useEffect, useState } from 'react';
import Footer from '../../Componets/Footer';
import Header from '../../Componets/Header'
import { cartdisplay } from "../../actions/cartdisplay";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/cartSlice";
import { addfav } from "../../redux/favSlice";
import toast, { Toaster } from 'react-hot-toast';
interface Product {
  id: number;
  proname: string;
  prodetails: string;
  categroy: string;
  price: number;
  warranty: string;
  createdAt: Date;
  image?: string;
}
export default function page() {


  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await cartdisplay();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log('products are :-',products);

  
  return (
    <>
    <Header/>

     <div className='mt-20'>
       <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center'>Same Day Delivery Gifts</h3>



     </div>




    <Footer/>
    </>
    
  );
}