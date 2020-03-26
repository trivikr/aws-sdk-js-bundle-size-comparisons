import { deleteItem } from "./libs/v3-beta";

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
