import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                console.log(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center p-10 w-full min-h-fit bg-gray-800">
            <h2 className="text-2xl text-white uppercase font-bold mb-8">
                Shop by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {loading
                    ? Array(4)
                          .fill(0)
                          .map((_, index) => {
                              return (
                                  <div
                                      className="w-60 h-48 bg-gray-600 text-xl font-bold text-white uppercase flex justify-center items-center rounded-lg shadow-lg hover:bg-gray-500 cursor-pointer transition-colors m-2 animate-pulse"
                                      key={index}
                                  >
                                      <div className="h-6 bg-gray-300 rounded-lg w-2/3"></div>
                                  </div>
                              );
                          })
                    : categories.map((category) => (
                          <CategoryCard key={category} category={category} />
                      ))}
            </div>
        </div>
    );
};

export default Category;
