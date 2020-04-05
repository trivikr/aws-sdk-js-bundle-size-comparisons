import { deleteItem } from "@aws-sdk/v3-preview-modular";

const deleteNote = async (tableName, noteId) => {
  const params = {
    TableName: tableName,
    Key: {
      noteId: { S: noteId },
    },
  };

  try {
    await deleteItem(params);
    return true;
  } catch (e) {
    return false;
  }
};

export { deleteNote };
