import { Amplify } from "aws-amplify";

const awsConfig = {
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: "eu-north-1", // Replace with your region

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "eu-north-1_HCigkAVGl", // Replace with your User Pool ID

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "4jrdmma4lppn2sb2fm8bg47b2m", // Replace with your App Client ID
  },
};

export default awsConfig;
