import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
const cartSlice = createSlice({
    name: "addtocart",
    initialState: {
        cart: []
    },
    reducers: {
        add: (state, action) => {
            const data = state.cart.filter((item) => item.id == action.payload.id)
            console.log("data", data);
            if (data.length > 0) {
              //alert("Product Already Added")
                
                    
             Swal.fire({
                icon: "error",
                title: "Product Already Added",
                text: "Something went wrong!",
          
              });

            }
            else {
                state.cart.push(action.payload);
            //   alert("Product Added Successfully")


                  Swal.fire({
                    title: "Product Added into Cart!",
                    icon: "success",
                    draggable: true
                  });

            }
           
        },
        remove: (state, action) => {
            const confirmBox = confirm(
                "Do you really want to delete this product from your favourite list?"
            )
            if (confirmBox === true) {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }



            // const result =  Swal.fire({
            //       title: "Are you sure?",
            //       text: "You won't be able to revert this!",
            //       icon: "warning",
            //       showCancelButton: true,
            //       confirmButtonColor: "#3085d6",
            //       cancelButtonColor: "#d33",
            //       confirmButtonText: "Yes, delete it!"
            //     })
            // if(result === true){
            //     state.cart = state.cart.filter((item) => item.id !== action.payload);
            // }
                
           
        },
        increaseQuantity: (state, action) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.payload.id) {
                    state.cart[i].quantity += 1;
                    break;
                }
            }
        },
        decreaseQuantity: (state, action) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.payload.id && state.cart[i].quantity > 1) {
                    state.cart[i].quantity -= 1;
                    break;
                }
            }
        },

        removeProduct: (state, action) => {
            const confirmBox = window.confirm(
                "Do you really want to delete this product from your cart?"
            )
            if( confirmBox === true) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
           
        },

        removeallProduct: (state, action) => {
            state.cart = [];
        },
    }
 
})

export const { add, remove, increaseQuantity, decreaseQuantity ,removeProduct,removeallProduct} = cartSlice.actions;
export default cartSlice.reducer