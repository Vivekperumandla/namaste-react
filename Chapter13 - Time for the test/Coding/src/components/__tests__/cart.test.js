import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurentMenu from "../RestaurentMenu";
import MockData from "../Mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Cart from "../cart";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MockData),
  })
);

it("Should be able to load the Res card and cart items data updated on click of add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurentMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const recommentedText = screen.getByText("Recommended (61)");
  expect(recommentedText).toBeInTheDocument();

  fireEvent.click(recommentedText);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(61);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(63);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(61);
  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
