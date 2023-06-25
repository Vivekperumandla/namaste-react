import RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State variable - Super powerful variable
  let [listOfRestaurants, setlistofRestaurants] = useState(restaurentList);
  let [searchValue, setSearchValue] = useState("");
  let value = "";
  // Normal JS variable
  //   let listOfRestaurants = [
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "279741",
  //         name: "Easy Bites by Hotel Empire",
  //         uuid: "d9ab4a4f-8464-4352-a387-9cd2b07842cc",
  //         city: "1",
  //         area: "Marathahalli",
  //         totalRatingsString: "1000+ ratings",
  //         cloudinaryImageId: "d06b7fa84cb8f8193f60d4c2de172347",
  //         cuisines: ["Snacks", "Fast Food", "Beverages"],
  //         tags: [],
  //         costForTwo: 20000,
  //         costForTwoString: "₹200 FOR TWO",
  //         deliveryTime: 44,
  //         minDeliveryTime: 44,
  //         maxDeliveryTime: 44,
  //         slaString: "44 MINS",
  //         lastMileTravel: 3.5,
  //         slugs: {
  //           restaurant: "easy-bites-marathahalli-marathahalli",
  //           city: "bangalore",
  //         },
  //         cityState: "1",
  //         address:
  //           "SITE NO.4,SY NO.7/3,VARTHUR HOBLI,BANGALORE-560037,District-B.B.M.P East,STATE-Karnataka",
  //         locality: "BEML Layout",
  //         parentId: 8503,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         tradeCampaignHeaders: [],
  //         ribbon: [
  //           {
  //             type: "PROMOTED",
  //           },
  //         ],
  //         chain: [],
  //         feeDetails: {
  //           fees: [
  //             {
  //               name: "distance",
  //               fee: 3800,
  //               message: "",
  //             },
  //             {
  //               name: "time",
  //               fee: 0,
  //               message: "",
  //             },
  //             {
  //               name: "special",
  //               fee: 0,
  //               message: "",
  //             },
  //           ],
  //           totalFees: 3800,
  //           message: "",
  //           title: "Delivery Charge",
  //           amount: "3800",
  //           icon: "",
  //         },
  //         availability: {
  //           opened: true,
  //           nextOpenMessage: "",
  //           nextCloseMessage: "",
  //         },
  //         longDistanceEnabled: 0,
  //         rainMode: "NONE",
  //         thirdPartyAddress: false,
  //         thirdPartyVendor: "",
  //         adTrackingID:
  //           "cid=7137326~p=1~eid=00000188-cd90-b604-1228-3c3900af0103",
  //         badges: {
  //           imageBased: [],
  //           textBased: [],
  //           textExtendedBadges: [],
  //         },
  //         lastMileTravelString: "3.5 kms",
  //         hasSurge: false,
  //         aggregatedDiscountInfoV3: {
  //           header: "10% OFF",
  //           subHeader: "UPTO ₹40",
  //           discountTag: "",
  //           headerTypeV2: 0,
  //         },
  //         sla: {
  //           restaurantId: "279741",
  //           deliveryTime: 44,
  //           minDeliveryTime: 44,
  //           maxDeliveryTime: 44,
  //           lastMileTravel: 3.5,
  //           lastMileDistance: 0,
  //           serviceability: "SERVICEABLE",
  //           rainMode: "NONE",
  //           longDistance: "NOT_LONG_DISTANCE",
  //           preferentialService: false,
  //           iconType: "EMPTY",
  //         },
  //         promoted: true,
  //         avgRating: "4.0",
  //         totalRatings: 1000,
  //         new: false,
  //       },
  //       subtype: "basic",
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "221738",
  //         name: "Meghana Foods",
  //         uuid: "106f4556-6804-4554-8c68-ee875d6acf65",
  //         city: "1",
  //         area: "Brookefield",
  //         totalRatingsString: "10000+ ratings",
  //         cloudinaryImageId: "aqsnrylokzpn45qhg1pb",
  //         cuisines: [
  //           "Biryani",
  //           "Andhra",
  //           "South Indian",
  //           "North Indian",
  //           "Chinese",
  //           "Seafood",
  //         ],
  //         tags: [],
  //         costForTwo: 50000,
  //         costForTwoString: "₹500 FOR TWO",
  //         deliveryTime: 53,
  //         minDeliveryTime: 53,
  //         maxDeliveryTime: 53,
  //         slaString: "53 MINS",
  //         lastMileTravel: 2.4000000953674316,
  //         slugs: {
  //           restaurant: "meghana-foods-mahadevpura-mahadevpura",
  //           city: "bangalore",
  //         },
  //         cityState: "1",
  //         address: "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India",
  //         locality: "Mahadevpura",
  //         parentId: 635,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         tradeCampaignHeaders: [],
  //         chain: [],
  //         feeDetails: {
  //           fees: [
  //             {
  //               name: "distance",
  //               fee: 2800,
  //               message: "",
  //             },
  //             {
  //               name: "time",
  //               fee: 0,
  //               message: "",
  //             },
  //             {
  //               name: "special",
  //               fee: 0,
  //               message: "",
  //             },
  //           ],
  //           totalFees: 2800,
  //           message: "",
  //           title: "Delivery Charge",
  //           amount: "2800",
  //           icon: "",
  //         },
  //         availability: {
  //           opened: true,
  //           nextOpenMessage: "",
  //           nextCloseMessage: "",
  //         },
  //         longDistanceEnabled: 0,
  //         rainMode: "NONE",
  //         thirdPartyAddress: false,
  //         thirdPartyVendor: "",
  //         adTrackingID: "",
  //         badges: {
  //           imageBased: [],
  //           textBased: [],
  //           textExtendedBadges: [],
  //         },
  //         lastMileTravelString: "2.4 kms",
  //         hasSurge: false,
  //         sla: {
  //           restaurantId: "221738",
  //           deliveryTime: 53,
  //           minDeliveryTime: 53,
  //           maxDeliveryTime: 53,
  //           lastMileTravel: 2.4000000953674316,
  //           lastMileDistance: 0,
  //           serviceability: "SERVICEABLE",
  //           rainMode: "NONE",
  //           longDistance: "NOT_LONG_DISTANCE",
  //           preferentialService: false,
  //           iconType: "EMPTY",
  //         },
  //         promoted: false,
  //         avgRating: "4.3",
  //         totalRatings: 10000,
  //         new: false,
  //       },
  //       subtype: "basic",
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "280569",
  //         name: "Empire Juices and Desserts",
  //         uuid: "86951528-7018-457a-a488-8f64577d114c",
  //         city: "1",
  //         area: "Marathahalli",
  //         totalRatingsString: "500+ ratings",
  //         cloudinaryImageId: "vh4dlykbvombevwyplyl",
  //         cuisines: ["Juices", "Ice Cream"],
  //         tags: [],
  //         costForTwo: 20000,
  //         costForTwoString: "₹200 FOR TWO",
  //         deliveryTime: 47,
  //         minDeliveryTime: 47,
  //         maxDeliveryTime: 47,
  //         slaString: "47 MINS",
  //         lastMileTravel: 3.5,
  //         slugs: {
  //           restaurant: "the-empire-juice-shop-marathahalli-marathahalli",
  //           city: "bangalore",
  //         },
  //         cityState: "1",
  //         address: "SITE NO.4, SY NO.7/3, VARTHUR HOBLI, BANGALORE-560037",
  //         locality: "BEML Layout",
  //         parentId: 387289,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         tradeCampaignHeaders: [],
  //         ribbon: [
  //           {
  //             type: "PROMOTED",
  //           },
  //         ],
  //         chain: [],
  //         feeDetails: {
  //           fees: [
  //             {
  //               name: "distance",
  //               fee: 3800,
  //               message: "",
  //             },
  //             {
  //               name: "time",
  //               fee: 0,
  //               message: "",
  //             },
  //             {
  //               name: "special",
  //               fee: 0,
  //               message: "",
  //             },
  //           ],
  //           totalFees: 3800,
  //           message: "",
  //           title: "Delivery Charge",
  //           amount: "3800",
  //           icon: "",
  //         },
  //         availability: {
  //           opened: true,
  //           nextOpenMessage: "",
  //           nextCloseMessage: "",
  //         },
  //         longDistanceEnabled: 0,
  //         rainMode: "NONE",
  //         thirdPartyAddress: false,
  //         thirdPartyVendor: "",
  //         adTrackingID:
  //           "cid=7137347~p=22~eid=00000188-cd90-b604-1228-3c4000af1679",
  //         badges: {
  //           imageBased: [],
  //           textBased: [],
  //           textExtendedBadges: [],
  //         },
  //         lastMileTravelString: "3.5 kms",
  //         hasSurge: false,
  //         aggregatedDiscountInfoV3: {
  //           header: "20% OFF",
  //           subHeader: "UPTO ₹50",
  //           discountTag: "",
  //           headerTypeV2: 0,
  //         },
  //         sla: {
  //           restaurantId: "280569",
  //           deliveryTime: 47,
  //           minDeliveryTime: 47,
  //           maxDeliveryTime: 47,
  //           lastMileTravel: 3.5,
  //           lastMileDistance: 0,
  //           serviceability: "SERVICEABLE",
  //           rainMode: "NONE",
  //           longDistance: "NOT_LONG_DISTANCE",
  //           preferentialService: false,
  //           iconType: "EMPTY",
  //         },
  //         promoted: true,
  //         avgRating: "4.2",
  //         totalRatings: 500,
  //         new: false,
  //       },
  //       subtype: "basic",
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "420659",
  //         name: "Sri Lakshmi Biryani",
  //         uuid: "eb227257-1596-441a-9c84-8265417d2d19",
  //         city: "1",
  //         area: "Marathahalli",
  //         totalRatingsString: "5000+ ratings",
  //         cloudinaryImageId: "n7pn6ilfponvcatp0n73",
  //         cuisines: ["Biryani", "North Indian", "Snacks"],
  //         tags: [],
  //         costForTwo: 20000,
  //         costForTwoString: "₹200 FOR TWO",
  //         deliveryTime: 47,
  //         minDeliveryTime: 47,
  //         maxDeliveryTime: 47,
  //         slaString: "47 MINS",
  //         lastMileTravel: 5,
  //         slugs: {
  //           restaurant: "sri-lakshmi-biryani-kadubeesanahalli-kadubeesanahalli",
  //           city: "bangalore",
  //         },
  //         cityState: "1",
  //         address:
  //           "No 15&16 Srinivasa Reddy building, Lakshmi Narayana temple road, manunatha layout, munnekoll Bangalore 560037",
  //         locality: "Manunatha Layout",
  //         parentId: 193940,
  //         unserviceable: false,
  //         veg: false,
  //         select: false,
  //         favorite: false,
  //         tradeCampaignHeaders: [],
  //         chain: [],
  //         feeDetails: {
  //           fees: [
  //             {
  //               name: "distance",
  //               fee: 5300,
  //               message: "",
  //             },
  //             {
  //               name: "time",
  //               fee: 0,
  //               message: "",
  //             },
  //             {
  //               name: "special",
  //               fee: 0,
  //               message: "",
  //             },
  //           ],
  //           totalFees: 5300,
  //           message: "",
  //           title: "Delivery Charge",
  //           amount: "5300",
  //           icon: "",
  //         },
  //         availability: {
  //           opened: true,
  //           nextOpenMessage: "",
  //           nextCloseMessage: "",
  //         },
  //         longDistanceEnabled: 0,
  //         rainMode: "NONE",
  //         thirdPartyAddress: false,
  //         thirdPartyVendor: "",
  //         adTrackingID: "",
  //         badges: {
  //           imageBased: [],
  //           textBased: [],
  //           textExtendedBadges: [],
  //         },
  //         lastMileTravelString: "5 kms",
  //         hasSurge: false,
  //         aggregatedDiscountInfoV3: {
  //           header: "₹125 OFF",
  //           subHeader: "ABOVE ₹599",
  //           discountTag: "FLAT DEAL",
  //           headerTypeV2: 0,
  //         },
  //         sla: {
  //           restaurantId: "420659",
  //           deliveryTime: 47,
  //           minDeliveryTime: 47,
  //           maxDeliveryTime: 47,
  //           lastMileTravel: 5,
  //           lastMileDistance: 0,
  //           serviceability: "SERVICEABLE",
  //           rainMode: "NONE",
  //           longDistance: "NOT_LONG_DISTANCE",
  //           preferentialService: false,
  //           iconType: "EMPTY",
  //         },
  //         promoted: false,
  //         avgRating: "3.6",
  //         totalRatings: 5000,
  //         new: false,
  //       },
  //       subtype: "basic",
  //     },
  //   ];
  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (restaurentList) => restaurentList.data.avgRating > 4
            );
            setlistofRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          onClick={() => {
            if (searchValue == "") {
              setlistofRestaurants(restaurentList);
            } else {
              const searchedListOfRestaurants = listOfRestaurants.filter(
                (restaurentList) =>
                  restaurentList.data.name.toLowerCase().includes(searchValue)
                    ? true
                    : false
              );
              setlistofRestaurants(searchedListOfRestaurants);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-container">
        {listOfRestaurants.map((restaurent) => (
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
