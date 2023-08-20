import generateRandomTransactions from "../../utils/transactions";
import Card from "./Card";
import { styles } from "./styles/cards";

const width = window.innerWidth;
const mobile = width <= 500;

const Cards = () => {
  const transactions = generateRandomTransactions().map((item, index) => (
    <Card key={index} item={item} mobile={mobile} index={index} />
  ));

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.labels,
          marginLeft: mobile ? 20 : 150,
          width: mobile ? "90%" : "100%",
        }}
      >
        <p>Date</p>
        <p>Description</p>
        <p>Amount</p>
        <p>Balance</p>
      </div>
      {transactions}
    </div>
  );
};

export default Cards;
