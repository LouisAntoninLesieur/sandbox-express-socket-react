import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { router as authRouter } from './src/routers/auth.routes.js';
import { createMessage } from './src/controllers/messageController.js';
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}));

app.use(express.json());
app.use('/auth', authRouter);

// Create an HTTP server and attach the Express app to it, so we can also use Socket.IO
const server = http.createServer(app);
// Create a new instance of Socket.IO by passing the HTTP server object
const io = new Server(server, {
    // Enable CORS for all origins
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Listen for 'connection' events on the Socket.IO server
io.on('connection', (socket) => {
    // Log the ID of the connected client
    console.log('a user connected', socket.id);

    // Listen for 'message' events from clients
    socket.on('message', (message) => {
        console.log('Message received from', socket.id, ':', message);
        // Save the message to the database
        createMessage(message)
            .then((newMessage) => {
                console.log('Message saved:', newMessage);
                // Emit the message to all connected clients
                io.emit('message', message);
            })
            .catch((err) => {
                console.error('Error saving message:', err);
            });
    });

    // Listen for 'disconnect' events from clients
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});

// Start the HTTP server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.BASE_URL}${process.env.PORT}`);
});

// Start the Socket.IO server
server.listen(3001, () => {
    console.log('Socket is running on port 3001');
});