import {
  GiReceiveMoney,
  GiMoneyStack,
  GiTakeMyMoney,
  GiFamilyHouse,
} from "react-icons/gi";
import { GrMoney } from "react-icons/gr";

export const GenratePage = () => {
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

  return (
    <>
      <div className=" flex flex-col items-center min-h-[90vh] border border-red-500">
        <h1 className=" text-[20px] sm:text-[22px] font-bold">
          {" "}
          Tell Us your Travel Prefrences
        </h1>
        <p>Just Provide Some Baisc information</p>
        <form
          className=" w-full sm:w-[50%] border 
        border-red-400   "
        >
          <div>
            <label htmlFor="Destination">Choose Your desination</label>
            <input type="text" className="w-full p-2 rounded-md outline-none" />
          </div>
          <div>
            <label htmlFor="Destination">How Many days Trip Planning </label>
            <input
              type="Number"
              min={1}
              max={10}
              className="w-full p-2 rounded-md outline-none"
            />
          </div>
          <div>
            <label htmlFor="Destination"> What is Your Budget </label>
            <div className="flex flex-wrap gap-3">
              {data.map((data, i) => (
                <div
                  key={i}
                  className="bg-white w-[150px] h-[150px] flex flex-col justify-center  items-center   font-bold rounded-md"
                >
                  {data.icon}
                  {/* <GiTakeMyMoney  /> */}
                  <p>{data.Text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="Destination">
              {" "}
              Who Do You plan Traveling With You
            </label>
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white w-[150px] h-[150px] flex flex-col justify-center  items-center   font-bold rounded-md"
                >
                  <GiFamilyHouse className="text-[70px]" />
                  <p>Low</p>
                </div>
              ))}
            </div>
          </div>
          <button className="p-3">Genrate Trip</button>
        </form>
      </div>
    </>
  );
};
