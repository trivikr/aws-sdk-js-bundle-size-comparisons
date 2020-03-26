import AWS from "aws-sdk";
import { createNote } from "../src/createNote";
import { getNote } from "../src/getNote";
import { updateNote } from "../src/updateNote";
import { deleteNote } from "../src/deleteNote";

jest.setTimeout(500000);

describe("testing CRUD operations on DynamoDB", () => {
  const TableName = `notes-table-${Math.floor(Math.random() * 10 ** 10)}`;
  const id = `id-${Math.floor(Math.random() * 10 ** 10)}`;

  beforeAll(async () => {
    const client = new AWS.DynamoDB({ region: "us-west-2" });
    await client
      .createTable({
        AttributeDefinitions: [
          {
            AttributeName: "noteId",
            AttributeType: "S"
          }
        ],
        KeySchema: [
          {
            AttributeName: "noteId",
            KeyType: "HASH"
          }
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        },
        TableName
      })
      .promise();
    await client.waitFor("tableExists", { TableName }).promise();
  });

  it("create note", async () => {
    expect.assertions(2);

    const content = `test-content-${Math.floor(Math.random() * 10 ** 10)}`;
    await expect(createNote(TableName, id, content)).resolves.toEqual(true);

    const note = await getNote(TableName, id);
    expect(note.content.S).toEqual(content);
  });

  it("update note", async () => {
    expect.assertions(1);

    const content = `test-content-${Math.floor(Math.random() * 10 ** 10)}`;
    const note = await updateNote(TableName, id, content);
    expect(note.content.S).toEqual(content);
  });

  it("delete note", async () => {
    expect.assertions(2);

    await expect(deleteNote(TableName, id)).resolves.toEqual(true);
    await expect(getNote(TableName, id)).resolves.toBeUndefined();
  });

  afterAll(async () => {
    const client = new AWS.DynamoDB();
    await client.deleteTable({ TableName }).promise();
    await client.waitFor("tableNotExists", { TableName }).promise();
  });
});
