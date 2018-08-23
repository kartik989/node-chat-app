const path=require('path');
const http=require('http');
const express=require('express');
const socketio=require('socket.io');

const port=process.env.PORT||3000;
const publicPath=path.join(__dirname,'../public');
var app=express();
var server=http.createServer(app);
var io=socketio(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log('new user connected');


    socket.on('createmsg',function(msg){
      console.log(msg);
      io.emit('newMessage',{
        from:msg.from,
        text:msg.text,
        createdat:new Date().getTime()
      })
    });
});


server.listen(port,()=>{
  console.log('server is up at'+port);
});
