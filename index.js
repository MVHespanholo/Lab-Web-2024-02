const { init } = require("./server");

const start = async () => {
    try {
        const server = await init();
        await server.start();
        console.log('Server running at:', server.info.uri);
        console.log('Documentation available at:', server.info.uri + '/documentation');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();