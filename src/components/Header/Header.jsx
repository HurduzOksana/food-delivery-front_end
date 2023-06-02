import logo from "../../images/logo.jpg";

import { Header } from "../Header/Header.styled";
import { NavLink } from "react-router-dom";

const HeaderBar = () => {
  return (
    <Header>
      <img src={logo} alt="logo" width={200} />
      <NavLink to="/categories" activeClassName="active">
        Restaurants
      </NavLink>
      <NavLink to="/shopping-list" activeClassName="active">
        Cart
      </NavLink>
    </Header>
  );
};

export default HeaderBar;
