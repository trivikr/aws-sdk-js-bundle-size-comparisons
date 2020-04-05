import { getClient } from "./getClient";

export const updateItem = async (params) =>
  getClient().updateItem(params).promise();
