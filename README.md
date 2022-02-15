# dirFlat

`dirFlat` is a very basic function to recursively fetch all files in a directory, including sub-directories. 

File structure:
```
.
+-- foo.txt
+-- bar.js
+-- index.js
+-- _test
|   +-- foo.js
|   +-- bar.txt
```

index.js
```js
const dirFlat = require("dirFlat");

dirFlat("./").then(console.log);
// ouputs ["./foo.txt", "./bar.js", "./index.js", "./test/foo.js", "./test/bar.txt"]
```