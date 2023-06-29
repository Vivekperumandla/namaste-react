import RestaurentCard from "./RestaurentCard";
import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerful variable
  let [listOfRestaurants, setlistofRestaurants] = useState([]);
  let [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const jsonData = await data.json();
    //Optional Chaining
    const resData = jsonData?.data?.cards[2]?.data?.data?.cards;
    setfilteredListOfRestaurants(resData);
    setlistofRestaurants(resData);
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          onClick={() => {
            if (searchValue == "") {
              setlistofRestaurants(listOfRestaurants);
            } else {
              const searchedListOfRestaurants = listOfRestaurants.filter(
                (restaurentList) =>
                  restaurentList.data.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                    ? true
                    : false
              );
              setfilteredListOfRestaurants(searchedListOfRestaurants);
            }
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (restaurentList) => restaurentList.data.avgRating > 4
            );
            setfilteredListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="restaurent-container">
        {filteredListOfRestaurants.map((restaurent) => (
          <RestaurentCard
            restaurentData={restaurent}
            key={restaurent.data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
