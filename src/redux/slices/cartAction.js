import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addCarts,
  deleteCart,
  getAllCarts,
  getCartsById,
  updateCart,
} from "../../services/cartReducer";

export const fetchCarts = createAsyncThunk("cart/fetchCarts", async (id) => {
  return await getAllCarts(id);
});

export const fetchCartsById = createAsyncThunk(
  "cart/fetchCartsById",
  async (id) => {
    return await getCartsById(id);
  }
);

export const createCart = createAsyncThunk("cart/createCarts", async (cart) => {
  return await addCarts(cart);
});

export const editCart = createAsyncThunk(
  "cart/editCarts",
  async ({ id, cart }) => {
    return await updateCart({ id, cart });
  }
);

export const removeCart = createAsyncThunk("cart/removeCart", async (id) => {
  await deleteCart(id);
  return id;
});
