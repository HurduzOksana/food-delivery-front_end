import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled(NavLink)`
  color: #00ffff;
  padding: 0 10px;
`;
