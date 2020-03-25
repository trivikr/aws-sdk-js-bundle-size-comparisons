import { getItem } from "./libs/v3-beta";
import { success, failure } from "./libs/response";

const handler = async event => {
  const params = {
    TableName: process.env.NOTES_TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'noteId': path parameter
    Key: {
      noteId: { S: event.pathParameters.id }
    }
  };

  try {
    // @ts-ignore
    const result = await getItem(params);
    if (result.Item) {
      // Return the retrieved item
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Item not found." });
    }
  } catch (e) {
    return failure({ status: false });
  }
};

export { handler };
