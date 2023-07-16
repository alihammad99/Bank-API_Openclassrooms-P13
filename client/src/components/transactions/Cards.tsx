import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import generateRandomTransactions from "../../utils/transactions";

const width = window.innerWidth;
const mobile = width <= 500;

const Cards = () => {
  const transactions = generateRandomTransactions().map((item, index) => (
    <RenderCard key={index} item={item} index={index} />
  ));

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
        cursor: "pointer",
      }}
      onClick={() => setOpened(!opened)}
    >
      {/* Top */}
      <div style={{ position: "absolute", top: mobile ? 16 : 32 }}>
        <FeatherIcon
          icon={opened ? "arrow-up" : "arrow-down"}
          size={mobile ? "16" : "24"}
        />
      </div>
      <div style={styles.card.topBox}>
        <h2 style={{ ...styles.card.text, minWidth: mobile ? 100 : 150 }}>
          {item.date}
        </h2>
        <h2 style={{ ...styles.card.text, minWidth: mobile ? 100 : 180 }}>
          {item.description}
        </h2>
        <h2 style={{ ...styles.card.text, minWidth: mobile ? 20 : 30 }}>
          ${" "}
          {item.amount.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </h2>
        <h2 style={{ ...styles.card.text, minWidth: mobile ? 60 : 90 }}>
          ${" "}
          {item.balance.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </h2>
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
      border: "4px solid #e9e9f4",
      overflow: "hidden",
      width: mobile ? "94%" : "100%",
      padding: mobile ? 6 : 24,
    },
    topBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: mobile ? 30 : 80,
      justifyContent: "space-between",
    },

    text: {
      color: "#000",
      fontSize: mobile ? 12 : 16,
      minWidth: 100,
      textAlign: "left",
    },
  },
  bottomBox: { marginLeft: mobile ? 32 : 80 },
  labels: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    marginLeft: mobile ? 20 : 150,
    width: mobile ? "90%" : "100%",
  },
};
