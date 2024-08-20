import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
export const HomePage = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-[90vh]">
        <main className="  sm:w-[80vw] flex flex-col  w-[90vw]    justify-center items-center gap-3 ">
          <h1 className="text-[30px] font-bold text-center">
            Discover the Future
            <span className="text-blue-500">of Travel with AI</span>
          </h1>
          <p className=" sm:text-[22px] text-[18px]  text-slate-400 text-center">{`Welcome to  JourneyGenie, where cutting-edge AI redefines travel. Our platform transforms how you plan, experience, and enjoy your journeys, offering personalized itineraries, real-time updates, and intelligent recommendations.`}</p>
          <Link to={"/GenrateTrip"}>
            <button className=" border p-3 flex  gap-2 items-center">
              Get Started
              <FaArrowRight />
            </button>
          </Link>
        </main>
      </div>
    </>
  );
};
