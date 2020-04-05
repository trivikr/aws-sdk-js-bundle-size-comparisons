import { getClient } from "./getClient";
import { PutItemCommand } from "@aws-sdk/client-dynamodb-node";

export const putItem = async params =>
  getClient().send(new PutItemCommand(params));
