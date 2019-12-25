# Host Simple Real time Chatroom using Node.js and socket.io on Heroku

This will show you how to make a real time chatroom and make it public for usage (wohoo)

### Why socket

We are going to create a real time chatroom, that is, the webpage content will be updated automatically without refreshing the webpage. Intuitively, this can be achieved by, the client webpage keep asking the server: 'hey server is there any update on the content'. If yes, the server updates the client, if no, client waste time asking. Now socket is an alternative solution besides keep annoying the server, since **socket allow the server to emit data to clients without request from client**.

### Why Heroku

It is totally free and last forever, and powerful enough to run this application. 

### Getting Started

1. Install [node](https://nodejs.org) and npm (installed along with node)

   > for local hosting and installing packages

2. Install git and heroku, as well as create heroku account, and use command line to login on your computer (need to do once only)

   > for deployment

   ```
   heroku login
   ```

   

3. Create your project folder, and open command line there, type

   ```shell
   #initialize the directory as a git repository
   git init
   
   #create a webserver on heroku and you can edit it in this directory
   heroku create
   
   #socket.io require this feature turns enabled
   heroku features:enable http-session-affinity 
   
   #initialize it as npm project, npm will help you and the heroku server installing your packages including socket.io, all the options just use the default
   npm init 
   
   npm install socket.io #install the socket.io package
   ```

### Making your Hands Dirty

Now time to write code

1. Server: Create `index.js`, it is your entry point of program

   ```js
   //1. import the libraries
   const http = require('http')
   const socketio = require('socket.io')
   const fs = require('fs')
   
   //2. get the port assigned by heroku
   const port = process.env.PORT || 3000
   
   //3. create and start the server on the assigned port
   let server = http.createServer(function (req, res) {
     //this function handles requests from browser, AKA visiting the chat room website
     
     //read client.html and send this html file to client
     fs.readFile('./client.html',function(err,data){
       res.write(data)
     })
   })
   
   server.listen(port, function () {
     console.log(`hosting on http://localhost:${port}`)
   })
   
   //4. create a websocket which listen to the server created
   let io = socketio.listen(server)
   
   //5. add listener when a new client connected to the server
   io.sockets.on('connection', function (socket) {
   
     //socket is the newly connected client, say hello to him through 'server' channel
     socket.emit('server', 'welcome to simple chat room')
   
     //when the new client emit data through client 
     socket.on('chatRoom', function (data) {
       console.log(data)
   
       //boardcast the data to all clients(io.sockets) through client channel
       io.sockets.emit('chatRoom', data)
     })
   })
   
   ```

2. Client: Create `client.html`. It is the UI of the chat room. Let's make it simple

   ```html
   <html>
   <head>
     <title>Chat Room</title>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.slim.js"></script>
   </head>
   
   <body>
     <h2>Simple Chat Room</h2>
     <input id="new_message"><button onclick="sendMessage()">Send</button>
     <div id="all_messages"></div>
   </body>
   
   <script>
     //connect the socket of server
     //in case the socket server is at another location, use: socket = io.connect(url_to_socket_server)
     let socket = io()
   
     //when there is incoming message in server channel, alert the data
     socket.on('server', (data) => {
       window.alert(data)
     })
   
     //when there is message in chatRoom channel, append the message to the website
     socket.on('chatRoom', (data) => {
       console.log(data)
       let p = document.createElement('p')
       p.innerText = data
       document.getElementById('all_messages').appendChild(p)
     })
   
     //this is a function to handle the button click action, which send the message to server
     function sendMessage(){
       const message = document.getElementById('new_message').value
       socket.emit('chatRoom',message)
     }
     
   </script>
   
   </html>
   
   ```

   

3. Test it: Edit `package.json`to specify the start script

   ```json
   {
       //...
       "scripts": {
           "start":"node index.js"
       }
   }
   ```

   run command line to host the chat room locally:

   ```
   heroku local web
   ```

   play with your code on `http://localhost:5000`

### Deploy

1. Create `.gitignore` that we do not want to upload the whole node_modules folder (server will download it itself)

   ```gitignore
   node_modules/
   ```

2. execute:

   ```sh
   #mark a new version using git
   git add *
   git commit -m "deploying simple chat room"
   
   #use git to upload the changes to heroku
   git push heroku master
   
   #open the website hosted on heroku on your browser
   heroku open
   ```

3. See your lovely chat room on your browser🎉🎉🎉 and invite your friends to use this secrete chat room

### Other Notes:

#### Integration with express.js

```js
const express = require('express')
const app = express()
const http = require('http')
const socketio = require('socket.io')

let server = http.createServer(app) //express app would handle all requests

let io = socketio.listen(server)

const port = process.env.PORT || 3000

server.listen(port)

//continue with normal usage of express's app object and io object
```

