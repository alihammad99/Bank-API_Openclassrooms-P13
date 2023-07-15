import { useEffect, useState } from "react";

const categories = [
  "Food",
  "Tech",
  "Travel",
  "Business",
  "Education",
  "Service",
];

const Transactions = () => {
  const [mockTransitions, setMockTransitions] = useState([
    {
      id: "15bg81",
      balance: 2154.7,
      date: "June 20th, 2020",
      amount: 20,
      category: categories[2],
    },
    {
      id: "vs6f51",
      balance: 1525.25,
      date: "June 22th, 2020",
      amount: 90,
      category: categories[0],
    },
    {
      id: "tefc62",
      balance: 3500,
      date: "Aug 16th, 2020",
      amount: 17,
      category: categories[1],
    },
    {
      id: "fe6295",
      balance: 2700,
      date: "Aug 16th, 2020",
      amount: 24,
      category: categories[3],
    },
  ]);

  const updateCategory = (transactionId, categoryIndex) => {
    const data = mockTransitions.filter((item) => item.id !== transactionId);
    const transaction = mockTransitions.find(
      (item) => item.id === transactionId
    );
    if (transaction) {
      return setMockTransitions(() => [
        ...data,
        { ...transaction, category: categories[categoryIndex] },
      ]);
    } else {
      return alert("transaction is not found");
    }
  };

  return (
    <div
      style={{
        maxWidth: 1350,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        paddingTop: 64,
        paddingBottom: 64,
      }}
    >
      {mockTransitions.map((item) => (
        <Transaction key={item.id} id={item.id} balance={item.balance} />
      ))}
    </div>
  );
};

const Transaction = ({ id, balance }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px",
        border: "3px solid #a8aabf",
        backgroundColor: "#fff",
      }}
    >
      {/* Left */}
      <div>
        <p>Argent Banck Checking ({id})</p>
        <h2>$ {balance}</h2>
        <p>Available Balance</p>
      </div>

      {/* Right */}
      <div>
        <button
          style={{
            padding: 16,
            backgroundColor: "#4d12e2",
            color: "#fff",
            borderRadius: 0,
          }}
        >
          View transactions
        </button>
      </div>
    </div>
  );
};

export default Transactions;
