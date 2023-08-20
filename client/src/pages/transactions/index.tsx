import Header from "../../components/transactions/Header";
import Cards from "../../components/transactions/Cards";
import { useLocation } from "react-router-dom";
import { styles } from "./styles";

const TransactionsPage = () => {
  const { state } = useLocation();
  return (
    <div style={styles.container}>
      <Header state={state} />
      <Cards />
    </div>
  );
};

export default TransactionsPage;
