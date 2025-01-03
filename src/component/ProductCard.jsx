import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition mb-5">
        <div className="relative">
          <img
            className="w-full h-48 object-cover rounded-md"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <h3 className="mt-4 text-sm font-medium text-gray-800">
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-semibold text-red-600">
          {product.price} VNĐ
        </p>
        <Link
          to={`/products/${product.id}`}
          className="px-6 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition block text-center mt-4"
        >
          Xem Chi Tiết
        </Link>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    flashSale: PropTypes.bool,
  }).isRequired,
};

export default ProductCard;
