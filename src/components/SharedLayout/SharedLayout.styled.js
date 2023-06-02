import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 16px 100px 16px;
  box-sizing: border-box; /* Додано цей рядок */

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 200px;
  }
`;
