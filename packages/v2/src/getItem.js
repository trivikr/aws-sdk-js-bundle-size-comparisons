import { getClient } from "./getClient";

export const getItem = async params =>
  getClient()
    .getItem(params)
    .promise();
