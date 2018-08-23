var socket=io();
socket.on('connect',function(){
  console.log('connected to server');
  
});

socket.on('disconnect',function(){
  console.log('disconnected from server');
});
socket.on('newmessage',function(newmsg){
  console.log(newmsg);
});
