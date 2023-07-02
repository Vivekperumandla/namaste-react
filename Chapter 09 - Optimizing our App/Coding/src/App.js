import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
