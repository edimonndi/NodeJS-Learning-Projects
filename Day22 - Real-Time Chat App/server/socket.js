const fs = require('fs');
const path = require('path');
const { Server } = require('socket.io');

// Path to log file
const logFilePath = path.join(__dirname, '../logs/chat.log');

const initSocket = (server) => {
    const io = new Server(server);

    // Handle WebSocket connections
    io.on('connection', (socket) => {
        console.log('New user connected:', socket.id);

        // Handle incoming messages
        socket.on('chat message', (msg) => {
            const logEntry = `[${new Date().toISOString()}] ${msg}\n`;
            fs.appendFileSync(logFilePath, logEntry); // Log chat message
            io.emit('chat message', msg); // Broadcast to all clients
        });

        // Handle disconnect
        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};

module.exports = { initSocket };
