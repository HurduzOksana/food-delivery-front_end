import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <NavLink to="/categories">Restaurants</NavLink>
      <NavLink to="/shopping-list">Cart</NavLink>
    </>
  );
};

export default NavigationBar;
