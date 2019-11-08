import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 604px;
  width: 412px;
  box-shadow: -1px 6px 10px -9px rgba(0, 0, 0, 0.67);

  h2 {
    text-align: center;
    color: #323232;
  }

  > img {
    max-width: 457px;
  }

  p {
    display: flex;
    padding: 20px;
    font-size: 22px;
  }
`;

export const Icon = styled.img`
  max-width: 19px;

  padding: 0px 9px;
`;
