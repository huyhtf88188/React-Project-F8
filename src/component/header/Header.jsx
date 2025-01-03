import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { carts } = useSelector((state) => state.carts);

  const toggleOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const { email, role } = JSON.parse(localStorage.getItem("user") || "[]");
  const indexName = email && email.indexOf("@");
  const name = email && email.slice(0, indexName);
  return (
    <>
      <header className="bg-black text-white">
        <div className="flex justify-between items-center px-4 py-2 text-sm bg-gray-800">
          <div className="overflow-hidden whitespace-nowrap w-full relative">
            <div className="flex gap-20 animate-marquee">
              <span>🔥 GIẢM 30% KHI MUA 02 QUẦN JEAN</span>
              <span>FREESHIP ĐƠN TỪ 399K</span>
              <span>FREESHIP ĐƠN TỪ 399K</span>
              <span>FREESHIP ĐƠN TỪ 399K</span>
            </div>
          </div>
        </div>
        <nav className="flex container mx-auto items-center justify-between px-6 py-6  shadow-lg">
          <div className="text-2xl font-bold">HH STORE</div>

          <ul className="flex space-x-6 text-sm relative">
            <li className="relative group">
              <a href="#" className="hover:text-orange-500">
                HÀNG MỚI
              </a>
            </li>

            <li className="relative group">
              <a href="#" className="hover:text-orange-500">
                SẢN PHẨM
              </a>
              <ul className="absolute w-40 left-0 top-full hidden group-hover:flex flex-col bg-gray-800 text-white border border-gray-700 shadow-lg space-y-2 mt-2 p-2 z-10">
                <li className="px-4 py-1 hover:bg-gray-700">Tất Cả Sản Phẩm</li>
                <li className="px-4 py-1 hover:bg-gray-700">Hàng Bán Chạy</li>
                <li className="px-4 py-1 hover:bg-gray-700">Áo</li>
                <li className="px-4 py-1 hover:bg-gray-700">Quần</li>
                <li className="px-4 py-1 hover:bg-gray-700">Phụ Kiện</li>
              </ul>
            </li>

            <li className="relative group">
              <a href="#" className="hover:text-orange-500">
                ÁO NAM
              </a>
              <ul className="absolute w-40 left-0 top-full hidden group-hover:flex flex-col bg-gray-800 text-white border border-gray-700 shadow-lg space-y-2 mt-2 p-2 z-10">
                <li className="px-4 py-1 hover:bg-gray-700">Áo Thun</li>
                <li className="px-4 py-1 hover:bg-gray-700">Áo Polo</li>
                <li className="px-4 py-1 hover:bg-gray-700">Áo Sơ Mi</li>
                <li className="px-4 py-1 hover:bg-gray-700">Áo Khoác</li>
              </ul>
            </li>

            <li className="relative group">
              <a href="#" className="hover:text-orange-500">
                QUẦN NAM
              </a>
              <ul className="absolute w-40 left-0 top-full hidden group-hover:flex flex-col bg-gray-800 text-white border border-gray-700 shadow-lg space-y-2 mt-2 p-2 z-10">
                <li className="px-4 py-1 hover:bg-gray-700">Quần Jeans</li>
                <li className="px-4 py-1 hover:bg-gray-700">Quần Tây</li>
                <li className="px-4 py-1 hover:bg-gray-700">Quần Short</li>
              </ul>
            </li>

            <li className="relative group">
              <a href="#" className="hover:text-orange-500">
                PHỤ KIỆN
              </a>
              <ul className="absolute w-40 left-0 top-full hidden group-hover:flex flex-col bg-gray-800 text-white border border-gray-700 shadow-lg space-y-2 mt-2 p-2 z-10">
                <li className="px-4 py-1 hover:bg-gray-700">Thắt Lưng</li>
                <li className="px-4 py-1 hover:bg-gray-700">Ví Da</li>
                <li className="px-4 py-1 hover:bg-gray-700">Nón</li>
              </ul>
            </li>
          </ul>

          <div className="flex space-x-4 items-center">
            <input
              type="text"
              placeholder="Bạn đang tìm gì..."
              className="px-4 py-1 rounded-full text-black"
            />

            {email ? (
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded={isOptionsOpen}
                    aria-haspopup="true"
                    onClick={toggleOptions}
                  >
                    <FaUser />

                    <svg
                      className="-mr-1 size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${
                    isOptionsOpen ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <div
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      {name}
                    </div>
                    {role && role === "admin" && (
                      <Link
                        to="/product_table"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        Trang Cài Đặt
                      </Link>
                    )}

                    <Link
                      to=""
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Thông Tin Người Dùng
                    </Link>

                    <form method="GET" action="/" role="none">
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                        onClick={() => localStorage.clear()}
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hover:text-orange-500">
                Đăng Nhập
              </Link>
            )}
            <div className="relative">
              <Link
                to="/cart"
                className="hover:text-orange-500 text-xl flex items-center"
              >
                <FaCartShopping />
                {email && (
                  <span className="absolute -top-4 -right-5 text-xs font-bold text-white bg-red-500 w-5 h-5 flex items-center justify-center rounded-full shadow-md border border-white">
                    {carts.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
