import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/home"
import Menu from "../components/Menu/menu"
import Intro from "../pages/Intro/intro"
import Footer from "../components/footer/Footer"


const BrowserNavigation = () => {
    
    return (
        <BrowserRouter>
                <Menu/>
                <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="*" element={<Intro />} />
                </Routes>
                <Footer/>
        </BrowserRouter>        
    )
}

export default BrowserNavigation