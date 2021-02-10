const express = require('express');
const path = require('path');

const server = express('server');

// //middleware definitions
server.use(express.static(path.join(__dirname,'public')))

//  const serveHomePage = (req, res) =>{
//    //1. find the file
//    const homepageFilePath = path.join(__dirname, 'public', 'index.html'); 
//    //2. send file to client
//    res.sendFile(homepageFilePath);
//  }

//  const serveprofilePage =(req, res)=>{
//   const profilePageFilePath = path.join(__dirname,'public', 'profile.html');
//    res.sendFile(profilePageFilePath);
  
//  } 


//route definitions

// server.get('/', serveHomePage);
// server.get('/profile', serveprofilePage);

server.listen(3000,()=>console.log('MAESTROS SERVER IS READY'));


// const handleAllTypesOfRequests = (req, res) => {
//    res.send("Response from server.use");
// }
 
// server.use('/profile', handleAllTypesOfRequests);
// serv er.get('/login', (req, res) => res.send('Hello this is the login page'));

// server.listen(3000, () => console.log('server is ultra ready'));