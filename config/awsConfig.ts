import * as AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1", // Your AWS region
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default dynamoDB;
