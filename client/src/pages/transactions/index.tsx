import React from "react";
import Header from "../../components/transactions/Header";
import Cards from "../../components/transactions/Cards";

const TransactionsPage = () => {
  return (
    <div style={{ margin: "auto", backgroundColor: "#dddddd" }}>
      <Header />
      <Cards />
    </div>
  );
};

export default TransactionsPage;
