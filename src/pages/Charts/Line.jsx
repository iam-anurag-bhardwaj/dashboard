import React from "react";

import { ChartsHeader, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-2 md:m-4 md:ml-6 mt-20 p-2 md:p-6 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate " />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
