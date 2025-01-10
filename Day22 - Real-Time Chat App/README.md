# Day 22 - Real-Time Chat App

## Description

This is a real-time chat application built using Node.js, Express, and WebSocket (Socket.IO). The app allows users to join a chat room, send messages, and see messages in real time with a visually appealing layout.

## Features

- Real-time messaging using WebSocket (Socket.IO)
- Messages are styled so the sender's messages appear on the right and the receiver's messages appear on the left
- User-friendly interface
- Notifications for new users joining the chat

## Project Structure

```bash
Day22 - Real-Time Chat App/
├── app.js
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── chat.js
├── package.json
├── server/
│   └── socket.js
├── logs/
│   └── chat.log
```


### `public/index.html`

This is the main HTML file containing the structure of the chat app.

### `public/styles.css`

The CSS file contains the styles for the chat app, including layout and colors.

### `public/script.js`

The JavaScript file handles client-side Socket.IO connections and updates the DOM in real time.

### `app.js`

The main server file that initializes the server, handles Socket.IO events, and manages connections.

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/real-time-chat-app.git
   cd real-time-chat-app

2. Install dependencies:
     ```bash
    npm install
     ```
3. Start the server:
    ```bash
    node app.js
    ```
4. Open a web browser and navigate to:
    ```bash
    http://localhost:3000
    ```

## How to Use
1. Open the app in your browser.
2. Enter a username and join the chat room.
3. Start sending and receiving messages in real time.

## Dependencies
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Socket.IO](https://socket.io/) - Real-time bidirectional event-based communication
- [Nodemon](https://www.npmjs.com/package/nodemon) (optional) - Automatically restart the server during development

## Screenshots
Chat Interface
(https://github.com/edimonndi/NodeJS-Learning-Projects/tree/main/Day22%20-%20Real-Time%20Chat%20App/chatscrshot.PNG)

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Feel free to open issues or submit pull requests for improvements.

Happy coding! 🎉