import { Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import { ToastContainer } from "react-toastify";
import ProductsTable from "./admin/ProductsTable";
import ProductsForm from "./admin/ProductsForm";
import ProductDetail from "./page/ProductDetail";
import LayoutClient from "./page/LayoutClient";
import HomePage from "./page/HomePage";
import NotFoundPage from "./component/NotFoundPage";
import CartPage from "./page/CartPage";
import ProductsPage from "./page/ProductsPage";
import LoginPage from "./page/RegisterPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/product_table" element={<ProductsTable />} />
        <Route path="/product_form" element={<ProductsForm />} />
        <Route path="/product_form/:id" element={<ProductsForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

/**
 * Services thaajt
 */
