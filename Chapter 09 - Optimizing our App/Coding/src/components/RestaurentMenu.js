import { useEffect, useState } from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentMenuData = useRestaurentMenu(resId);

  if (restaurentMenuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurentMenuData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurentMenuData?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
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
