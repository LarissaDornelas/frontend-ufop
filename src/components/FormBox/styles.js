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
  max-width: 1024px;
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
    width: 97%;
    background: #f4f4f4;
    margin: 0 0 20px 0;
    padding-left: 20px;

    &:focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    background: #f4f4f4;
    height: 156px;
    width: 94%;
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
  align-items: ${props => props.align};
  padding: 0 10px;
  flex: ${props => props.flex};
`;

export const SaveButton = styled.button`
  color: #fff;
  background: #ff5757;
  height: 62px;
  width: 195px;
  border-radius: 7px;
  margin-left: 461px;
`;

export const ImageButton = styled.button`
  display: flex;
  justify-content: center;
  color: #fff;
  background: #938585;
  height: 50px;
  width: 100%;
  border-radius: 7px;

  p {
    margin: 5px 4px 4px 4px;
  }
`;

export const UploadImage = styled.img`
  max-width: 328px;
  margin: 58px 0 12px 0;
`;
