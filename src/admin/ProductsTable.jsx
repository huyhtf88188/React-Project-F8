import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productAction";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gray-100 p-6 ">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Trang Quản Lý Sản Phẩm
      </h1>
      <div className=" mt-5 mb-5 flex items-center justify-center gap-1">
        <Link
          to="/admin/product_form"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Products
        </Link>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Go Back Home Page
        </Link>
      </div>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-center">ID</th>
                <th className="py-3 px-6 text-center">Title</th>
                <th className="py-3 px-6 text-center">Price</th>
                <th className="py-3 px-6 text-center">Description</th>
                <th className="py-3 px-6 text-center">Img</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-md font-normal">
              {products &&
                products.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left">{item.id}</td>
                      <td className="py-3 px-6 text-left">{item.title}</td>
                      <td className="py-3 px-6 text-left">{item.price}</td>
                      <td className="py-3 px-6 text-left">
                        {item.description_1}
                      </td>
                      <td className="py-3 px-6 text-left">
                        <img src={item.thumbnail} alt="" />
                      </td>
                      <td className="py-10 px-6 text-left flex gap-2 ">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2">
                          Remove
                        </button>
                        <Link
                          to={`/admin/product_form/${item.id}`}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                          Update
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductsTable;
