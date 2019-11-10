import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./styles.scss";

const AppBar = props => {
  const { actionButton } = props;
  return (
    <div className="app-container">
      <input className="search-input" placeholder="Buscar Objeto" />
      <button className="search-button" type="button" onClick={actionButton}>
        <AddIcon /> <p>Adicionar Objeto</p>
      </button>
    </div>
  );
};

export { AppBar };
