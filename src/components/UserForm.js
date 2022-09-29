import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MessageForm from "./MessageForm";
import axios from 'axios'



const UserForm = () => {
    const [name, setName] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const url = 'http://localhost:5001'
    // const url = 'https://task-4-itranistion-backend.herokuapp.com'

    const createUser = (e) => {
        e.preventDefault();
        console.log('halko');

        axios.post(`${url}/signup`, {
            name,
        });
    };

    if (isClicked) return <MessageForm userName={name} />;

    return (
        <div className='bg-light border container mw-50'>
            <h1>Login</h1>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['a']}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Names" onInputChange={(e) => { setName(e.target.inputValue) }} onChange={(e) => { setName(e.target.value) }} />}
            />
            <Button type="button" variant="primary" size="lg" active onClick={(e) => { setIsClicked(true); createUser(e); }}>
                Next
            </Button>
        </div>
    )
};

export default UserForm;