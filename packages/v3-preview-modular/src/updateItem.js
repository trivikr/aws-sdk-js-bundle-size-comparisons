import { getClient } from "./getClient";
import { UpdateItemCommand } from "@aws-sdk/client-dynamodb-node";

export const updateItem = async (params) =>
  getClient().send(new UpdateItemCommand(params));
