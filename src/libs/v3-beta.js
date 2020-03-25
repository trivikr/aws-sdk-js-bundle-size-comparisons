import {
  DynamoDBClient,
  PutItemCommand,
  DeleteItemCommand,
  GetItemCommand,
  UpdateItemCommand
} from "@aws-sdk/client-dynamodb";

const getClient = () => new DynamoDBClient();

export const putItem = async params =>
  getClient().send(new PutItemCommand(params));
export const deleteItem = async params =>
  getClient().send(new DeleteItemCommand(params));
export const getItem = async params =>
  getClient().send(new GetItemCommand(params));
export const updateItem = async params =>
  getClient().send(new UpdateItemCommand(params));
