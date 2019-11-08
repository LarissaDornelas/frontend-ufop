import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import CameraAlt from "@material-ui/icons/CameraAlt";
import logo from "../../assets/images/image-upload.png";
import {
  BoxContainer,
  CloseButton,
  Form,
  Group,
  SaveButton,
  ImageButton,
  UploadImage
} from "./styles";

const FormBox = props => {
  const { actionButton } = props;
  return (
    <BoxContainer>
      <div>
        <CloseButton onClick={actionButton}>
          <CloseIcon color="disabled" />
        </CloseButton>
      </div>
      <Form>
        <Group flex={1} align={"flex-start"}>
          <UploadImage src={logo} alt={"image"} />
          <ImageButton type="button " onClick={() => alert("hey")}>
            <CameraAlt /> <p>Adicionar Imagem</p>
          </ImageButton>
        </Group>

        <Group flex={2} align={"flex-start"}>
          <h3>Adicionar Objeto</h3>

          <input placeholder="Titulo*" required />
          <textarea placeholder="Descrição*" rows={3} required />
          <input placeholder="Telefone*" required />

          <SaveButton>Salvar</SaveButton>
        </Group>
      </Form>
    </BoxContainer>
  );
};

export { FormBox };
