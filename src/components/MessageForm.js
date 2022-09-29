import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import MessageList from './MessageList'
import axios from "axios";


const MessageForm = (props) => {
    const [recipent, setRecipent] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');


    const url = 'http://localhost:5001'
    // const url = 'https://task-4-itranistion-backend.herokuapp.com'

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('halko');

        axios.post(`${url}/sendMessage`, {
            recipent,
            message: { title: title, message: message }
        });
    };

    return (
        <div className='bg-light border container'>
            <Form className='es' onSubmit={(e) => sendMessage(e)}>
                <InputGroup className="mb-3">
                    <Form.Control
                        value={recipent}
                        onChange={(e) => setRecipent(e.target.value)}
                        type="text"
                        placeholder="Your name"
                        aria-label="Your name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Title"
                        aria-label="Title"
                    />
                </InputGroup>
                <FloatingLabel controlId="floatingTextarea2" label="Your message">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a message here"
                        style={{ height: '100px' }}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </FloatingLabel>
                <Button type="submit" variant="primary" size="lg" active >
                    Send
                </Button>
            </Form>
            <MessageList userName={props.userName} />
        </div>
    );
}

export default MessageForm;