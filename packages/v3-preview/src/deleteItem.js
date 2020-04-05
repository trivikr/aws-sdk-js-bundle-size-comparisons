import { getClient } from "./getClient";
import { DeleteItemCommand } from "@aws-sdk/client-dynamodb-node";

export const deleteItem = async (params) =>
  getClient().send(new DeleteItemCommand(params));
