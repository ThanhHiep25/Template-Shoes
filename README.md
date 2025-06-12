# 👟 Nike 3D Viewer Experience
Một dự án React hiện đại được xây dựng với Vite, Tailwind CSS và React Three Fiber, trình bày các mẫu giày Nike 3D một cách tương tác và mượt mà. Dự án này tập trung vào việc tạo ra trải nghiệm xem sản phẩm 3D hấp dẫn với các animation mượt mà sử dụng Framer Motion và khả năng responsive cho các thiết bị di động.

## 🚀 Tính năng
Trình xem mô hình 3D tương tác: Xem các mẫu giày 3D chi tiết với khả năng xoay, phóng to/thu nhỏ.
Chuyển đổi mô hình mượt mà: Dễ dàng chuyển đổi giữa nhiều mẫu giày 3D khác nhau bằng các nút điều khiển, với hiệu ứng chuyển đổi mượt mà sử dụng Framer Motion.
Thiết kế Responsive: Giao diện được tối ưu hóa để hiển thị đẹp mắt và hoạt động tốt trên mọi kích thước màn hình, từ desktop đến thiết bị di động.
Animation động: Sử dụng Framer Motion để tạo các hiệu ứng animation thu hút cho các phần tử UI và chuyển đổi giữa các mô hình 3D.
Tích hợp Tailwind CSS: Dễ dàng tùy chỉnh và mở rộng phong cách với các tiện ích của Tailwind CSS.
Font chữ tùy chỉnh: Tích hợp font chữ Kaushan Script để tạo điểm nhấn độc đáo cho thương hiệu Nike.
## ✨ Công nghệ sử dụng
React: Thư viện JavaScript để xây dựng giao diện người dùng.
Vite: Công cụ build nhanh và nhẹ cho các dự án web hiện đại.
React Three Fiber: Wrapper React cho Three.js, giúp dễ dàng tạo các cảnh 3D với cú pháp React.
Drei: Thư viện tiện ích hữu ích cho React Three Fiber (ví dụ: OrbitControls, useGLTF).
Framer Motion: Thư viện React mạnh mẽ để tạo animation.
Tailwind CSS: Framework CSS tiện ích giúp xây dựng giao diện nhanh chóng và linh hoạt.
## 📦 Cài đặt
Để chạy dự án này trên máy cục bộ của bạn, hãy làm theo các bước sau:

### Clone repository:

Bash

    git clone <URL_CỦA_REPOSITORY_CỦA_BẠN>
    cd <TÊN_THƯ_MỤC_DỰ_ÁN>

Cài đặt các dependency:

Bash

    npm install
    # hoặc
    yarn install
### Đặt các file mô hình 3D:
Đảm bảo các file mô hình .glb của bạn (ví dụ: base_basic_pbr.glb, base_basic_pbr2.glb, base_basic_pbr3.glb) được đặt trong thư mục public của dự án.

    your-project/
    ├── public/
    │   ├── base_basic_pbr.glb
    │   ├── base_basic_pbr2.glb
    │   └── base_basic_pbr3.glb
    ├── src/
    │   └── ... (các file code của bạn)
    └── ... (các file cấu hình khác)
## 🏃 Cách chạy dự án
Sau khi cài đặt xong, bạn có thể chạy dự án bằng lệnh:

Bash

    npm run dev
    # hoặc
    yarn dev
Dự án sẽ mở tại http://localhost:5173 (hoặc một cổng khác nếu 5173 đã được sử dụng) trong trình duyệt của bạn.

## 🛠️ Cấu trúc dự án chính
src/App.tsx: Component chính của ứng dụng.

src/components/Menu.tsx: Component thanh điều hướng responsive.

src/components/Shoes3DViewer.tsx: Component chính để hiển thị các mô hình 3D và các nút điều khiển.

public/: Chứa các tài nguyên tĩnh như file mô hình 3D (.glb) và hình ảnh.

src/index.css: File CSS chính, nơi Tailwind CSS được import và font chữ tùy chỉnh được khai báo.

index.html: File HTML gốc, nơi các thẻ <link> của Google Fonts được nhúng.


## 🌐 Các phần được xây dựng trong dự án

Responsive Navbar: Thanh điều hướng được thiết kế lại để hoạt động tốt trên cả desktop và mobile, với nút hamburger và menu overlay.

Multiple 3D Models Viewer: Trình xem 3D cho phép chuyển đổi giữa nhiều mô hình giày khác nhau, với hiệu ứng chuyển đổi mượt mà nhờ AnimatePresence của Framer Motion.

Dynamic Model Selector Buttons: Các nút điều khiển được thiết kế responsive, tự động điều chỉnh kích thước và vị trí trên các kích thước màn hình khác nhau, mang lại trải nghiệm người dùng tốt hơn.

Custom Font Integration: Hướng dẫn chi tiết cách thêm và sử dụng font chữ tùy chỉnh từ Google Fonts trong dự án Vite và Tailwind CSS, xử lý các lỗi thường gặp (@import order).

## 🍃 Hiện thực 

----------- Phần hiển thị 1 -------------------------------------------------------------------------

[ALIS-tech-mac.webm](https://github.com/user-attachments/assets/1c96a8ad-3fa0-42e3-b11e-15cbcbbdb31a)

----------- Phần hiển thị 2 -------------------------------------------------------------------------

[ALIS-tech-mac2.webm](https://github.com/user-attachments/assets/29b464ca-2604-4cd9-9a7b-7f5fcb0f788e)


#### Mobile

[ALIS-tech-mobile.webm](https://github.com/user-attachments/assets/055cf851-ab49-49c6-8e75-aee853e087d8)


# 📞 Liên Hệ
Nếu bạn có thắc mắt hay muốn làm lading page như này hãy liên hệ tôi để chúng ta có thể trao đổi thêm

    Email: hiepnguyen.250402@gmail.com
    Điện thoại: 0866853100
📄 Giấy Phép
Dự án này được cấp phép theo giấy phép MIT.
