import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (list) => {
  const propsList = list;
  const data = propsList.data.card.info;

  const dispatch = useDispatch();
  const handleAddButton = (data) => {
    dispatch(addItem(data));
  };
  // console.log(data);
  return (
    <div
      data-testid="foodItems"
      className="border-gray-200 border-b-2 text-left p-2 m-2 flex justify-between"
    >
      <div className="w-9/12">
        <span>{data?.name}</span>
        <p>- ₹ {data?.price ? data.price / 100 : data.defaultPrice / 100}</p>
        <div>
          <p className="text-sm">{data?.description}</p>
        </div>
      </div>
      <div className="w-3/12">
        <div className="ml-10 absolute">
          <button
            className="p-1 bg-black shadow-lg text-white m-auto"
            onClick={() => handleAddButton(data)}
          >
            Add +
          </button>
        </div>
        <img className="h-20" src={CDN_URL + data.imageId} />
      </div>
    </div>
  );
};

export default ItemList;
