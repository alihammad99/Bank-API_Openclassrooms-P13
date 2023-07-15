import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import generateRandomTransactions from "../../utils/transactions";

const Cards = () => {
  const transactions = generateRandomTransactions().map((item, index) => (
    <RenderCard item={item} index={index} />
  ));
  console.log(transactions);

  return (
    <div style={styles.container}>
      <div style={styles.labels}>
        <p>Date</p>
        <p>Description</p>
        <p>Amount</p>
        <p>Balance</p>
      </div>
      {transactions}
    </div>
  );
};

const RenderCard = ({ item, index }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      key={index}
      style={{
        ...styles.card.container,
        height: opened ? "auto" : 34,
        position: "relative",
      }}
      onClick={() => setOpened(!opened)}
    >
      {/* Top */}
      <div style={{ position: "absolute", top: 32 }}>
        <FeatherIcon icon={opened ? "arrow-up" : "arrow-down"} />
      </div>
      <div style={styles.card.topBox}>
        <h2 style={{ ...styles.card.text, minWidth: 150 }}>{item.date}</h2>
        <h2 style={{ ...styles.card.text, minWidth: 180 }}>
          {item.description}
        </h2>
        <h2 style={{ ...styles.card.text, minWidth: 30 }}>{item.amount}</h2>
        <h2 style={{ ...styles.card.text, minWidth: 90 }}>{item.balance}</h2>
      </div>
      {/* Bottom */}
      <div style={styles.bottomBox}>
        <h2 style={styles.card.text}>
          Transaction Type: {item.transactionType}{" "}
          <FeatherIcon icon="edit-2" size="16" />
        </h2>
        <h2 style={styles.card.text}>
          Category: {item.category} <FeatherIcon icon="edit-2" size="16" />
        </h2>
        <h2 style={styles.card.text}>
          Notes: {item.notes} <FeatherIcon icon="edit-2" size="16" />
        </h2>
      </div>
    </div>
  );
};

export default Cards;

const styles = {
  container: {
    maxWidth: 1350,
    margin: "auto",
    paddingTop: 82,
    paddingBottom: 24,
  },
  card: {
    container: {
      backgroundColor: "#fff",
      border: "1px solid #000",
      overflow: "hidden",
      width: "100%",
      padding: 24,
    },
    topBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 80,
      justifyContent: "space-between",
    },

    text: { color: "#000", fontSize: 16, minWidth: 100, textAlign: "left" },
  },
  bottomBox: { marginLeft: 60 },
  labels: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    // width: "100%",
    // padding: 24,
    marginLeft: 150,
    // marginRight: 20,
  },
};
