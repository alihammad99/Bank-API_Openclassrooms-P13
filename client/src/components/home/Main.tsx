import React from "react";
import ChatIcon from "../../assets/img/icon-chat.png";
import MoneyIcon from "../../assets/img/icon-money.png";
import SecurityIcon from "../../assets/img/icon-security.png";
const width = window.innerWidth;
const mobile = width <= 500;

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        maxWidth: 1350,
        justifyContent: "space-between",
        marginTop: 40,
        margin: "auto",
        width: "100%",
        alignItems: "center",
        gap: 8,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Card
        icon={ChatIcon}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Card
        icon={MoneyIcon}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <Card
        icon={SecurityIcon}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </div>
  );
};

export default Main;

const Card = ({ icon, title, text }) => {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: 16,
          borderWidth: 10,
          borderRadius: "50%",
          borderColor: "#5cd18f",
          borderStyle: "solid",
          width: 100,
          height: 100,
        }}
      >
        <img src={icon} width="100" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
