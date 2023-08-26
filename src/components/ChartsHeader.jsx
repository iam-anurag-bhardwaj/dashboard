import React from "react";

const ChartsHeader = ({ category, title }) => {
  return (
    <div className="mb-6">
      <div>
        <p className="text-lg text-gray-400">Chart</p>
        <p className="text-3xl ml-6 font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
          {category}
        </p>
      </div>
      <p className="text-center dark:text-gray-100 text-xl mb-2 mt-2">
        {title}
      </p>
    </div>
  );
};

export default ChartsHeader;
