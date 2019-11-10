import React from "react";
import InputMask from "react-input-mask";
import CloseIcon from "@material-ui/icons/Close";
import CameraAlt from "@material-ui/icons/CameraAlt";

import "./styles.scss";

const FormBox = props => {
  const { actionButton, formValues, handleChange, handleSave } = props;

  return (
    <div className="box-container">
      <div>
        <button className="close-button" onClick={actionButton}>
          <CloseIcon color="disabled" />
        </button>
      </div>
      <form className="form">
        <div className="image-group">
          <label className="image-selector" htmlFor="image">
            <CameraAlt /> <p>Adicionar Imagem</p>
          </label>
          <p>{formValues.image}</p>
          <input
            name="image"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <h3>Adicionar Objeto</h3>

          <input
            name="title"
            value={formValues.title}
            onChange={handleChange}
            placeholder="Titulo*"
            required
          />
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            placeholder="Descrição*"
            rows={3}
            required
          />
          <InputMask
            mask="(99)99999-9999"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            placeholder="Celular*"
            required
          />

          <button type="button" onClick={handleSave} className="save-button">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export { FormBox };
