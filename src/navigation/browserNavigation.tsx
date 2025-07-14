import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/home"
import Menu from "../components/Menu/menu"
import Intro from "../pages/Intro/intro"
import Footer from "../components/footer/Footer"
import { useEffect, useState } from "react"
import { ChevronUp, MessageSquare } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import ChatPopup from "../components/chatbot/ChatPopup"


const BrowserNavigation = () => {

    const [showTop, setShowTop] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [isChatPopUpOpen, setIsChatPopUpOpen] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
            setShowChat(window.scrollY > 900);

            if (isChatPopUpOpen) {
                setIsChatPopUpOpen(true);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isChatPopUpOpen])


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    const toggleChatPopup = () => {
        setIsChatPopUpOpen(!isChatPopUpOpen);
    }

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Intro />} />
            </Routes>


            {/* Hiển thị chatbot  */}
            {
                showChat && (
                    <button
                        onClick={toggleChatPopup}
                        className="fixed bottom-30 right-8 z-50 bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full shadow-xl border-4 border-white animate-bounce-slow transition-all duration-300 flex items-center justify-center group"
                        aria-label="Trở về đầu trang"
                        style={{
                            boxShadow: "0 4px 24px 0 rgba(255, 193, 7, 0.4)",
                        }}
                    >
                        <MessageSquare size={20} className="group-hover:scale-110 transition-transform duration-300" />

                    </button>
                )
            }

            <AnimatePresence>
                {
                    isChatPopUpOpen && (
                        <ChatPopup onClose={toggleChatPopup} />
                    )
                }
            </AnimatePresence>

            {/* Hiển thị scroll top */}
            {showTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-amber-400 hover:bg-amber-500 text-white p-2 rounded-full shadow-xl border-4 border-white animate-bounce-slow transition-all duration-300 flex items-center justify-center group animate-bounce"
                    aria-label="Trở về đầu trang"
                    style={{
                        boxShadow: "0 4px 24px 0 rgba(255, 193, 7, 0.4)",
                    }}
                >
                    <ChevronUp size={32} className="group-hover:scale-110 transition-transform duration-300" />

                </button>
            )}
            <Footer />

        </BrowserRouter>
    )
}

export default BrowserNavigation