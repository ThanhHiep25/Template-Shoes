import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Intro: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/home');
        }, 8000);
        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <div className="relative w-full h-screen mt-[-5rem]" >
            <video src="/Nikeintro.mp4"
                autoPlay
                loop
                muted
                className="w-full h-screen object-cover"
            />

            <p className="absolute bottom-10 right-0 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white">cre-intro: Jolly Motion®</p>
        </div>
    )
}

export default Intro