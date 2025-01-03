import { createSlice } from "@reduxjs/toolkit";

import { createCart, editCart, fetchCarts, removeCart } from "./cartAction";

const initialState = {
  carts: [],
  cart: null,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload || [];
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = { ...action.payload };
      })
      .addCase(createCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(editCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeCart.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = state.carts.filter((item) => item.id !== action.payload);
      })
      .addCase(removeCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
