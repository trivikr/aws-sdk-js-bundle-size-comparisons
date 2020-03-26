import { GetItemCommand } from "@aws-sdk/client-dynamodb";

export const getItem = async (client, params) =>
  client.send(new GetItemCommand(params));
