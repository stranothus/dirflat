const dirflat = require("../lib/index.js");

(async () => {
    const folder = await dirflat("./tests/folder");

    console.log(folder);
})();