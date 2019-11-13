import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  max-width: 1296px;
`;

export const Empty = styled.div`
  img {
    max-width: 780px;
  }
`;
