import instance from "./axios";

export const getAllCarts = async (userId) => {
  const { data } = await instance.get(`carts?userId=${userId}`);
  return data;
};
export const getCartsById = async (id) => {
  const { data } = await instance.get(`/carts/${id}`);
  return data;
};

export const addCarts = async (cart) => {
  const { data } = await instance.post("/carts", cart);
  console.log(data);
  return data;
};

export const deleteCart = async (id) => {
  const res = await instance.delete(`/carts/${id}`);
  return res.ok;
};

export const updateCart = async ({ id, cart }) => {
  console.log(id, cart);
  const { data } = await instance.patch(`/carts/${id}`, cart);

  return data;
};
