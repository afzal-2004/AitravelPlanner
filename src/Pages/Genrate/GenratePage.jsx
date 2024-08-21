/* eslint-disable react/prop-types */
import { GiReceiveMoney, GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { PiBeerBottle } from "react-icons/pi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaUsers, FaUntappd, FaArrowRight } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import { LuLoader2 } from "react-icons/lu";

export const GenratePage = ({
  HandelSumbit,
  setplace,
  setdays,
  setbudget,
  setperson,
  loader,
  TripPlan,
}) => {
  const data = [
    {
      icon: <GiReceiveMoney className="text-[70px]" />,
      Text: "Low",
      Expences: "1k$ - 2k$ ",
    },
    {
      icon: <GiMoneyStack className="text-[70px]" />,
      Text: "Moderate",
      Expences: "2.5k$ - 5k$ ",
    },
    {
      icon: <GiTakeMyMoney className="text-[70px]" />,
      Text: "High ",
      Expences: " 5.5k$ - 10k$ ",
    },
    {
      icon: <GrMoney className="text-[70px]" />,
      Text: "Luxcery",
      Expences: "10K$ Above ",
    },
  ];

  const travelingdata = [
    {
      icon: <PiBeerBottle className="text-[70px]" />,
      Text: "Single",
      Person: "1",
    },
    {
      icon: <FaUntappd className="text-[70px]" />,
      Text: "Couple",
      Person: "2",
    },
    {
      icon: <MdOutlineFamilyRestroom className="text-[70px]" />,
      Text: "Family",
      Person: "3 to 5",
    },
    {
      icon: <FaUsers className="text-[70px]" />,
      Text: "Freinds",
      Person: "5 to 10",
    },
  ];

  const [SelectBudget, setSelectBudget] = useState(null);
  const [SelectPerson, setSelectPerson] = useState(null);

  return (
    <>
      <div className=" flex flex-col items-center min-h-[95vh]  mt-[5vh]">
        <ToastContainer />
        <h1 className=" text-[22px] sm:text-[27px] font-bold">
          {" "}
          Tell Us your Travel Prefrences
        </h1>
        <p className=" text-[18px]  sm:text-[20px] font-semibold">
          Just Provide Some Baisc information
        </p>
        <form
          className=" w-full xl:w-[50%] text-[18px] font-semibold  "
          onSubmit={HandelSumbit}
        >
          <div className=" m-3">
            <label htmlFor="Destination">Choose Your desination</label>
            <input
              type="text"
              placeholder="Dubai"
              className="w-full p-2 rounded-md outline-none"
              onChange={(e) => {
                e.target.value;
                setplace(e.target.value);
              }}
            />
          </div>
          <div className=" m-3">
            <label htmlFor="Destination">How Many days Trip Planning </label>
            <input
              type="Number"
              placeholder="Ex.5"
              min={1}
              className="w-full p-2 rounded-md outline-none"
              onChange={(e) => {
                e.target.value;
                setdays(e.target.value);
              }}
            />
          </div>
          <div className="m-3">
            <label htmlFor="Destination"> What is Your Budget </label>
            <div
              className={`flex flex-wrap  gap-x-4 gap-y-5   sm:gap-y-4  justify-evenly mt-3 `}
            >
              {data.map((data, i) => (
                <div
                  key={i}
                  className={`bg-white w-[150px] h-[150px] flex flex-col justify-center  items-center   font-bold rounded-md  ${
                    SelectBudget === i && "Selectcard"
                  }`}
                  onClick={() => {
                    setbudget(data.Text);
                    setSelectBudget(i);
                  }}
                >
                  {data.icon}

                  <p>{data.Text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="m-3">
            <label htmlFor="Destination">
              {" "}
              Who Do You plan Traveling With You
            </label>
            <div className="flex flex-wrap   gap-x-4 gap-y-5  sm:gap-y-4  justify-evenly">
              {travelingdata.map((data, i) => (
                <div
                  key={i}
                  className={`bg-white w-[150px] h-[150px] flex flex-col justify-center  items-center   font-bold rounded-md mt-3 ${
                    SelectPerson === i && "Selectcard"
                  }`}
                  onClick={() => {
                    setperson(`${data.Person}`);
                    setSelectPerson(i);
                  }}
                >
                  {data.icon}
                  <p>{data.Text}</p>
                </div>
              ))}
            </div>
          </div>

          {Object.keys(TripPlan).length > 0 ? (
            <>
              <button className="p-3 flex items-center gap-2 mt-[5vh]">
                <Link to="/TripPlan">
                  <p className="flex justify-between items-center gap-3">
                    See You Trip
                    <FaArrowRight />
                  </p>
                </Link>
              </button>
            </>
          ) : (
            <>
              <button className="p-3 flex items-center gap-2 mt-[5vh]">
                {loader ? (
                  <LuLoader2 className="animate-spin h-5 w-5 mr-3" />
                ) : (
                  <p className="flex justify-between items-center gap-3">
                    Genrate Trip
                    <FaArrowRight />
                  </p>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};
