import { updateItem } from "@aws-sdk/v3-beta";

const updateNote = async (tableName, noteId, content) => {
  const params = {
    TableName: tableName,
    Key: {
      noteId: { S: noteId },
    },
    UpdateExpression: "SET content = :content",
    ExpressionAttributeValues: {
      ":content": { S: content },
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const response = await updateItem(params);
    return response.Attributes;
  } catch (e) {
    return false;
  }
};

export { updateNote };
