import { deleteItem } from "./libs/v3-preview";
import { success, failure } from "./libs/response";

const handler = async event => {
  const params = {
    TableName: process.env.NOTES_TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'noteId': path parameter
    Key: {
      noteId: {
        S: event.pathParameters.id
      }
    }
  };

  try {
    // @ts-ignore
    await deleteItem(params);
    return success({ status: true });
  } catch (e) {
    return failure({ status: false });
  }
};

export { handler };
