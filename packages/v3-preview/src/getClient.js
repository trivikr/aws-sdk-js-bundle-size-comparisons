import { DynamoDBClient } from "@aws-sdk/client-dynamodb-node";

export const getClient = () => new DynamoDBClient({});
