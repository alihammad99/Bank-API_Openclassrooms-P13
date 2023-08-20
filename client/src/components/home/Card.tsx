import { styles } from "./styles/card";

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div style={styles.container}>
      <div style={styles.photoBox}>
        <img src={icon} width="100" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
export default Card;
