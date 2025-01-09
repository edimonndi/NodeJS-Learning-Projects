const express = require('express');
const http = require('http');
const path = require('path');
const { initSocket } = require('./server/socket');
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Initialize WebSocket functionality
initSocket(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
