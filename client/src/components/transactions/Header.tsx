import { styles } from "./styles/header";
interface HeaderProps {
  state: {
    id: number;
    balance: number;
  };
}

const Header: React.FC<HeaderProps> = ({ state }) => {
  return (
    <div style={styles.container}>
      <p style={styles.subtitle}>Argent Bank Checking (x{state.id})</p>
      <h2 style={styles.price}>
        ${" "}
        {state.balance.toLocaleString("en-US", {
          useGrouping: true,
        })}
      </h2>
      <p style={styles.subtitle}>Available Balance</p>
    </div>
  );
};

export default Header;
