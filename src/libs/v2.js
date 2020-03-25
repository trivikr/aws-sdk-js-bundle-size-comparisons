import DynamoDB from "aws-sdk/clients/dynamodb";

const client = new DynamoDB();

export const putItem = async params => client.putItem(params).promise();
export const deleteItem = async params => client.deleteItem(params).promise();
export const getItem = async params => client.getItem(params).promise();
export const updateItem = async params => client.updateItem(params).promise();
