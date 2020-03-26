import { deleteItem } from "@aws-sdk/v2";

const deleteNote = async (tableName, noteId) => {
  const params = {
    TableName: tableName,
    Key: {
      noteId: { S: noteId }
    }
  };

  try {
    await deleteItem(params);
    return true;
  } catch (e) {
    return false;
  }
};

export { deleteNote };
