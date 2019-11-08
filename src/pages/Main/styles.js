import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(412px, auto));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-items: center;
  padding: 0 30px;
`;
