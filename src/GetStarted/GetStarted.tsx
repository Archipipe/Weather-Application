import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill as Arrow } from "react-icons/bs";
import "./GetStarted.scss";

// import CitiesData from "./data.json";

interface City {
  country: string;
  city: string;
  region: string;
  cords: string;
}

function GetStarted() {
  const [cityList, setCityList] = useState<Array<City>>();
  const [inputText, setInputText] = useState<string>("");

  return (
    <>
      <div className="blanket"></div>
      <div className="start">
        <form>
          <label>Your city is?</label>
          <input
            type="text"
            placeholder="city?"
            autoComplete="off"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
          <button type="submit">
            <Arrow />
          </button>
        </form>
      </div>
    </>
  );
}

export default GetStarted;
