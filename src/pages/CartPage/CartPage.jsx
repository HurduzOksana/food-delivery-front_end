import React from "react";
import OrderForm from "../../components/OrderForm/OrderForm";
import { Title } from "./CartPage.styled";

const CartPage = () => {
  return (
    <>
      <Title>Your order</Title>
      <OrderForm />
    </>
  );
};

export default CartPage;
