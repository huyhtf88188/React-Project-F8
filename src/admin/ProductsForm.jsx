import { useEffect, useState } from "react";
import { categories } from "../data.json";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import {
  createProduct,
  editProduct,
  fetchProductById,
} from "../redux/slices/productAction";

const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET } = import.meta.env;
import productSchema from "./../schema/crudSchema";

const ProductsForm = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [thumbnailOption, setThumbnailOption] = useState("keep");
  const dispatch = useDispatch();
  const { id } = useParams();
  const nav = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await dispatch(fetchProductById(id));
          if (res.payload) {
            reset(res.payload);
            setThumbnailUrl(res.payload.thumbnail);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      })();
    }
  }, [id, dispatch, reset]);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", VITE_UPLOAD_PRESET);

    console.log(formData);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    console.log(VITE_UPLOAD_PRESET, VITE_CLOUD_NAME);
    console.log(response);
    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmitForm = async (data) => {
    try {
      let updatedProduct = { ...data };

      if (thumbnailOption === "upload" && data.thumbnail[0]) {
        const uploadedUrl = await uploadImage(data.thumbnail[0]);
        updatedProduct.thumbnail = uploadedUrl;
      } else if (thumbnailOption === "link") {
        updatedProduct.thumbnail = data.thumbnail;
      } else if (thumbnailOption === "keep") {
        updatedProduct.thumbnail = thumbnailUrl;
      }

      if (id) {
        dispatch(editProduct({ id, product: updatedProduct }));
        nav("/product_table");
      } else {
        await dispatch(createProduct(updatedProduct));
      }
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {id ? "Edit Product" : "Add Product"}
        </h2>
        <form
          id="product-form"
          className="space-y-5"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Tên Sản Phẩm
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product name"
              {...register("title")}
            />
            <p className="text-red-500 text-sm">{errors.title?.message}</p>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <select
              id="category"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              {...register("category")}
            >
              {categories.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price (VNĐ)
            </label>
            <input
              step={0.000000001}
              type="number"
              id="price"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="0"
              {...register("price", { valueAsNumber: true })}
            />
            <p className="text-red-500 text-sm">{errors.price?.message}</p>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product description"
              {...register("description_1")}
            ></textarea>
            <p className="text-red-500 text-sm">
              {errors.description_1?.message}
            </p>
          </div>

          <div className="mb-3">
            <label
              htmlFor="thumbnailOption"
              className="block text-sm font-medium text-gray-600"
            >
              Choose Thumbnail Option
            </label>
            <select
              id="thumbnailOption"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              value={thumbnailOption}
              onChange={(e) => setThumbnailOption(e.target.value)}
            >
              <option value="keep">Giữ Ảnh Cũ</option>
              <option value="link">Thêm Link Ảnh Mới</option>
              <option value="upload">Lấy Ảnh Trên Máy</option>
            </select>
          </div>

          {thumbnailOption === "link" && (
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter thumbnail URL"
              {...register("thumbnail")}
            />
          )}
          {thumbnailOption === "upload" && (
            <input
              type="file"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              {...register("thumbnail")}
            />
          )}
          {thumbnailUrl && thumbnailOption === "keep" && (
            <img
              src={thumbnailUrl}
              alt="Thumbnail Preview"
              className="mt-4 max-w-full h-auto"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none"
          >
            {id ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductsForm;
