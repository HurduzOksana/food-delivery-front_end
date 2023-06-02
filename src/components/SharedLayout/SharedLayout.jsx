import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Container } from "../../components/SharedLayout/SharedLayout.styled";

import Loader from "../../components/Loader/Loader";
import HeaderBar from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <Container>
        <HeaderBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>

      {/* <Footer /> */}
    </>
  );
};

export default SharedLayout;
