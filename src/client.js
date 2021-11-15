const socket = io('http://localhost:8000')

const form = document.getElementById('send-container')

const messageInput = document.getElementById('message-inp')
const messageContainer = document.querySelector('.container')

const append = (message, position)=>{
    const messageElm = document.createElement('.div')
}

const nam = prompt('Enter your name to join')

socket.emit('new-user-joined', nam)
socket.on('user-joined', data => {

})