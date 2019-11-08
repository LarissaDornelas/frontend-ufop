import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { AppBarContainer, Input, Button } from "./styles";

const AppBar = props => {
  const { actionButton } = props;
  return (
    <AppBarContainer>
      <Input placeholder="Buscar Objeto" />
      <Button type="button" onClick={actionButton}>
        <AddIcon /> <p>Adicionar Objeto</p>
      </Button>
    </AppBarContainer>
  );
};

export { AppBar };
