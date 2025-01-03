import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductsById,
} from "../../services/productServices";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getAllProducts();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    return await getProductsById(id);
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    return await addProduct(product);
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, product }) => {
    return await updateProduct(id, product);
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await deleteProduct(id);
    return id;
  }
);
