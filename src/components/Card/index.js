import React from "react";
import phoneIcon from "../../assets/images/phone.svg";
import "./styles.scss";

const Card = props => {
  const { imageId, title, description, phone } = props.item;
  return (
    <div className="card">
      <img
        src={`https://backend-ufop.herokuapp.com/images/${imageId}`}
        alt="Imagem do Objeto"
      />
      <h2>{title}</h2>
      <p>{description}</p>

      <p>
        <img className="icon" src={phoneIcon} alt="telefone" /> {phone}
      </p>
    </div>
  );
};

export { Card };
