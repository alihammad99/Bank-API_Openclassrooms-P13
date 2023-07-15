import React from "react";
import Username from "../../components/user/Username";
import Transactions from "../../components/user/Transactions";

const UserPage = () => {
  return (
    <div style={{ backgroundColor: "#e9e9f4" }}>
      <Username />
      <Transactions />
    </div>
  );
};

export default UserPage;
