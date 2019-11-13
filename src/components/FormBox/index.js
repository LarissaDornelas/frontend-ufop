import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputMask from "react-input-mask";
import { Close, CameraAlt, Check } from "@material-ui/icons";

import {
  BoxContainer,
  CloseButton,
  Form,
  Group,
  SaveButton,
  ImageSelector,
  ImageSelected
} from "./styles";

const FormBox = props => {
  const {
    handleFormBox,
    formValues,
    handleFormValues,
    handleSave,
    loading
  } = props;

  return (
    <BoxContainer>
      <div>
        <CloseButton onClick={handleFormBox}>
          <Close color="disabled" />
        </CloseButton>
      </div>
      <Form>
        <Group align="center" flex={1}>
          <h3>Adicionar Objeto</h3>

          <input
            name="title"
            value={formValues.title}
            onChange={handleFormValues}
            placeholder="Titulo*"
            required
          />
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleFormValues}
            placeholder="Descrição*"
            maxLength={200}
            rows={3}
            required
          />
          <InputMask
            mask="(99)99999-9999"
            name="phone"
            value={formValues.phone}
            onChange={handleFormValues}
            placeholder="Celular*"
            required
          />

          {!formValues.image ? (
            <ImageSelector htmlFor="image">
              <CameraAlt /> <p>Adicionar Imagem</p>
            </ImageSelector>
          ) : (
            <ImageSelected htmlFor="image">
              <Check /> <p>Imagem adicionada. Clique para alterar</p>
            </ImageSelected>
          )}
          <input
            name="image"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFormValues}
          />
          <SaveButton
            type="button"
            onClick={handleSave}
            className="save-button"
          >
            {loading ? <CircularProgress color="disabled" /> : "Salvar"}
          </SaveButton>
        </Group>
      </Form>
    </BoxContainer>
  );
};

export { FormBox };
