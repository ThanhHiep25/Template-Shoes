import React, { useState } from "react"; // Import useState
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

const menuItems = [
    { label: "Home", target: "home" },
    { label: "Specifications", target: "specifications" },
    { label: "Design", target: "design" },
    { label: "Opening time", target: "opening" },
    { label: "3D Viewer", target: "viewer" } // Thêm mục 3D Viewer nếu bạn có component đó
];

const buttonVariants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    hover: { scale: 1.13, boxShadow: "0px 4px 20px 0px rgba(99,102,241,0.25)" },
    tap: { scale: 0.97 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, type: "spring", stiffness: 300 }
    }),
    hidden: { opacity: 0, y: -20 }
};

// Variants cho menu mobile overlay
const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } }
};

// Variants cho từng item trong menu mobile (để tạo hiệu ứng xếp tầng)
const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State để quản lý menu mobile

    const handleScroll = (target: string) => {
        const el = document.getElementById(target);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // Đóng menu mobile sau khi click
        }
    };

    return (
        <div className=" backdrop-blur-sm h-20 flex justify-between items-center p-3 sticky top-0 z-50 text-white shadow-lg"> {/* Tăng z-index lên 50 */}
            {/* Logo và tên thương hiệu */}
            <div className="flex items-center gap-2 justify-center ml-3">
                <img src='/nike.png' alt="logo" className="w-8 h-8" />
                <span className="font-bold text-2xl text-gray-400">|</span> {/* Thay đổi màu sắc của | để phù hợp với nền tối */}
                <i className="font-bold text-2xl">Nike</i>
            </div>

            {/* Menu trên Desktop (hiện từ màn hình md trở lên) */}
            <div className="hidden md:flex items-center justify-center gap-4 mr-10">
                {menuItems.map((item, i) => (
                    <motion.button
                        key={item.label}
                        className="h-full font-bold text-lg px-4 py-1 rounded-lg relative overflow-hidden hover:text-white bg-transparent transition-colors duration-200" // bg-black/20 thay bằng bg-transparent
                        variants={buttonVariants}
                        initial="hidden"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                        custom={i}
                        onClick={() => handleScroll(item.target)}
                    >
                        {item.label}
                    </motion.button>
                ))}
            </div>

            {/* Nút Hamburger cho Mobile (hiện trên màn hình md trở xuống) */}
            <div className="md:hidden mr-3">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-20 left-0 w-full z-40 flex flex-col items-center justify-center space-y-8 md:hidden bg-black/80"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {menuItems.map((item, i) => (
                            <motion.button
                                key={item.label}
                                className="text-lg font-bold text-white py-2 w-full text-center hover:bg-white hover:text-black transition-colors duration-300"
                                variants={mobileMenuItemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i} // Dùng custom để stagger delay
                                onClick={() => handleScroll(item.target)}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Menu;