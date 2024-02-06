import  io  from "socket.io-client";


const socket = io.connect("http://localhost:5000")

const Chat = () => {
    return (
        <div>
            Chat
        </div>
    );
};

export default Chat;