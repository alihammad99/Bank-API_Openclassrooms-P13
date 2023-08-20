import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { styles } from "./styles";
const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={styles.container}>
      {/* Header */}
      <div>
        <FeatherIcon icon="user" />
        <h2>Sign In</h2>
      </div>

      {/* Form */}

      <div style={styles.form}>
        <label>Username</label>
        <div style={styles.inputBox}>
          <input
            placeholder="ali@example.com"
            type="text"
            style={styles.input}
          />
        </div>
      </div>
      <div style={styles.column}>
        <label>Password</label>
        <div style={styles.inputBox}>
          <input
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
            style={styles.input}
          />
          <button
            style={styles.eye}
            onClick={() => setShowPassword((value) => !value)}
          >
            {
              <FeatherIcon
                style={styles.eyeIcon}
                icon={showPassword ? "eye-off" : "eye"}
              />
            }
          </button>
        </div>
      </div>
      <div style={styles.rememberBox}>
        <input type="checkbox" style={styles.rememberInput} />
        <label>Remember me</label>
      </div>

      {/* Button */}
      <div>
        <button style={styles.signIn}>Sign in</button>
      </div>
    </div>
  );
};

export default LoginCard;
