"use client";

import { useState } from "react";
import { Auth } from "aws-amplify";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      // Register the user using Amplify Auth
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // default is empty string
        },
      });
      console.log("User registered successfully:", user);
      // Optionally redirect or show a success message
    } catch (error) {
      console.error("Error registering:", error);
      // Optionally handle registration errors
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
