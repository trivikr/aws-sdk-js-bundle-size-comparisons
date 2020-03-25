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
