function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between text-sm">
          <div className="mb-6 lg:mb-0">
            <h2 className="font-bold mb-2">ĐĂNG KÍ NHẬN TIN</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-md w-full max-w-xs mb-2"
              />
              <button className="bg-red-500 text-white py-2 px-4 rounded">
                ĐĂNG KÝ
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-bold mb-2">GIỚI THIỆU</h2>
            <ul className="space-y-1">
              <li>HH Store - Chuỗi Phân Phối Thời Trang Nam Chuẩn Hiệu</li>
              <li>📞 0337852638</li>
              <li>✉️ cs@160store.com</li>
              <li>🕒 Giờ mở cửa: 08:30 - 22:00</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">CHÍNH SÁCH</h3>
            <ul className="space-y-1">
              <li>Hướng dẫn đặt hàng</li>
              <li>Chính sách Ưu Đãi Sinh Nhật</li>
              <li>Chính sách Bảo Mật</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2">ĐỊA CHỈ CỬA HÀNG</h2>
            <ul className="space-y-1">
              <li>Hồ Chí Minh (10 CH)</li>
              <li>Hà Nội (2 CH)</li>
              <li>Cần Thơ (2 CH)</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
