/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

export const Tripdata = ({ TripPlan }) => {
  return (
    <>
      {Object.keys(TripPlan).length > 0 ? (
        <>
          <div
            className=" p-4 xl:p-40 mt-[5vh] 
          sm:mt-[10vh]"
          >
            <img
              src={`https://i.ytimg.com/vi/ebgJWqn50HI/maxresdefault.jpg`}
              alt=""
              className=" w-full rounded-3xl sm:max-h-[500px] object-cover"
            />
            <div className="flex flex-wrap justify-between">
              <h2>📍{TripPlan.location}</h2>
              <h2> 🕖{TripPlan.duration}</h2>
              <h2> 💸{TripPlan.budget}</h2>
              <h2>🍻{TripPlan.number_of_travelers}</h2>
            </div>
          </div>
          <h1 className=" font-bold  text-center sm:text-left text-[20px]  sm:text-[25px]">
            Hotel Recommendation
          </h1>
          <HotelRecomendation TripPlan={TripPlan} />

          <h1 className=" sm:text-[25px] text-[20px] font-semibold text-center mt-[5vh]">
            {" "}
            Place To visit
          </h1>
          <VisitingPlace TripPlan={TripPlan} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

const HotelRecomendation = ({ TripPlan }) => {
  return (
    <>
      <section className="gap-4  grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center">
        {TripPlan.hotels.map((data, i) => (
          <div
            key={i}
            className="bg-white  gap-4  m-4 flex  items-center   justify-between rounded-xl  "
          >
            <img
              src={`https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain`}
              alt=""
              className="sm:w-[250px] sm:h-[200px] w-[150px] h-[100px] object-cover rounded-xl"
            />
            <section className=" text-[15px] sm:text-[18px] ">
              <h3 className="font-semibold">{data.name}</h3>

              <p>{data.price}</p>
              <h3 className="text-[13px]  md:text-[15px]">{data.address}</h3>
              <p className="font-semibold">{data.rating} ⭐</p>
            </section>
          </div>
        ))}
      </section>
    </>
  );
};

const VisitingPlace = ({ TripPlan }) => {
  return (
    <>
      <section className="gap-4  ">
        {TripPlan.itinerary.map((data, i) => (
          <div key={i} className=" m-3 justify-center   ">
            <div>
              <h3 className="sm:text-[22px] text-[18px] font-semibold">
                {data.day}
              </h3>
              <h3 className="sm:text-[22px] text-[18px] font-semibold">
                {data.theme}
              </h3>
            </div>
            <hr className=" h-[0.4px] bg-blue-300 sm:m-[10px] m-[5px]" />
            <section className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
              {data.schedule.map((data, i) => (
                <div key={i} className=" ">
                  <h4 className="text-orange-400">🕖{data.time}</h4>
                  <div className="flex     bg-white rounded-xl  justify-between items-center    mt-[15px] sm:m-4">
                    <img
                      src="https://i.ytimg.com/vi/ebgJWqn50HI/maxresdefault.jpg"
                      alt=""
                      className="sm:w-[250px] sm:h-[200px] w-[150px] h-[100px] object-fill rounded-xl"
                    />
                    <div>
                      <h3 className=" font-semibold"> 📍{data.location}</h3>
                      <p> 💸{data.ticket_pricing}</p>
                      <p>🧳{data.time_travel}</p>
                      <p className="text-[13px]  md:text-[15px] text-slate-400">{` ${data.details}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </section>
    </>
  );
};
