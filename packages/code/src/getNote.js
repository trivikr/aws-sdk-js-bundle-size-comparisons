import { getClient, getItem } from "@aws-sdk/v3-beta";

const getNote = async (tableName, noteId) => {
  const params = {
    TableName: tableName,
    Key: {
      noteId: { S: noteId }
    }
  };

  try {
    const client = getClient();
    const result = (await getItem(client, params)) || {};
    return result.Item;
  } catch (e) {
    return false;
  }
};

export { getNote };
