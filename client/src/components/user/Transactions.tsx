import { useState } from "react";
import Transaction from "./Transaction";
import { styles } from "./styles/transactions";

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

  return (
    <div style={styles.container}>
      {mockTransitions.map((item) => (
        <Transaction key={item.id} id={item.id} balance={item.balance} />
      ))}
    </div>
  );
};

export default Transactions;
