const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8000; //we dont want to conflict with port
//serving our frontend which is at 3000

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
});
