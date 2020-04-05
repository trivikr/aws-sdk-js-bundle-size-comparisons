import { getClient } from "./getClient";

export const deleteItem = async params =>
  getClient()
    .deleteItem(params)
    .promise();
