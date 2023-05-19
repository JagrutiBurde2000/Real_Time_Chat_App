console.log("JANU")
// Initialing express
const express = require("express"); // importing express;

// sets up our express. -> express allows me to create a server.
const app = express();

const server = require("http").Server(app);

// use index.html for frontend;
app.use(express.static("public"));

const io = require("socket.io")(server);

// on connection io gives me a unique socket.
// io is common entity
// socket is unique to every user.
io.on("connection", (socket)=>{
    console.log("socket", socket.id);
    // socket on message event it passes that message to io.
    socket.on("message", (data)=>{
        io.emit("message",data); // emit is distributting
    })

    socket.on("disconnect",()=>{
        console.log("User left the chat", socket.id);
    })
})


const PORT = 9000;

server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})