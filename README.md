# aws-sdk-js-bundle-size-comparisons

- `yarn build` to compile JavaScript to bundles
- Examine the size of bundles emitted by webpack

## bundle sizes when commands are imported from:

- libs/v2 (VERSION: aws-sdk@2.646.0)

  ```console
          Asset     Size  Chunks             Chunk Names
  createNote.js  306 KiB       0  [emitted]  createNote
  deleteNote.js  306 KiB       1  [emitted]  deleteNote
     getNote.js  306 KiB       2  [emitted]  getNote
  updateNote.js  306 KiB       3  [emitted]  updateNote
  ```

- libs/v3-preview (VERSION: @aws-sdk/client-dynamodb-node@0.1.0-preview.9)

  ```console
          Asset     Size  Chunks             Chunk Names
  createNote.js  154 KiB       0  [emitted]  createNote
  deleteNote.js  154 KiB       1  [emitted]  deleteNote
     getNote.js  154 KiB       2  [emitted]  getNote
  updateNote.js  154 KiB       3  [emitted]  updateNote
  ```

- libs/v3-beta (VERSION: @aws-sdk/client-dynamodb@1.0.0-beta.1)

  ```console
          Asset      Size  Chunks             Chunk Names
  createNote.js    97 KiB       0  [emitted]  createNote
  deleteNote.js  96.8 KiB       1  [emitted]  deleteNote
     getNote.js  96.9 KiB       2  [emitted]  getNote
  updateNote.js  96.9 KiB       3  [emitted]  updateNote
  ```
