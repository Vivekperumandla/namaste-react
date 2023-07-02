import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [restaurentMenuData, setRestaurentMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurentMenuData(json.data);
  };

  return restaurentMenuData;
};

export default useRestaurentMenu;
