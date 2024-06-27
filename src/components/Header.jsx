import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/products");
    };

    return (
        <div className="relative">
            <div className="w-full h-80 flex flex-col gap-10 justify-center items-center p-12 bg-slate-600 text-white">
                <h1 className="text-4xl">Elevate Your Everyday</h1>
                <div>
                    <Button
                        className="bg-amber-500 hover:bg-amber-700"
                        onClick={handleClick}
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;

/*
<div
    className="relative w-full h-screen bg-cover bg-center"
    style={{
        backgroundImage:
            "url(https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)",
    }}
>
    <div className="absolute inset-0 bg-text-50 opacity-50"></div>
    <div className="absolute inset-0 bg-text-100 opacity-30"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Style
        </h1>
        <p className="text-lg md:text-2xl mb-8">
            Find the best outfits for every occasion
        </p>
        <div className="flex gap-4">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Shop Now
            </Button>
            <Button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
                Learn More
            </Button>
        </div>
    </div>
</div>
*/
