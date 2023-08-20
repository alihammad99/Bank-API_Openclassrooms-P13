import Username from "../../components/user/Username";
import Transactions from "../../components/user/Transactions";
import { styles } from "./styles";

const UserPage = () => {
  return (
    <div style={styles.container}>
      <Username />
      <Transactions />
    </div>
  );
};

export default UserPage;
