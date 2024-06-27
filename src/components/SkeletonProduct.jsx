import React from "react";

const SkeletonProduct = () => {
    return (
        <div className="container mx-auto p-4 animate-pulse">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                <div className="w-full aspect-square lg:w-1/2 xl:h-[650px] lg:h-[500px] h-[400px] bg-gray-300 rounded-lg"></div>
                <div className="mt-4 lg:mt-0 w-full lg:w-1/2">
                    <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-20 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="h-12 bg-gray-300 rounded w-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProduct;
