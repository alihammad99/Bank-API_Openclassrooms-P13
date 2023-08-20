import React, { useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../context/reducers";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  updateToken,
} from "../../context/actions";
import { login } from "../../api";
import FeatherIcon from "feather-icons-react";
import { styles } from "./styles";
import { inputStyles } from "./styles/input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  loading: boolean;
  error: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ loading, error }) => {
  const [email, setEmail] = useState("tony@stark.com");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest());
    console.log("Logging in...");
    try {
      const token = await login(email, password);
      if (token) {
        console.log("Login successful!");
        dispatch(loginSuccess(token, rememberMe));
        dispatch(updateToken(token));
        navigate("/profile");
      }
    } catch (error) {
      console.log("Login failed:", error);
      dispatch(loginFailure(error));
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      {/* Header */}
      <div>
        <FeatherIcon icon="user" />
        <h2>Sign In</h2>
      </div>
      <div style={inputStyles.container}>
        <label>Username</label>
        <div style={inputStyles.box}>
          <input
            placeholder="ali@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles.username}
          />
        </div>
      </div>
      <div style={inputStyles.container}>
        <label>Password</label>
        <div style={inputStyles.box}>
          <input
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles.password}
          />
          <button
            type="button"
            style={inputStyles.eye}
            onClick={() => setShowPassword((value) => !value)}
          >
            <FeatherIcon
              style={inputStyles.icon}
              icon={showPassword ? "eye-off" : "eye"}
            />
          </button>
        </div>
      </div>
      <div style={inputStyles.checkBox}>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          style={inputStyles.input}
        />
        <label>Remember me</label>
      </div>

      <div>
        <button style={styles.button} type="submit" disabled={loading}>
          Sign in
        </button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = {
  loginRequest,
  loginSuccess,
  loginFailure,
};

const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default ConnectedLoginForm;
