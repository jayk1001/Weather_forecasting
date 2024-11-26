import React, { useState } from "react";
import wind from "../components/wind.png";
import humidity from '../components/humidity.png'
import { MdWindPower } from "react-icons/md";
import clouds from '../components/clouds.png'
import { Link } from "react-router-dom";
const API_KEY = "5c866caec0fb5be6f88e90718c6d3ab7";

function YourWeather() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const [current_Weather_Detail, setCWD] = useState("");
  const [data, setData] = useState();

  function success(pos) {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    Location_Weather(crd.latitude, crd.longitude);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  async function Location_Weather(lon, lat) {
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=${API_KEY}`
    );
    const output = await url.json();
    console.log(output);
    setData(output);
  }
  return (
    <>
      <div className=" h-[100vh] w-[100wh] bg-blue-400">
        <div className=" flex justify-center">
          <div className=" mt-2 text-white text-3xl font-bold">WEATHER APP</div>
        </div>
        <div className=" mt-12 flex justify-center">
          <div className=" w-[60%]">
            <div className=" flex justify-between text-xl text-white font-bold">
              <Link to="/">Your Weather</Link>
              <Link to='search_weather'>Search Weather</Link>
            </div>
          </div>
        </div>
        <div className=" mt-12 flex-col gap-4 text-white">
          <div className=" flex justify-center text-white text-2xl">
            <div className=" w-[60%]">
              <div className=" flex justify-center gap-4">
                <div className="">{data?.name}</div>
                <div className=" justify-center items-center flex ">
                  <img
                    src={`https://flagsapi.com/${data?.sys.country}/flat/32.png`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center mt-6">
            <div className="  w-[60%] flex justify-center ">
              <div className=" font-bold text-xl">
                {data?.weather[0]?.description}
              </div>
            </div>
          </div>
          <div className=" flex justify-center mt-4">
            <div className=" w-[60%] flex justify-center text-3xl font-bold">
              <div>
                {data?.main?.temp}
                <span> K</span>
              </div>
            </div>
          </div>
          <div className=" mt-6 flex justify-center">
            <div className=" flex justify-center gap-3 w-[60%]">
              <div className=" w-[17%] bg-slate-500 h-36 bg-opacity-50">
                <div className=" mt-4 ml-3">
                  <div className=" flex-col">
                    <div className=" justify-center flex">
                      <div>
                        <img src={wind} className=" w-14" />
                      </div>
                    </div>
                    <div className=" justify-center flex">
                      <div className=" text-2xl font-bold">WINDSPEED</div>
                    </div>
                    <div className=" justify-center flex">
                      <div className=" text-2xl font-bold">
                        {data?.wind?.speed}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[17%] bg-slate-500 h-36 bg-opacity-50">
                <div className=" mt-4 ml-3">
                  <div className=" flex-col">
                    <div className=" justify-center flex">
                      <div>
                        <img src={humidity} className=" w-14" />
                      </div>
                    </div>
                    <div className=" justify-center flex">
                      <div className=" text-2xl font-bold">HUMIDITY</div>
                    </div>
                    <div className=" justify-center flex">
                      <div className=" text-2xl font-bold">
                        {data?.main?.humidity}<span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[17%] bg-slate-500 h-36 bg-opacity-50">
                <div className=" mt-4 ml-3">
                  <div className=" flex-col">
                    <div className=" justify-center flex">
                      <div>
                        <img src={clouds} className=" w-14" />
                      </div>
                    </div>
                    <div className=" justify-center flex">
                      <div className=" text-2xl font-bold">CLOUDS</div>
                    </div>
                    <div className=" justify-center flex">
                      <div className=" text-2xl font-bold">
                        {data?.clouds?.all}<span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourWeather;
