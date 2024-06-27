import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/category/${category}`}>
            <div className="w-60 h-48 bg-gray-600 text-xl font-bold text-white uppercase flex justify-center items-center rounded-lg shadow-lg hover:bg-gray-500 cursor-pointer transition-colors m-2">
                {category}
            </div>
        </Link>
    );
};

export default CategoryCard;
