const server = require("./server");

(async () => {
    await server.start();
    console.log("Server listening " + server.info.uri);
})();