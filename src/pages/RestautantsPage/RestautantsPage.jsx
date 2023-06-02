import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { RestaurantsList } from "../../components/RestaurantsList/RestaurantsList";
import Loader from "../../components/Loader/Loader";
import { Title } from "../RestautantsPage/RestaurantsPage.styled";

const RestaurantsPage = () => {
  return (
    <>
      <Title>Choose food</Title>
      <RestaurantsList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RestaurantsPage;
