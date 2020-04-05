import { DynamoDB } from "@aws-sdk/client-dynamodb-node";

export const getClient = () => new DynamoDB({});
