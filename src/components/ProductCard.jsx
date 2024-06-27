import React from "react";
import { BsBagPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            toast.warn("Product already in cart!");
        } else {
            dispatch({ type: "ADD_TO_CART", payload: product });
            toast.success("Item added to cart!");
        }
    };
    return (
        <div className="w-72 bg-gray-800 text-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link to={`/products/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-72 object-cover rounded-t-xl"
                />
            </Link>
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.category}
                </span>
                <p className="text-lg font-bold text-white truncate block capitalize">
                    {product.title}
                </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-white cursor-auto my-3">
                        ${product.price}
                    </p>
                    <div
                        className="ml-auto hover:cursor-pointer hover:scale-150 transition-transform"
                        onClick={() => addToCart(product)}
                    >
                        <BsBagPlus />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
