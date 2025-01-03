import { Link, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { filterByCate } from "../redux/slices/productSlice";

const ProductWrapper = ({ category, products }) => {
  const dispatch = useDispatch();

  const nav = useNavigate();
  const handleFilterCategory = () => {
    dispatch(filterByCate(category));
    nav("/products");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-5">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">{category}</h2>
      <div className="grid grid-cols-4 gap-3">
        {products
          .filter((p) => p.category === category)
          .map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 border border-gray-200 rounded-md p-4 hover:shadow-lg transition-shadow"
            >
              <ProductCard product={item} />
            </div>
          ))}
      </div>
      <div className="text-center mt-6 w-fit flex items-center mx-auto">
        <button
          className="px-6 py-3 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          onClick={handleFilterCategory}
        >
          Xem Thêm
        </button>
      </div>
    </div>
  );
};

export default ProductWrapper;
