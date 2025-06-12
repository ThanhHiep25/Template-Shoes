
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'; // OrbitControls cho phép xoay, useGLTF để tải model
import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';


// Component để tải và hiển thị mô hình xe hơi
interface ShoesModelProps {
    modelPath: string;
}

function CarModel({ modelPath }: ShoesModelProps) {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} />;
}

// Biến thể cho animation của section
const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variants cho tiêu đề hoặc logo
const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 0.5
        }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

const Shoes3DViewer: React.FC = () => {
    // Đặt đường dẫn đến file .glb của bạn trong thư mục public

    const shoes = [
        {
            id: 1,
            name: "Air Jordan 1 Mid",
            price: "3.000.000 VND",
            image: "/shoes1.jpg",
            modelPath: "/base_basic_pbr.glb",
        },
        {
            id: 2,
            name: "Nike Vomero 18",
            price: "2.000.000 VND",
            image: "/shoes2.jpg",
            modelPath: "/base_basic_pbr2.glb",
        },
        {
            id: 3,
            name: "Nike Court Vision",
            price: "1.500.000 VND",
            image: "/shoes3.jpg",
            modelPath: "/base_basic_pbr3.glb",
        },
    ]
    // const shoesModelPath = "/base_basic_pbr.glb";
    // const shoesModelPath2 = "/base_basic_pbr2.glb";
    // const shoesModelPath3 = "/base_basic_pbr3.glb";

    const [currentModel, setCurrentModel] = useState(shoes[0].modelPath);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"

            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className=" text-center">


                <motion.div
                    className="relative w-full h-[90vh] mt-[5rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }}
                    viewport={{ once: true, amount: 0.5 }}

                >
                    <motion.i
                        key="intro-title"
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        className="
                            absolute sm:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            font-bold text-[200px] md:text-[400px] lg:text-[600px] 
                            text-transparent 
                            bg-clip-text 
                            bg-gradient-to-tl from-black via-gray-700 to-gray-100
                            shadow-2xl
                            shadow-blue-300
                            rounded-b-full
                            whitespace-nowrap
                          ] 
                            drop-shadow-lg 
                            kavoon-regular
                        "
                    >
                        Nike
                    </motion.i>
                    <Canvas camera={{ position: [8, 2, 12], zoom: 8 }} >
                        {/* Ánh sáng để mô hình hiển thị rõ */}
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

                        {/* Tải và hiển thị mô hình */}
                        <Suspense fallback={null}>
                            <CarModel modelPath={currentModel} />
                        </Suspense>
                        {/* OrbitControls cho phép người dùng xoay, phóng to/thu nhỏ bằng chuột */}
                        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
                    </Canvas>


                        {/* Biến thể cho mô hình */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex sm:flex-row flex-col justify-center gap-4 sm:mb-6">
                        <button
                            onClick={() => setCurrentModel(shoes[0].modelPath)}
                            className={`group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-indigo-500/20 bg-gradient-to-br from-indigo-900/20 via-black-900/20 to-black/20 shadow-2xl hover:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden ${currentModel === shoes[0].modelPath
                                ? "bg-black/50 text-white border-yellow-400/60"
                                : ""
                                }`}

                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                            ></div>

                            <div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div className="relative z-10 flex items-center gap-4">

                                <div className="flex-1 text-left">
                                    <p
                                        className="text-indigo-400 font-bold text-lg group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm"
                                    >
                                        {shoes[0].name}
                                    </p>

                                </div>

                            </div>
                        </button>

                        <button
                            onClick={() => setCurrentModel(shoes[1].modelPath)}
                            className={`group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-indigo-500/20 bg-gradient-
                                to-br from-indigo-900/20 via-black-900/20 to-black/20 shadow-2xl hover:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden 
                                ${currentModel === shoes[1].modelPath
                                ? "bg-black/50 text-white border-yellow-400/60"
                                : ""
                                }`}

                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                            ></div>

                            <div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div className="relative z-10 flex items-center gap-4">

                                <div className="flex-1 text-left">
                                    <p
                                        className="text-indigo-400 font-bold text-lg group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm"
                                    >
                                        {shoes[1].name}
                                    </p>

                                </div>

                            </div>
                        </button>


                          <button
                            onClick={() => setCurrentModel(shoes[2].modelPath)}
                            className={`group relative p-4 rounded-2xl backdrop-blur-xl border-2
                                 border-indigo-500/20 bg-gradient-to-br from-indigo-900/20 via-black-900/20 to-black/20 
                                 shadow-2xl hover:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95
                                  transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden ${currentModel === shoes[2].modelPath
                                ? "bg-black/50 text-white border-yellow-400/60"
                                : ""
                                }`}

                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent -translate-x-full 
                                group-hover:translate-x-full transition-transform duration-1000 ease-out"
                            ></div>

                            <div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div className="relative z-10 flex items-center gap-4">

                                <div className="flex-1 text-left">
                                    <p
                                        className="text-indigo-400 font-bold text-lg group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm"
                                    >
                                        {shoes[2].name}
                                    </p>

                                </div>
                               
                            </div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Shoes3DViewer;