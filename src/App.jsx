import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RegisterPage from "./page/RegisterPage";
import ProductDetail from "./page/ProductDetail";
import ProductsPage from "./page/ProductsPage";
import CartPage from "./page/CartPage";
import ProductsTable from "./admin/ProductsTable";
import ProductsForm from "./admin/ProductsForm";
import NotFoundPage from "./component/NotFoundPage";
import HomePage from "./page/HomePage";
import LayoutClient from "./layout/LayoutClient";
import LoginPage from "./page/LoginPage";
import Dasbroad from "./admin/Dasbroad";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="/admin" element={<Dasbroad />}>
          <Route index element={<ProductsTable />} />
          <Route path="product_form" element={<ProductsForm />} />
          <Route path="product_form/:id" element={<ProductsForm />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
