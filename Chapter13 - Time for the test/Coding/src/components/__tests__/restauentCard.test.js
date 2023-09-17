import RestaurentCard from "../RestaurentCard";
import { render, screen } from "@testing-library/react";
import MOCKDATA from "../../components/Mocks/restaurentCardApi.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurentCard";

it("Should load the data with the restaurent name", () => {
  render(<RestaurentCard {...MOCKDATA} />);
  const Heading = screen.getByText("Radhe Dhokla");
  expect(Heading).toBeInTheDocument();
});

it("Should load the data with promoted Labels", () => {
  const RestaurentCardwithPromoted = withPromotedLabel(RestaurentCard);
  render(<RestaurentCardwithPromoted {...MOCKDATA} />);

  const label = screen.getByText("Best Seller");
  expect(label).toBeInTheDocument();
});
