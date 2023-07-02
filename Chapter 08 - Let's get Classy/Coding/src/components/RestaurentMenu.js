import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  let [restaurentMenuData, setRestaurentMenuData] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const menuData = json.data;
    setRestaurentMenuData(menuData);
  };
  if (restaurentMenuData.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurentMenuData?.cards[0]?.card?.card?.info;

  console.log(restaurentMenuData?.cards[2]);
  const { itemCards } =
    restaurentMenuData?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  console.log(itemCards);
  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <h3>{avgRating} Rating</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((x) => (
            <li key={x.card.info.id}>
              {x.card.info.name} - Rs.{x.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurentMenu;
