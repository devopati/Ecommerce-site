import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

interface InitialStateProptype {
  products: ProductType[];
  cart: ProductType[];
  cartIds: string[];
}

const initialState: InitialStateProptype = {
  products: [],
  cart: [],
  cartIds: [],
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProductsReducer: (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    },

    //function to add to product to cart
    addProductToCart: (state, action) => {
      action.payload["qty"] = 1;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartIds: [...state.cartIds, action.payload._id],
      };
    },

    //function to remove from cart
    removeProductFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (product) => product._id !== action.payload
      );
      const newCartIds = state.cartIds.filter((id) => id !== action.payload);
      return {
        ...state,
        cart: newCart,
        cartIds: newCartIds,
      };
    },

    //increase qty
    increaseQty: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload
      );
      if (product) {
        product.qty++;
      }
      return state;
    },

    //reduce qty
    reduceQty: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload
      );
      if (product && product.qty > 1) {
        product.qty--;
      }
      return state;
    },
  },
});

export const {
  setProductsReducer,
  increaseQty,
  reduceQty,
  addProductToCart,
  removeProductFromCart,
} = AppSlice.actions;

export default AppSlice.reducer;
