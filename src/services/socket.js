import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.59:3333', {
    autoConnect: false
});

function subscribeToNewDevs(subscriveFunction){
    socket.on('new-dev',subscriveFunction);
}

function connect(latitude,longitude,techs){
    socketio.io.opts.query = {
        latitude,longitude,techs
    };
    
    socket.connect();
}

function disconnect(){
    if (socket.connected){
        socket.disconnect();
    }
}

export {connect,disconnect, subscribeToNewDevs};