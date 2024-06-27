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
                <h1 className="text-4xl text-center">Elevate Your Everyday</h1>
                <div>
                    <Button
                        className="bg-amber-500 hover:bg-amber-700"
                        onClick={handleClick}
                        aria-label="Explore products"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
