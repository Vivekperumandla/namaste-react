import ItemList from "./itemList";

const RestaurentCatergory = ({ data, showItem, setShowItem }) => {
  // console.log(data, showItem);

  const handleClick = () => {
    setShowItem(true);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-3 shadow-lg ">
        <div
          className="flex justify-between  cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">Recommended ({data.length})</span>
          <span>🔽</span>
        </div>
        {showItem &&
          data.map((item) => <ItemList key={item.card.info.id} data={item} />)}
      </div>
    </div>
  );
};

export default RestaurentCatergory;
