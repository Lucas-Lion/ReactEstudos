import React from "react";
import { Card } from "antd";
import image from "../assets/react.svg";

const Birthday = () => (
  <Card
    title={
      <div
        style={{ color: "#fff", backgroundColor: "#001529", padding: "10px" }}
      >
        Aniversariantes do mês
      </div>
    }
    bordered={false}
    style={{
      width: 400,
      textAlign: "center",
    }}
    className="cardTeste"
  >
    <div className="aniver">
      <div>
        <img src={image} width={40} alt="teste" />
      </div>
      <div>
        <p>Lucas Lion da Silva Valença</p>
        <p>17 / 07</p>
        <p>Informática</p>
      </div>
    </div>
  </Card>
);

export default Birthday;
