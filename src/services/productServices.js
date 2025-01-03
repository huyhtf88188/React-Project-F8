import instance from "./axios";

export const getAllProducts = async () => {
  const { data } = await instance.get("/products");
  return data;
};
export const getProductsById = async (id) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const addProduct = async (product) => {
  const { data } = await instance.post("/products", product);
  return data;
};

export const deleteProduct = async (id) => {
  const res = await instance.delete(`/products/${id}`);
  return res.ok;
};

export const updateProduct = async (id, product) => {
  console.log(id, product);
  const { data } = await instance.patch(`/products/${id}`, product);
  console.log(data);

  return data;
};
