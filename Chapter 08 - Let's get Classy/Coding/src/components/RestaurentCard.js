import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { restaurentData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, id } =
    restaurentData?.data;
  return (
    <div className="restaurent-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurent-logo"
        src={CDN_URL + restaurentData.data.cloudinaryImageId}
        alt="restaurentLogo"
      />
      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>${costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
