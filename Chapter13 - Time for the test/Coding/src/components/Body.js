import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";

const Body = () => {
  // State variable - Super powerful variable
  let [listOfRestaurants, setlistofRestaurants] = useState([]);
  let [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  const RestaurentCardwithPromoted = withPromotedLabel(RestaurentCard);

  // console.log("body rendered", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();
    //Optional Chaining
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);
    setfilteredListOfRestaurants(resData);
    setlistofRestaurants(resData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet Connection!
      </h1>
    );
  const { logggedInUser, setUserName } = useContext(userContext);
  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 p-4">
        <input
          data-testid="searchInput"
          type="text"
          className="border border-solid border-black"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className="px-3 py-1 bg-blue-100 m-4 rounded-md hover:bg-blue-300"
          onClick={() => {
            if (searchValue == "") {
              setlistofRestaurants(listOfRestaurants);
            } else {
              const searchedListOfRestaurants = listOfRestaurants.filter(
                (restaurentList) =>
                  restaurentList?.info?.name
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
          className="px-3 py-1 bg-gray-100 m-4 rounded-md hover:bg-gray-300"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (restaurentList) => restaurentList?.info?.avgRating > 4
            );
            setfilteredListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated restaurants
        </button>

        <label>UserName : </label>
        <input
          data-testid="userName"
          value={logggedInUser}
          onChange={changeUserName}
          className="border border-black"
        />
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"restaurants/" + restaurent?.info?.id}
          >
            {restaurent?.info?.avgRating > 4.3 ? (
              <RestaurentCardwithPromoted {...restaurent?.info} />
            ) : (
              <RestaurentCard {...restaurent?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
