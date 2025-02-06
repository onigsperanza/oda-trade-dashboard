import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./GoogleLoginPage.css";

interface GoogleLoginPageProps {
  onLogin: (response: any) => void;
}

const GoogleLoginPage: React.FC<GoogleLoginPageProps> = ({ onLogin }) => {
  return (
    <div className="login-container">
      <h1>Login to Access ODA & Trade Dashboard</h1>
      <GoogleLogin onSuccess={onLogin} onError={() => console.log("Login Failed")} />
    </div>
  );
};

export default GoogleLoginPage;
