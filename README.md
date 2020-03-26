# aws-sdk-js-bundle-size-comparisons

- `yarn build` to compile JavaScript to bundles
- `yarn test` to test source code
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
  $ ls -lh dist | awk '{print $6,$10}'
  82K createNote.js
  82K deleteNote.js
  78K getNote.js
  82K updateNote.js
  ```
