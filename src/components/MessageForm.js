import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import MessageList from './MessageList'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";


const MessageForm = (props) => {
    const [recipent, setRecipent] = useState();
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [recipents, setRecipents] = useState(['']);


    // const url = 'http://localhost:5001'
    const url = 'https://task-5-itranistion-backend.herokuapp.com'

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('halko');

        axios.post(`${url}/sendMessage`, {
            recipent,
            message: { title: title, message: message }
        });
    };

    useEffect(() => {
        let arr = []
        axios.get(`${url}/signup`).then(res => {

            res.data.map((user) => {
                arr.push(user.name)
            });

            return setRecipents(arr);
        });
    }, []);

    return (
        <div className='bg-light border container'>
            <Form className='es' onSubmit={(e) => {
                sendMessage(e)
                setTitle('');
                setRecipent();
                setMessage('');
            }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    type="text"
                    placeholder="Your recipent name"
                    aria-label="Your recipent name"

                    value={recipent}
                    onChange={(event, newValue) => {
                        setRecipent(newValue);
                    }}

                    inputValue={recipent}
                    onInputChange={(event, newInputValue) => {
                        setRecipent(newInputValue);
                    }}

                    options={recipents}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Names" key={params} />}
                />
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
                <Button type="submit" variant="primary" size="lg" active>
                    Send
                </Button>
            </Form>
            <MessageList userName={props.userName} />
        </div>
    );
}

export default MessageForm;