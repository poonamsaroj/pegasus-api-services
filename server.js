let app = require('./app');
let port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log("Server running at " + port)
})

server.timeout = 1000 * 60 * 20; // 20 minutes


