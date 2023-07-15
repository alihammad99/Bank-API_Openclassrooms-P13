import { useState } from "react";
import ConnectedLoginForm from "../../components/auth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  if (token) return <Navigate to="/" replace={true} />;
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        backgroundColor: "#12002B",
        position: "relative",
      }}
    >
      <ConnectedLoginForm />

      {/* <LoginCard /> */}
    </div>
  );
};

export default LoginPage;
