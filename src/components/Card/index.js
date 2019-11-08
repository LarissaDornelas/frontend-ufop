import React from "react";
import phoneIcon from "../../assets/images/phone.svg";
import { Container, Icon } from "./styles";

const Card = props => {
  const { image_url, title, description, phone } = props.item;

  return (
    <Container>
      <img src={image_url} alt="image" />
      <h2>{title}</h2>
      <p>{description}</p>

      <p>
        <Icon src={phoneIcon} /> {phone}
      </p>
    </Container>
  );
};

export { Card };
