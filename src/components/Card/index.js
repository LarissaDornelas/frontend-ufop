import React from "react";
import { Phone, CalendarToday } from "@material-ui/icons";
import { CardContainer, Description } from "./styles";
import moment from "moment";

const Card = props => {
  const { imageId, title, description, phone, createdAt } = props.item;

  const date = moment(createdAt);
  moment.locale("pt-br");
  return (
    <CardContainer
      background={`url(https://backend-ufop.herokuapp.com/images/${imageId})`}
    >
      <div class="imgWrapper"></div>
      <h2>{title}</h2>
      <Description>{description}</Description>

      <div class="info">
        <p>
          <Phone color="secondary" /> &nbsp; {phone}
        </p>
        <p>
          <CalendarToday color="secondary" />
          &nbsp; {date.format("L")}
        </p>
      </div>
    </CardContainer>
  );
};

export { Card };
