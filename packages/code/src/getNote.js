import { getItem } from "@aws-sdk/v3-beta";

const getNote = async (tableName, noteId) => {
  const params = {
    TableName: tableName,
    Key: {
      noteId: { S: noteId },
    },
  };

  try {
    const result = (await getItem(params)) || {};
    return result.Item;
  } catch (e) {
    return false;
  }
};

export { getNote };
