import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SkeletonProduct from "../components/SkeletonProduct";
import Button from "../components/Button";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            toast.warn("Product already in cart!");
        } else {
            dispatch({ type: "ADD_TO_CART", payload: product });
            toast.success("Item added to cart!");
        }
    };

    if (loading) {
        return <SkeletonProduct />;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg aspect-square"
                />
                <div className="mt-4 lg:mt-0 w-full">
                    <h1 className="text-4xl font-bold text-white">
                        {product.title}
                    </h1>
                    <p className="text-4xl font-semibold text-amber-500 mt-2">
                        ${product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-300 mt-4 break-all">
                        {product.description}
                    </p>
                    <Button
                        onClick={() => addToCart(product)}
                        className="mt-4 bg-amber-500 hover:bg-amber-700 text-white px-6 py-2 "
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
