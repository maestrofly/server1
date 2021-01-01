const express = require('express');

const server = express();

const handleAllTypesOfRequests = (req, res) => {
   res.send("Response from server.use");
}
 
server.use('/profile', handleAllTypesOfRequests);
server.get('/login', (req, res) => res.send('Hello this is the login page'));

server.listen(3000, () => console.log('server is ultra ready'));