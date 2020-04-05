import { getClient } from "./getClient";
import { GetItemCommand } from "@aws-sdk/client-dynamodb";

export const getItem = async (params) =>
  getClient().send(new GetItemCommand(params));
