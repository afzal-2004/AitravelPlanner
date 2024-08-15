import { GiReceiveMoney, GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { PiBeerBottle } from "react-icons/pi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaUsers, FaUntappd, FaArrowRight } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Tripdata } from "./Tripdata";
import { chatSession } from "../../Serveice/AiModel";
import { Loader } from "../../Components/Loader";
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
  const [TripPlan, setTripPlan] = useState({});
  const [place, setplace] = useState("");
  const [days, setdays] = useState(null);
  const [budget, setbudget] = useState(null);
  const [person, setperson] = useState(null);
  // const [loader, setloader] = useState(false);
  const [SelectBudget, setSelectBudget] = useState(null);
  const [SelectPerson, setSelectPerson] = useState(null);

  const FINAL_PROMPT = ` Generate Travel Plan for Location: ${place} for ${days} days With  ${person} number_of_travelers With a ${budget} Budget ,Give me a Hotel Options List with Hotel Name, Hotel address ,Price Hotel image URL ,Geocoordinate, rating ,description and suggest itinerary with place Name, Place details ,place Image URL ,geo coordinate ,Ticket Pricing, rating Time travel each Of the location for 3 days With each day plan with best time to visit in Json format\n\n\n"text: "Generate Travel Plan for Location: Mumbai for  3 days for family With a cheap Budget ,Give me a Hotel Options List with Hotel Name, Hotel address ,Price Hotel image URL ,Geocoordinate, rating ,description and suggest itinerary with place Name, Place details ,place Image URL ,geo coordinate ,Ticket Pricing, rating Time travel each Of the location for 3 days With each day plan with best time to visit in Json format\n\n\n`;

  useEffect(() => {
    axios
      .get("/Trip.json")
      .then((response) => {
        console.log(response.data);
        setTripPlan(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandelSumbit = async (e) => {
    if (place === "" || days === "" || budget === "" || person === "") {
      toast.error("Please fill All The Fields");
    }
    e.preventDefault();
    console.log(place, days, budget, person);
    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const JsonString = result.response.text();
    const data = JSON.parse(JsonString);
    setTripPlan(data);
  };

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
          onSubmit={HandelSumbit}
          className=" w-full xl:w-[50%] text-[18px] font-semibold  "
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
              max={10}
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
          <button className="p-3 flex items-center gap-2 mt-[5vh]">
            Genrate Trip
            <FaArrowRight />
          </button>
        </form>
      </div>

      {Object.keys(TripPlan) > 0 ? (
        <Loader />
      ) : (
        <Tripdata TripPlan={TripPlan} />
      )}
    </>
  );
};

// eslint-disable-next-line react/prop-types
