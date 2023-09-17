import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRating,
    costForTwo,
    deliveryTime,
  } = props;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4  bg-gray-100 w-[220px]  rounded-lg hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurentLogo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-800 text-white m-1 p-1 rounded-lg">
          Best Seller
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;
