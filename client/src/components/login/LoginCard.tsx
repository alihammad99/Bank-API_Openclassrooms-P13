import { useState } from "react";
import FeatherIcon from "feather-icons-react";
const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      style={{
        width: 280,
        height: 360,
        backgroundColor: "#fff",
        padding: 16,
        margin: "auto",
        position: "absolute",
        top: "12%",
        left: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        textAlign: "center",
      }}
    >
      {/* Header */}
      <div>
        <FeatherIcon icon="user" />
        <h2>Sign In</h2>
      </div>

      {/* Form */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>Username</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "2px solid #b9b9b9",
            padding: 4,
            width: 242,
            height: 32,
          }}
        >
          <input
            placeholder="ali@example.com"
            type="text"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: 0,
              height: "100%",
              width: "100%",
              outline: "none",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>Password</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "2px solid #b9b9b9",
            padding: 4,
            width: 242,
            height: 32,
          }}
        >
          <input
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
            style={{
              backgroundColor: "#fff",
              color: "#000",
              border: 0,
              height: "100%",
              width: "100%",
              outline: "none",
            }}
          />
          <button
            style={{
              background: "none",
              borderWidth: 0,
              outline: "none",
              padding: 2,
              margin: 2,
            }}
            onClick={() => setShowPassword((value) => !value)}
          >
            {
              <FeatherIcon
                style={{ color: "#000000", height: 16 }}
                icon={showPassword ? "eye-off" : "eye"}
              />
            }
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 258,
        }}
      >
        <input
          type="checkbox"
          style={{
            background: "none",
            height: 16,
            width: 16,
            color: "#ffffff",
            border: 0,
          }}
        />
        <label>Remember me</label>
      </div>

      {/* Button */}
      <div>
        <button
          style={{
            backgroundColor: "#18aa6b",
            padding: 12,
            width: 250,
            borderRadius: 0,
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
