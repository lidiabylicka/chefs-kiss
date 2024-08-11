import { Amplify } from "aws-amplify";

const awsConfig = {
  Auth: {
    Cognito: {
      region: "eu-north-1",
      userPoolId: "eu-north-1_HCigkAVGl",
      userPoolWebClientId: "4jrdmma4lppn2sb2fm8bg47b2m",
      signUpVerificationMethod: "code",
      loginWith: {
        // Optional
        oauth: {
          scopes: [
            "email",
            "openid",
            "username",
            "aws.cognito.signin.user.admin",
          ],
          redirectSignIn: ["http://localhost:3000/fridge"],
          redirectSignOut: ["http://localhost:3000/"],
          responseType: "code",
        },
        username: "true",
        email: "false", // Optional
      },
    },
  },
};

export default awsConfig;
