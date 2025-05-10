// 'use client'

// import { useEffect, useState } from "react"
// import getOrder from "../../actions/getOrder" 

// export default function orderDisplay() {
//   const [orderData, setOrderData] = useState([]);
//   const getOrderdata=  async ()=>{
//     const data = await getOrder()
//     console.log('order in display page is ',data)
//     setOrderData(data);
//   }
//   useEffect(()=>{getOrderdata()},[])
  
//   return (
//     <>
//     <div>
//        <h4 className='text-4xl font-extrabold mb-4 text-center'>Customer Order </h4>
    

//        <table className="table-auto w-full">
//         <thead>
//         <tr className="bg-gray-100">
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider"> User Name</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Details</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Warranty</th>
//           <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
          
//         </tr>

//         </thead>


//          <tbody className="bg-white">
//         {orderData.map((product) => (
//           <tr key={product.id} className="hover:bg-gray-100">
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.id}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.proname}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.prodetails}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.price}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{product.warranty}</td>
//             <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//               <img src={product.image} alt={product.proname}  />
//             </td>

            
//           </tr>
//         ))}
//       </tbody>


//        </table>


//     </div>
      
//     </>
//   )
// }


'use client'

import { useEffect, useState } from "react"
import getOrder from "../../actions/getOrder"

export default function OrderDisplay() {
  const [orderData, setOrderData] = useState([]);

  const getOrderdata = async () => {
    const data = await getOrder();
    console.log('order in display page is ', data);
    setOrderData(data);
  }

  useEffect(() => { getOrderdata() }, []);

  return (
    <div className="p-4">
      <h4 className='text-4xl font-extrabold mb-6 text-center'>All Order Information</h4>

      <table className="table-auto w-full border-collapse border border-gray-400 text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">User Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Pincode</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Payment Status</th>
            <th className="border px-4 py-2">Razorpay Order ID</th>
            <th className="border px-4 py-2">Payment ID</th>
            <th className="border px-4 py-2">Signature</th>
            <th className="border px-4 py-2">Created At</th>
            <th className="border px-4 py-2">Updated At</th>
            <th className="border px-4 py-2">Products</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.id} className="bg-white hover:bg-gray-50">
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.userName}</td>
              <td className="border px-4 py-2">{order.userEmail}</td>
              <td className="border px-4 py-2">{order.phoneNumber}</td>
              <td className="border px-4 py-2">{order.address}</td>
              <td className="border px-4 py-2">{order.pincode}</td>
              <td className="border px-4 py-2">₹{order.amount}</td>
              <td className="border px-4 py-2">{order.paymentStatus}</td>
              <td className="border px-4 py-2">{order.razorpayOrderId}</td>
              <td className="border px-4 py-2">{order.razorpayPaymentId}</td>
              <td className="border px-4 py-2">{order.razorpaySignature}</td>
              <td className="border px-4 py-2">{new Date(order.createdAt).toLocaleString()}</td>
              <td className="border px-4 py-2">{new Date(order.updatedAt).toLocaleString()}</td>
              <td className="border px-4 py-2">
                <table className="w-full border text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-2 py-1">Name</th>
                      <th className="border px-2 py-1">ProId</th>
                      <th className="border px-2 py-1">Quantity</th>
                      <th className="border px-2 py-1">Price</th>
                      
0                      <th className="border px-2 py-1">Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((key, index) => (
                      <tr key={index}>
                        <td className="border px-2 py-1">{key.productName}</td>
                        <td className="border px-2 py-1">{key.productId}</td>
                        <td className="border px-2 py-1">{key.quantity}</td>
                        <td className="border px-2 py-1">₹{key.price}</td>
                       
                        <td className="border px-2 py-1">
                          <img src={key.image} alt={key.proname} className="h-10 w-10 object-cover" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
