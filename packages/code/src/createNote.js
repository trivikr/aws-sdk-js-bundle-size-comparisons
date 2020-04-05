import { putItem } from "@aws-sdk/v3-preview-modular";

const createNote = async (tableName, noteId, content) => {
  const params = {
    TableName: tableName,
    Item: {
      noteId: { S: noteId },
      content: { S: content },
    },
  };
  try {
    await putItem(params);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { createNote };
