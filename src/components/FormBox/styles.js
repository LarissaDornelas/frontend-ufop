import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
  margin: 60px 15%;
  width: auto;
  align-items: center;
  padding: 20px;
  max-width: 675px;
  box-shadow: -1px 6px 10px -9px rgba(0, 0, 0, 0.67);

  > div {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;

  input {
    border: none;
    height: 62px;
    width: 95%;
    background: #f4f4f4;
    margin: 0 0 20px 0;
    padding-left: 20px;

    &:focus {
      outline: none;
    }
  }

  input[type="file"] {
    display: none;
  }

  textarea {
    border: none;
    background: #f4f4f4;
    height: 156px;
    width: 92%;
    margin: 0 0 20px 0;
    padding: 12px 20px;
    resize: none;

    &:focus {
      outline: none;
    }
  }

  h3 {
    text-transform: uppercase;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  flex: 2;
`;

export const SaveButton = styled.button`
  color: #fff;
  background: #ff5757;
  height: 62px;
  width: 195px;
  border-radius: 7px;
  margin-left: 478px;
`;

export const ImageSelector = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #938585;
  height: 50px;
  width: 98%;
  border-radius: 7px;
  margin-bottom: 20px;

  p {
    margin: 5px 4px 4px 4px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const ImageSelected = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: green;
  height: 50px;
  width: 98%;
  border-radius: 7px;
  margin-bottom: 20px;

  p {
    margin: 5px 4px 4px 4px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
