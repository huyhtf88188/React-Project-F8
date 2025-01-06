import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getProductsById,
  addProduct,
  deleteProduct,
  updateProduct,
  updateProductStock,
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

// Sửa sản phẩm
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, product }) => {
    return await updateProduct(id, product);
  }
);

// Xóa sản phẩm
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await deleteProduct(id);
    return id;
  }
);
export const updateStock = createAsyncThunk(
  "products/updateStock",
  async ({ id, quantity }) => {
    return await updateProductStock(id, quantity);
  }
);
