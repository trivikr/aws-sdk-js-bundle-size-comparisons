import { PutItemCommand } from "@aws-sdk/client-dynamodb";

export const putItem = async (client, params) =>
  client.send(new PutItemCommand(params));
