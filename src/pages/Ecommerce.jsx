import React from "react";
import { GoDiamond } from "react-icons/go";
import { Stacked, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-4">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-38 rounded-xl w-full md:w-60 p-4 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">₹62,486.87</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            ></Button>
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-3 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-44 p-4 pt-7 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-center">
            <p className="font-semibold text-xl md:mr-44 mr-28">Revenue Updates</p>
            <div className="flex items-center gap-6 ">
              <p className="flex items-center gap-2 text-red-600 hover:drop-shadow-xl">
                <span>
                  <GoDiamond />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-500 hover:drop-shadow-xl">
                <span>
                  <GoDiamond />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-8 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-9">
              <div>
                <p>
                  <span className="text-2xl font-semibold">₹93,484</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    24%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-2xl font-semibold">₹43,484</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-4 -ml-3">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="70px"
                  width="220px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-5 ml-4">
                <Button
                  bgColor={currentColor}
                  color="white"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="300px" height="340px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
