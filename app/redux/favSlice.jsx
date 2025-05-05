import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const favSlice = createSlice({
  name: "addtofav",
  initialState: {
    fav: [],
  },
  reducers: {
    addfav: (state, action) => {
      const data = state.fav.filter((item) => item.id == action.payload.id);
      if (data.length > 0) {
        // alert("Product Already Added")
        Swal.fire({
          icon: "error",
          title: "Product Already Added into Wishlist",
          // text: "Something went wrong!",
        });
      } else {
        state.fav.push(action.payload);
        // alert("Product Added Into Wishli Successfully")
        Swal.fire({
          title: "Product Added Into Wishlist  Successfully !",
          icon: "success",
          draggable: true,
        });
      }
    },
    removefav: (state, action) => {
      

        const confirmBox = window.confirm(
            "Do you really want to delete this product from your favourite list?"
        )
        if (confirmBox === true) {
            state.fav = state.fav.filter((item) => item.id !== action.payload);
        }
    },
  },
});

export const { addfav, removefav } = favSlice.actions;
export default favSlice.reducer;
