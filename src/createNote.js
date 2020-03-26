import { putItem } from "./libs/v3-beta";

const createNote = async (tableName, noteId, content) => {
  const params = {
    TableName: tableName,
    Item: {
      noteId: { S: noteId },
      content: { S: content }
    }
  };
  try {
    await putItem(params);
    return true;
  } catch (e) {
    return false;
  }
};

export { createNote };
