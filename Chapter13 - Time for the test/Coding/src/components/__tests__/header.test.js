import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Logout" });
  expect(loginButton).toBeInTheDocument();
});

it("Should load the header component with Cart Items zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText("Cart (0 items)");
  expect(CartItems).toBeInTheDocument();
});

it("Should load the header component with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText(/Cart/);
  expect(CartItems).toBeInTheDocument();
});

it("Should load the header component and login button should change to logout and login toggling", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Login" });
  expect(logoutButton).toBeInTheDocument();
});
