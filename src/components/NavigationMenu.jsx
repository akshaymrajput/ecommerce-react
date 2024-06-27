import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavigationMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    };

    const handleNavClick = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <nav className="flex sticky top-0 z-50 items-center bg-gray-800 shadow-sm text-white p-4 w-full">
            <div className="flex-1">
                <NavLink
                    to="/"
                    onClick={handleNavClick}
                    className="text-2xl hover:cursor-pointer"
                >
                    MyShop
                </NavLink>
            </div>
            <div className="block md:hidden">
                <button
                    onClick={toggleMenu}
                    className="focus:outline-none z-50 relative"
                    aria-label="toggle menu"
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
            <ul
                className={`flex flex-col md:flex-row md:space-x-4 fixed md:relative md:flex ${
                    isMenuOpen
                        ? "top-0 left-0 w-full h-full bg-gray-800 text-white p-4 z-40"
                        : "hidden"
                } md:block md:bg-transparent`}
            >
                <li className="p-2 md:p-0">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "active text-amber-500"
                                : ""
                        }
                        onClick={handleNavClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="p-2 md:p-0">
                    <NavLink
                        to="/products"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "active text-amber-500"
                                : ""
                        }
                        onClick={handleNavClick}
                    >
                        Products
                    </NavLink>
                </li>
                <li className="p-2 md:p-0">
                    <NavLink
                        to="/cart"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                ? "active text-amber-500"
                                : ""
                        }
                        onClick={handleNavClick}
                    >
                        Cart
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
