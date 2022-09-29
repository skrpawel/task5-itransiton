import axios from "axios";
import { useEffect, useState } from "react";

const MessageList = (props) => {

    const [messages, setMessages] = useState([]);
    // const [messages_id, setMessagesID] = useState([]);


    const url = 'http://localhost:5001'
    // const url = 'https://task-4-itranistion-backend.herokuapp.com'

    useEffect(() => {
        const interval = setInterval(() => {

            axios.get(`${url}/messages_list`).then(res => {

                res.data.map((user, index) => {
                    return user.name === props.userName ? setMessages(res.data[index].messages) : '';
                });
            });
        }, 5000);
        return () => clearInterval(interval);

    });

    return (
        <div>
            <h1>Messages</h1>
            {messages.map((message, index) => {
                return (
                    <div className="border" key={index + messages}>
                        <h3>{message.title}</h3>
                        <p>{message.message}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default MessageList;