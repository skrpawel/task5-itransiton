import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MessageForm from "./MessageForm";
import axios from 'axios'



const UserForm = () => {
    const [name, setName] = useState();
    const [users, setUsers] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    // const url = 'http://localhost:5001'
    const url = 'https://task-5-itranistion-backend.herokuapp.com'

    const createUser = (e) => {
        e.preventDefault();
        console.log('halko');

        axios.post(`${url}/signup`, {
            name,
        });
    };

    useEffect(() => {
        axios.get(`${url}/signup`).then(res => {
            // (el) => users.push(el.name
            res.data.map(e => setUsers(users => users + e.name));
        })
    }, []);

    useEffect(() => {
        console.log('elo')
    }, []);

    if (isClicked) return <MessageForm userName={name} />;

    return (
        <div className='bg-light border container mw-50'>
            <h1>Login</h1>
            <Autocomplete
                disablePortal
                id="combo-box-demo"

                value={name}
                onChange={(event, newValue) => {
                    setName(newValue);
                }}

                inputValue={name}
                onInputChange={(event, newInputValue) => {
                    setName(newInputValue);
                }}

                options={users}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Names" />}
            />

            <Button type="button" variant="primary" size="lg" active onClick={(e) => { setIsClicked(true); createUser(e); }}>
                Next
            </Button>
        </div>
    )
};

export default UserForm;