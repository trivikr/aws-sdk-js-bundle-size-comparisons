import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

export const putItem = async params => client.send(new PutItemCommand(params));
export const deleteItem = async params =>
  client.send(new DeleteItemCommand(params));
export const getItem = async params => client.send(new GetItemCommand(params));
export const updateItem = async params =>
  client.send(new UpdateItemCommand(params));
