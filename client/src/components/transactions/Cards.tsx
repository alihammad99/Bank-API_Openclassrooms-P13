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
          marginLeft: mobile ? 20 : 100,
          width: mobile ? "90%" : "96%",
        }}
      >
        <p style={!mobile ? { transform: "translateX(6px)" } : {}}>Date</p>
        <p style={!mobile ? { transform: "translateX(40px)" } : {}}>
          Description
        </p>
        <p style={!mobile ? { transform: "translateX(55px)" } : {}}>Amount</p>
        <p style={!mobile ? { transform: "translateX(-55px)" } : {}}>Balance</p>
      </div>
      {transactions}
    </div>
  );
};

export default Cards;
