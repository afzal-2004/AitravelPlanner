import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoMapSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <section className="p-20 flex flex-col   items-center">
        <h3 className=" sm:text-[35px] text-[30px] xl:text-[40px]  text-center">
          Your <span className="  text-blue-500">Ai-Powered</span>Trip
        </h3>
        <div className="    flex sm:flex-row flex-col  justify-around items-center  sm:w-[70%] md:w-[60%] xl:w-[50%]">
          <div className=" ">
            <span className="text-[25px] font-bold bg-white p-2 rounded-lg ">
              The Most optimal{" "}
            </span>
            <p>
              Craft your perfect itinerary with Trip Planner AI. Our advanced
              algorithms take into account your selected explore-sights, dining,
              and lodging preferences to create the optimal travel plan tailored
              just for you.
            </p>
          </div>
          <div>
            <FaPersonWalkingLuggage
              className="
             text-[300px]"
            />
          </div>
        </div>

        <div className="   flex sm:flex-row flex-col  justify-around items-center sm:w-[70%] md:w-[60%] xl:w-[50%]">
          <div>
            <IoMapSharp
              className="
             text-[300px]"
            />
          </div>
          <div className=" ">
            <span className="text-[25px] font-bold bg-white p-2 rounded-lg ">
              Get Inspired{" "}
            </span>
            <p>
              Extract valuable travel insights from Instagram reels and TikToks,
              explore the mentioned explore-sights, and effortlessly include
              them in your own adventure with Trip Planner AI
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
