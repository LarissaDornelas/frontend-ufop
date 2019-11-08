import React, { useState } from "react";
import { Header } from "../../components/Header";
import { AppBar } from "../../components/AppBar";
import { FormBox } from "../../components/FormBox";
import { Card } from "../../components/Card";
import { Container, CardContainer } from "./styles";

const Main = () => {
  const [showFormBox, setShowFormBox] = useState(false);

  const handleFormBox = () => {
    setShowFormBox(!showFormBox);
  };

  const data = [
    {
      id: "1",
      title: "Garrafinha de Água",
      description:
        "Encontrei essa garrafinha perdida nos banquinhos atrás do restaurante",
      image_url:
        "https://www.uergs.edu.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png?classificacao=34752",
      phone: "(31)99335-4284"
    },
    {
      id: "2",
      title: "Carregador de Iphone",
      description: "Esse carreador estava perdido no laboratório C302.",
      image_url:
        "https://www.uergs.edu.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png?classificacao=34752",
      phone: "(31)99994-5674"
    },
    {
      id: "3",
      title: "Estojo de lapis",
      description: "Achei esse estojo no bloco A. Sala A303",
      image_url:
        "https://www.uergs.edu.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png?classificacao=34752",
      phone: "(31)99452-5597"
    },
    {
      id: "4",
      title: "Garrafinha de Água",
      description:
        "Encontrei essa garrafinha perdida nos banquinhos atrás do restaurante",
      image_url:
        "https://www.uergs.edu.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png?classificacao=34752",
      phone: "(31)99335-4284"
    }
  ];
  return (
    <>
      <Header />

      {showFormBox ? (
        <Container>
          <FormBox actionButton={handleFormBox} />
        </Container>
      ) : (
        <>
          <Container>
            <AppBar actionButton={handleFormBox} />
          </Container>
          <CardContainer>
            {data.map(item => (
              <Card item={item} />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
};

export { Main };
