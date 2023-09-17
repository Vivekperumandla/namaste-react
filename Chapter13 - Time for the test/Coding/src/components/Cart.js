import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-5 p-10 text-center">
      <h1 className="font-bold mb-3 text-lg">Cart</h1>
      <button
        onClick={HandleClearCart}
        className="m-auto bg-black  text-md rounded-lg text-white p-2 "
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h1 className="p-2 m-2 text-sm ">
            Cart is empty. Add items to the cart!
          </h1>
        ) : (
          cartItems.map((data) => (
            <div
              data-testid="foodItems"
              className="border-gray-200 border-b-2 text-left p-2 m-2 flex justify-between"
            >
              <div className="w-9/12">
                <span>{data?.name}</span>
                <p>
                  - ₹ {data?.price ? data.price / 100 : data.defaultPrice / 100}
                </p>
                <div>
                  <p className="text-sm">{data?.description}</p>
                </div>
              </div>
              <div className="w-3/12">
                <div className="ml-10 absolute">
                  <button className="p-1 bg-black shadow-lg text-white m-auto">
                    Add +
                  </button>
                </div>
                <img className="h-20" src={CDN_URL + data.imageId} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
