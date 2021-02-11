const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express('server');

const loginRequestHandler = (req, res) =>{
    // let body = "";
    // req.on('data', chunk =>{
    //     body += chunk;
    
    // });
    // req.on('end', ()=> {
    //     //parse the data with RegEx
    //     console.log(body);
    // })
    console.log(req.body.email);
    console.log(req.body.password);
    
    
    res.send('DONE');
}

const SignupRequestHandler = (req, res) =>{
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);

    res.send('SIGN UP')
}


// //middleware definitions
server.use(express.static(path.join(__dirname,'public')))
server.use(bodyParser.urlencoded({extended: false}))

//route
server.post('/login', loginRequestHandler)
server.post('/signup', SignupRequestHandler)



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
const serveContactPage = (req, res) => {
    const ContactPageFilePath = path.join(__dirname, 'public', 'contact.html' );
    res.sendFile(serveContactPage);
}

const serveAboutPage = (req, res) => {
    const AboutPageFilePath = path.join(__dirname, 'public', 'about.html');
    res.sendFile(serveAboutPage);
}


//route definitions

// server.get('/', serveHomePage);
// server.get('/profile', serveprofilePage);
server.get('/contact', serveContactPage);
server.get('/about', serveAboutPage);

server.listen(3000,()=>console.log('MAESTROS SERVER IS READY'));


// const handleAllTypesOfRequests = (req, res) => {
//    res.send("Response from server.use");
// }
 
// server.use('/profile', handleAllTypesOfRequests);
// serv er.get('/login', (req, res) => res.send('Hello this is the login page'));

// server.listen(3000, () => console.log('server is ultra ready'));