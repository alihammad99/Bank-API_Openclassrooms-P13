import ChatIcon from "../../assets/img/icon-chat.png";
import MoneyIcon from "../../assets/img/icon-money.png";
import SecurityIcon from "../../assets/img/icon-security.png";
import { styles } from "./styles/main";
import Card from "./Card";
const width = window.innerWidth;
const mobile = width <= 500;

const Main = () => {
  return (
    <div
      style={{ ...styles.container, flexDirection: mobile ? "column" : "row" }}
    >
      <Card
        icon={ChatIcon}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Card
        icon={MoneyIcon}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <Card
        icon={SecurityIcon}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </div>
  );
};

export default Main;
