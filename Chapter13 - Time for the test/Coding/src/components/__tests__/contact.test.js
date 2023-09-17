import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Contact page should be loaded with Contact us text", () => {
    render(<Contact />);

    const heading = screen.getByText("Contact us for Namaste React Web Series");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Contact page should be loaded with button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Contact page should be loaded with textarea username", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("username");

    //Assertion
    expect(placeholder).toBeInTheDocument();
  });

  test("Contact page should be loaded with two headings", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("heading");
    //Assertion
    expect(heading.length).toBe(2);
  });
});
