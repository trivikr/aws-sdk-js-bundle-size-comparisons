import { UpdateItemCommand } from "@aws-sdk/client-dynamodb";

export const updateItem = async (client, params) =>
  client.send(new UpdateItemCommand(params));
