const Header = ({ state }) => {
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

const styles = {
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    border: "8px solid #e9e9f4",
  },
  subtitle: { color: "#000", fontSize: 18, textAlign: "center" },
  price: {
    color: "#000",
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 0,
  },
};
