import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";

export const deleteItem = async (client, params) =>
  client.send(new DeleteItemCommand(params));
