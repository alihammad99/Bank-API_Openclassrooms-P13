const Header = () => {
  return (
    <div style={styles.container}>
      <p style={styles.subtitle}>Argent Bank Checking</p>
      <h2 style={styles.price}>$ 2849837</h2>
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
  },
  subtitle: { color: "#000", fontSize: 24, textAlign: "center" },
  price: {
    color: "#000",
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
  },
};
