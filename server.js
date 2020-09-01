let app = require('./app'); //Calling app file
let port = process.env.PORT || 3000; //assigning port value to run at

// Listening on port 300
const server = app.listen(port, () => {
    console.log("Server running at " + port)
})

server.timeout = 1000 * 60 * 20; // 20 minutes


