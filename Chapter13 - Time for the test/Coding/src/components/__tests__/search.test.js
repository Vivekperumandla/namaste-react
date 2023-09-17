import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import MockData from "../Mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

it("should render the body componeent and shoudld have search buttons", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

it("should give 1 card if we search for burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const inputSearch = screen.getByTestId("searchInput");

  fireEvent.change(inputSearch, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const cardsAftereSearch = screen.getAllByTestId("resCard");

  expect(cardsAftereSearch.length).toBe(1);
});

it("should give TopratedRestaurents on click of button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAftereSearch = screen.getAllByTestId("resCard");

  expect(cardsAftereSearch.length).toBe(12);
});
