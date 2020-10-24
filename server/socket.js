const Socket = require('socket.io');
const debug = require('debug');

/**
 * Create a web socket and start listening for 'chat' events.
 * @param {Server} httpServer 
 */
function createWebSocket(httpServer) {
    const socket = new Socket(httpServer);

    socket.on('connect', function (socket) {
        debug('server:ws')('Someone has connected to the socket.');
        socket.on('chat', function (message) {
            debug('server:ws')(message);
            socket.broadcast.emit('chat', message);
        });
    });

    socket.on('disconnect', function (...args) {
        debug('server:ws')(`disconnect(${args.join(', ')})`);
    });

    return socket;
}

module.exports = { createWebSocket };