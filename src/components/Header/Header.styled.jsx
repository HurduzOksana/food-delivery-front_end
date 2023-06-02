import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    padding-top: 13px;
    padding-bottom: 13px;
  }
`;
