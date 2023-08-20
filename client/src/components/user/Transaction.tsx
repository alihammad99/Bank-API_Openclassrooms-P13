import { Link } from "react-router-dom";
import { styles } from "./styles/transaction";

interface Props {
  id: string;
  balance: number;
}

const Transaction: React.FC<Props> = ({ id, balance }) => {
  const width = window.innerWidth;
  const mobile = width <= 500;
  return (
    <div
      style={{
        ...styles.container,
        flexDirection: mobile ? "column" : "row",
        padding: mobile ? "16px 24px" : "8px 24px",
        alignItems: mobile ? "flex-start" : "center",
      }}
    >
      {/* Left */}
      <div>
        <p>Argent Banck Checking (x{id})</p>
        <h2>
          ${" "}
          {balance.toLocaleString("en-US", {
            useGrouping: true,
          })}
        </h2>
        <p>Available Balance</p>
      </div>

      {/* Right */}
      <div>
        <Link to="/transactions" state={{ id, balance }} style={styles.right}>
          View transactions
        </Link>
      </div>
    </div>
  );
};
export default Transaction;
