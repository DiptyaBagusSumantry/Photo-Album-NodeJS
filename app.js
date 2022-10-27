const express = require('express');
const app = express();
const router = require('./routers');
const port = 3001;

// const jwt = require("jsonwebtoken");

// const data = {
//     user: "diptya",
//     passw: "1234"
// };

// app.get("/", (request, response) => 
//     response.send("welcoome JWT anda perlu login")
// );

// function verifikasi(req,res,next){
//     let getHeader = req.headers["auth"];
//     if (typeof getHeader !== "undefined"){
//         req.token = getHeader;
//         next();
//     }else{
//         response.sendStatus(403);
//     }
// }

// jwt.sign({
//     data:data
// },
// "secret",
// (err, token) => { 
//     console.log(token);
// }
// );

// app.get("/data", verifikasi, (req,res) => {
//     jwt.verify(req.token, "secret", (err, dataAuth) => {
//         if(err){
//             res.sendStatus(403);
//         } else {
//             res.json(data);
//         }
//     });
// });
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(router);

app.listen(port, () => {console.log(`Running on port ${port}`)})