import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {" "}
            <h1 className="text-center text-xl uppercase font-bold text-white">
                All Products
            </h1>
            <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {loading
                    ? Array(10)
                          .fill(0)
                          .map((_, index) => <Skeleton key={index} />)
                    : products.map((product) => (
                          <ProductCard key={product.id} product={product} />
                      ))}
            </div>
        </>
    );
};

export default ProductListingPage;
