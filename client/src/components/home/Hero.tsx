import React from "react";
import bg from "../../assets/img/bank-tree.jpeg";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ objectFit: "cover", objectPosition: "50% 27%" }}
        src={bg}
        alt="Logo"
        width="100%"
        height="440"
      />
      <div
        style={{
          position: "absolute",
          top: "22%",
          right: "10%",
          backgroundColor: "#fff",
          padding: 24,
          width: 300,
        }}
      >
        <h2>No fees.<br/>No minimum deposit.<br/>High interest rates.</h2>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
};

export default Hero;
