import io from 'socket.io-client';
import debug from 'debug';

const socket = io();

socket.on('connect', function() {
    debug('chat:socket')('Connected.');
});

socket.on('disconnect', function() {
    debug('chat:socket')('Disconnected.');
})

socket.on('chat', function (message) {
    debug('chat:socket')('Received message:', message);
});

export default socket;

