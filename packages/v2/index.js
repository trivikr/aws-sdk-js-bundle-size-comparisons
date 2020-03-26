import DynamoDB from "aws-sdk/clients/dynamodb";

const getClient = () => new DynamoDB();

export const putItem = async params =>
  getClient()
    .putItem(params)
    .promise();
export const deleteItem = async params =>
  getClient()
    .deleteItem(params)
    .promise();
export const getItem = async params =>
  getClient()
    .getItem(params)
    .promise();
export const updateItem = async params =>
  getClient()
    .updateItem(params)
    .promise();
