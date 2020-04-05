import { getClient } from "./getClient";

export const putItem = async params =>
  getClient()
    .putItem(params)
    .promise();
