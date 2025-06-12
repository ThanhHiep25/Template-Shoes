import { motion } from "framer-motion"
import Shoes3DViewer from "../Shoes3D/shoes"


const Home: React.FC = () => {
    return (
        <div className="w-full mt-[-5rem]">
            <section className="relative w-full h-screen bg-gradient-to-tl from-black via-gray-700 to-gray-100
            flex items-center justify-center
            ">
                <motion.div className="relative w-full h-screen">             
                    <Shoes3DViewer/>
                </motion.div>
            </section>
        </div>
    )
}

export default Home