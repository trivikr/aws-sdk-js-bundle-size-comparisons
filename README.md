# aws-sdk-js-bundle-size-comparisons

- `yarn build` to compile JavaScript to bundles
- `yarn test` to test source code
- Examine the size of bundles emitted by webpack

## bundle sizes when commands are imported from:

- libs/v2 (VERSION: aws-sdk@2.646.0)

  ```console
  $ ls -lh dist | awk '{print $6,$10}'
  305K createNote.js
  305K deleteNote.js
  305K getNote.js
  305K updateNote.js
  ```

- libs/v3-preview (VERSION: @aws-sdk/client-dynamodb-node@0.1.0-preview.9)

  ```console
  $ ls -lh dist | awk '{print $6,$10}'
  153K createNote.js
  153K deleteNote.js
  153K getNote.js
  153K updateNote.js
  ```

- libs/v3-beta (VERSION: @aws-sdk/client-dynamodb@1.0.0-beta.1)

  ```console
  $ ls -lh dist | awk '{print $6,$10}'
  82K createNote.js
  82K deleteNote.js
  78K getNote.js
  82K updateNote.js
  ```
