import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState, useEffect } from "react";
import Cart from "./components/cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Vivek Perumandla",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ logggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
