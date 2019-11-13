import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { AppContainer, SearchInput, SearchButton } from "./styles";

const AppBar = props => {
  const { handleFormBox, handleSearch } = props;

  return (
    <AppContainer>
      <SearchInput placeholder="Buscar Objeto" onChange={handleSearch} _ />
      <SearchButton type="button" onClick={handleFormBox}>
        <AddIcon /> <p>Adicionar Objeto</p>
      </SearchButton>
    </AppContainer>
  );
};

export { AppBar };
