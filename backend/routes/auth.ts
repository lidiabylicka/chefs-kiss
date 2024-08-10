import express from "express";
const router = express.Router();
import { cognito } from "../config/awsConfig";

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  const params = {
    ClientId: process.env.COGNITO_APP_CLIENT_ID || "", // Your App Client ID
    Username: username,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  };

  try {
    const data = await cognito.signUp(params).promise();
    res.status(200).json({ message: "Registration successful", data });
  } catch (err: Error | any) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.COGNITO_APP_CLIENT_ID || "", // Your App Client ID
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const data = await cognito.initiateAuth(params).promise();
    const { IdToken, AccessToken, RefreshToken } =
      data.AuthenticationResult || {};
    res.status(200).json({
      message: "Login successful",
      idToken: IdToken,
      accessToken: AccessToken,
      refreshToken: RefreshToken,
    });
  } catch (err: Error | any) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
