import LoginForm from "../../components/auth";
import { Navigate } from "react-router-dom";
import { styles } from "./styles";

const LoginPage = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  if (token) return <Navigate to="/" replace={true} />;
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
