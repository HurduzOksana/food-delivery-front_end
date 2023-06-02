import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";
import SharedLayout from "../components/SharedLayout/SharedLayout";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const RestaurantsPage = lazy(() =>
  import("../pages/RestautantsPage/RestautantsPage")
);
const RestaurantsCard = lazy(() =>
  import("../components/RestaurantsCard/RestaurantsCard")
);

const CartPage = lazy(() => import("../pages/CartPage/CartPage"));

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/shopping-list" element={<CartPage />} />
            <Route path="/categories" element={<RestaurantsPage />}>
              <Route
                path="/categories:categoryName"
                element={<RestaurantsCard />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
