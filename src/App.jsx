/* eslint-disable no-undef */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/Home/HomePage";
import { GenratePage } from "./Pages/Genrate/GenratePage";
import { Tripdata } from "./Pages/Genrate/Tripdata";
import { useState, useEffect } from "react";
import { chatSession } from "./Serveice/AiModel";

import { toast } from "react-toastify";
function App() {
  const [TripPlan, setTripPlan] = useState({});
  const [place, setplace] = useState("");
  const [days, setdays] = useState(null);
  const [budget, setbudget] = useState(null);
  const [person, setperson] = useState(null);
  const [loader, setloader] = useState(false);

  const FINAL_PROMPT = ` Generate Travel Plan for Location: ${place} for ${days} days With  ${person} number_of_travelers With a ${budget} Budget ,Give me a Hotel Options List with Hotel Name, Hotel address ,Price Hotel image URL ,Geocoordinate, rating ,description and suggest itinerary with place Name, Place details ,place Image URL ,geo coordinate ,Ticket Pricing, rating Time travel each Of the location for 3 days With each day plan with best time to visit  place between  All data  in Json format\n\n\n`;
  const HandelSumbit = async (e) => {
    e.preventDefault();
    setloader(true);

    if (place === "" || days === "" || budget === "" || person === "") {
      toast.error("Fill All required Field");
      setloader(false);
    } else {
      e.preventDefault();
      console.log(place, days, budget, person);
      console.log(FINAL_PROMPT);

      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result.response.text());
      const JsonString = result.response.text();
      const data = JSON.parse(JsonString);
      setTripPlan(data);
      setloader(false);
      toast.success("Please See Your Trip");
    }
  };
  useEffect(() => {
    setTripPlan({});
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/GenrateTrip"
            element={
              <GenratePage
                TripPlan={TripPlan}
                HandelSumbit={HandelSumbit}
                setplace={setplace}
                setdays={setdays}
                setbudget={setbudget}
                setperson={setperson}
                loader={loader}
                setloader={setloader}
              />
            }
          />

          <Route path="/TripPlan" element={<Tripdata TripPlan={TripPlan} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
