import { motion } from "framer-motion";
import Shoes3DViewer from "../Shoes3D/shoes";
import Na1Yellow from "../../assets/NA-J1M-Red-removebg.png";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";

import na1 from "../../assets/NA-J1M-Red-removebg.png";
import na2 from "../../assets/NA-J1M-Blue-removebg.png";
import na3 from "../../assets/NA-J1M-removebg.png";
import na4 from "../../assets/NA-J1M-3-removebg.png";

// Dữ liệu cho các card thiết kế
const designCards = [
  { id: 1, src: na1, alt: "Nike Air Jordan 1 Red", title: "Classic Red Edition" },
  { id: 2, src: na2, alt: "Nike Air Jordan 1 Blue", title: "Deep Blue Variant" },
  { id: 3, src: na3, alt: "Nike Air Jordan 1 White", title: "Monochrome White" },
  { id: 4, src: na4, alt: "Nike Air Jordan 1 Green", title: "Forest Green Style" }, // Giả sử na4 là màu xanh lá
];


const Home: React.FC = () => {
  
  return (
    <div className="w-full mt-[-5rem] bg-gradient-to-tl from-black via-gray-700 to-gray-100">
      {/* Banner Section */}
      <section id="home" className="w-full h-screen flex md:flex-row flex-col items-center justify-center md:gap-0 gap-2 relative overflow-hidden">
        <div className="pointer-events-none absolute h-full top-0 left-0 w-full bg-gradient-to-r from-black/60 via-blue-500 to-transparent"></div>
        <div className="pointer-events-none absolute h-full top-0 left-0 w-full bg-gradient-to-r from-black/70 via-blue-500/10 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col w-full md:mt-[-6rem] font-[Poppins] mt-20 md:ml-8 ml-10 z-1 md:w-1/2 max-w-lg px-4 md:px-0"
        >
          <i className="md:text-[12rem] text-[8rem] bitcount-grid-double text-white ">Nike
          </i>
          <span className="text-xl font-bold text-gray-400 roboto">
            Air Jordan 1 Mid
          </span>
          <p className="text-3xl font-bold text-white bg-clip-text roboto">Just do it !</p>

          <button className="w-1/2 mt-10 bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-4 text-lg rounded-full transition-all cursor-pointer">
            View Detail
          </button>
        </motion.div>

        <div className="pointer-events-none fixed w-[800px] h-[800px] top-[80%] border-dashed animate-spin transform -translate-y-1/2 right-[-100px] border-4 border-amber-50 rounded-full opacity-50"></div>

        <motion.div
          className="relative flex items-center justify-center w-full max-w-2xl">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 , rotate: 30}}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            src={Na1Yellow}
            alt="Nike JD1M"
            className="md:w-full mr-20 md:h-[780px] rotate-[-30deg] drop-shadow-xl"
          />
          <div className="pointer-events-none absolute h-full top-20 left-0 w-full bg-black blur-3xl opacity-20"></div>
        </motion.div>
      </section>

      {/* 3D Viewer Section */}
      <section id="viewer" className="relative w-full h-screen bg-gradient-to-tl from-black via-gray-700 to-gray-100 flex items-center justify-center">
        <motion.div className="relative w-full h-screen">
          <Shoes3DViewer />
        </motion.div>
      </section>

      {/* Collection Section - Animations added */}
      <section id="collection" className="w-full h-screen flex md:flex-row flex-col items-center justify-center md:gap-0 gap-40">
        <motion.div
          className="flex w-full z-1 md:flex-row flex-col px-4 md:p-40 max-w-lg md:max-w-full gap-2"
        >
          <div className="w-full">
            <motion.img
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              src={banner1} className="w-full md:h-80 h-60" alt="Jodan1" />

            <motion.img
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 1, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              src={banner2} className="w-full md:h-80 h-60 " alt="Jodan2" />
          </div>
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ opacity: 0, y: -100 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 1, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              src={banner3} className="w-1/2 md:h-80 h-60" alt="Jodan3" />

            <motion.img
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 1, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              src={banner4} className="w-1/2 md:h-80 h-60" alt="Jodan4" />
          </div>
        </motion.div>
      </section>

      <section id="design" className="w-full min-h-screen py-20 bg-gradient-to-tl from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-white mb-16 text-center">
          Explore Our Designs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {designCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300"
            >
              <img src={card.src} alt={card.alt} className="w-full h-64 object-cover object-center" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm">Experience the unique blend of style and comfort.</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition-colors duration-300">
                  Discover More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;