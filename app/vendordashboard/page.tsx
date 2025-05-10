
'use client'
import React, { useEffect,useState } from 'react' 
import { useRouter } from 'next/navigation'
import { getVendorProducts } from "../actions/vendordisplay";
import getOrder from '../actions/getOrder';
import renderBarChart from './charts/c1';
import Paichart from './charts/Paichart';
const page : React.FC = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrderData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  const router=useRouter()
  const fetchProducts = async () => {
    try {
      const data = await getVendorProducts();
      console.log("Products data:", data);
      setProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  const fetchOrder = async ()=>{
    const orderData = await getOrder();
    console.log('order data is ', orderData);
    setOrderData(orderData);
  }



  useEffect(()=>{
     let name=localStorage.getItem('vendor')

     if(!name){
        router.push('/auth/vendorauth/login')
     } else{
       router.push('/vendordashboard')
     }

     fetchProducts();
     fetchOrder();
  

  }, [ ])
  return (

<>


    <div className='flex flex-col justify-center items-center mt-3' >
      <h4 className='text-center' >welcome to Vendor Dashboard </h4>
      <div className="grid grid-cols-3 gap-4 bg-white p-4 shadow-md rounded-md">
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-lg font-bold text-gray-700">Total Products <span className="text-2xl">{products.length}</span></h6>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-lg font-bold text-gray-700">Total Orders  <span className="text-2xl">{order.length}</span></h6>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="text-lg font-bold text-gray-700">Total Reviews </h6>
          </div>

      </div>

      <div className="flex flex-row justify-center items-center space-x-4 mt-6 border border-gray-700 p-5 glow-border bg-white">
        <div className="w-1/2">
          <Paichart />
        </div>
        <div className="w-1/2">

        </div>
      </div>

    </div>


    </>
  )
}

export default page