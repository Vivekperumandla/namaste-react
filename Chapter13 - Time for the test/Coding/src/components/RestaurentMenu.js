import { useState } from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useParams } from "react-router-dom";
import RestaurentCatergory from "./RestaurentCategory";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [showItem, setShowItem] = useState(false);
  const restaurentMenuData = useRestaurentMenu(resId);

  if (restaurentMenuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurentMenuData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurentMenuData?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  // console.log(itemCards);
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        {itemCards && (
          <RestaurentCatergory
            data={itemCards}
            showItem={showItem}
            setShowItem={() => setShowItem(!showItem)}
          />
        )}
      </div>
    </>
  );
};

export default RestaurentMenu;
