import bg from "../../assets/img/bank-tree.jpeg";
import { styles } from "./styles/hero";

const Hero = () => {
  return (
    <div style={styles.container}>
      <img style={styles.photo} src={bg} alt="Logo" width="100%" height="440" />
      <div style={styles.box}>
        <h2>
          No fees.
          <br />
          No minimum deposit.
          <br />
          High interest rates.
        </h2>
        <p>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
};

export default Hero;
