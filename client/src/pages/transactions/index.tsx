import React from "react";
import Header from "../../components/transactions/Header";
import Cards from "../../components/transactions/Cards";
import { useLocation } from "react-router-dom";

const TransactionsPage = () => {
  let { state } = useLocation();
  return (
    <div style={{ margin: "auto", backgroundColor: "#e9e9f4" }}>
      <Header state={state} />
      <Cards />
    </div>
  );
};

export default TransactionsPage;
