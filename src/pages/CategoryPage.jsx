import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton";

const CategoryPage = () => {
    const { category } = useParams();

    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => {
                setCategoryProducts(data);
                setLoading(false);
                console.log(categoryProducts);
            });
    }, []);

    return (
        <>
            <h1 className="text-center text-xl uppercase font-bold text-white mt-10">
                Showing results for category:{" "}
                <span className="text-amber-500">{category}</span>
            </h1>
            <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {loading
                    ? Array(8)
                          .fill(0)
                          .map((_, index) => <Skeleton key={index} />)
                    : categoryProducts?.map((product) => (
                          <ProductCard key={product.id} product={product} />
                      ))}
            </div>
        </>
    );
};

export default CategoryPage;
