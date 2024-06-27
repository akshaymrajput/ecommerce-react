import React from "react";

const Skeleton = () => {
    return (
        <div className="w-72 bg-secondary-100 shadow-md rounded-xl animate-pulse">
            <div className="h-80 w-72 bg-gray-300 rounded-t-xl"></div>
            <div className="px-4 py-3 w-72">
                <div className="h-4 bg-gray-300 rounded mt-2"></div>
                <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
                <div className="flex items-center mt-3">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="ml-auto h-5 w-5 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
