import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 98px;
  background: #fff;
  margin: 60px 15%;
  width: auto;
  align-items: center;
  padding: 0px 20px;
  max-width: 1024px;
  box-shadow: -1px 6px 10px -9px rgba(0, 0, 0, 0.67);
`;

export const SearchInput = styled.input`
  background: #f4f4f4;
  border: none;
  padding: 0 20px;
  height: 61px;
  flex: 3;
  margin: 0px 5% 0px 0px;

  ::placeholder {
    color: #a59c9c;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex: 2;
  border-radius: 7px;
  color: #fff;
  height: 62px;
  background: #ff5757;
  border: none;
  align-items: center;
  justify-content: center;

  p {
    margin: 5px 4px 4px 4px;
  }

  &:focus {
    outline: none;
  }
`;
