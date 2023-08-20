import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { styles } from "./styles/card";

interface CardProps {
  item: string;
  mobile: string;
  index: string;
}

const Card: React.FC<CardProps> = ({ item, mobile, index }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      key={index}
      style={{
        ...styles.container,
        width: mobile ? "94%" : "100%",
        padding: mobile ? 6 : 24,
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
      <div style={{ ...styles.topBox, marginLeft: mobile ? 30 : 80 }}>
        <h2
          style={{
            ...styles.text,
            fontSize: mobile ? 12 : 16,
            minWidth: mobile ? 100 : 150,
          }}
        >
          {item.date}
        </h2>
        <h2
          style={{
            ...styles.text,
            fontSize: mobile ? 12 : 16,
            minWidth: mobile ? 100 : 180,
          }}
        >
          {item.description}
        </h2>
        <h2
          style={{
            ...styles.text,
            fontSize: mobile ? 12 : 16,
            minWidth: mobile ? 20 : 30,
          }}
        >
          ${" "}
          {item.amount.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </h2>
        <h2
          style={{
            ...styles.text,
            fontSize: mobile ? 12 : 16,
            minWidth: mobile ? 60 : 90,
          }}
        >
          ${" "}
          {item.balance.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </h2>
      </div>
      {/* Bottom */}
      <div style={{ marginLeft: mobile ? 32 : 80 }}>
        <h2 style={{ ...styles.text, fontSize: mobile ? 12 : 16 }}>
          Transaction Type: {item.transactionType}{" "}
          <FeatherIcon icon="edit-2" size="16" />
        </h2>
        <h2 style={{ ...styles.text, fontSize: mobile ? 12 : 16 }}>
          Category: {item.category} <FeatherIcon icon="edit-2" size="16" />
        </h2>
        <h2 style={{ ...styles.text, fontSize: mobile ? 12 : 16 }}>
          Notes: {item.notes} <FeatherIcon icon="edit-2" size="16" />
        </h2>
      </div>
    </div>
  );
};

export default Card;
