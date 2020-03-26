import { getClient, putItem } from "@aws-sdk/v3-beta";

const createNote = async (tableName, noteId, content) => {
  const params = {
    TableName: tableName,
    Item: {
      noteId: { S: noteId },
      content: { S: content }
    }
  };
  try {
    const client = getClient();
    await putItem(client, params);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { createNote };
