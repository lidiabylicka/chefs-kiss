import AWS from "aws-sdk";
const CognitoIdentityServiceProvider = AWS.CognitoIdentityServiceProvider;

AWS.config.update({
  region: "eu-north-1", // Your AWS region
});

export const cognito = new CognitoIdentityServiceProvider();

module.exports = cognito;
