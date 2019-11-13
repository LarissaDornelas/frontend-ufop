import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  height: 604px;
  width: 412px;
  box-shadow: -1px 6px 10px -9px rgba(0, 0, 0, 0.67);
  margin: 10px;

  h2 {
    text-align: center;
    color: #323232;
    margin-bottom: 20px;
  }

  .imgWrapper {
    height: 250px;
    width: 100%;
    display: block;
    background-image: ${props => props.background};
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20px;
  }

  p {
    padding: 0 20px;
    font-size: 22px;
    margin: 10px;
    width: 100%;
    text-align: left;
  }
  div.info {
    margin-bottom: 10px;
    width: 100%;
    height: 60px;
    display: block;
  }
`;

export const Description = styled.p`
  display: flex;
  padding: 0 20px;
  font-size: 22px;
  margin: 0 0 32px 0 !important;
  width: 100%;
  height: 120px;
`;
