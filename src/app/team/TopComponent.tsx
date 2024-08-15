import React from 'react';

const TopComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-32 p-4">
            <div className="text-center">
                <div className="inline-flex items-center bg-white rounded-full px-4 py-1 shadow-sm mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 font-medium text-sm">OUR TEAM</span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
                </div>

                <h1 className="text-5xl font-bold mb-4">
                    <span className="text-orange-500">Team</span>
                    <span className="text-black"> Members</span>
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our IT team thrives on innovation and collaboration, combining diverse skills to solve complex problems and drive our organization forward.
                </p>
            </div>
        </div>
    );
};

export default TopComponent;