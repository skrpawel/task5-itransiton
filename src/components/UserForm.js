import Button from 'react-bootstrap/Button';

const UserForm = () => {
    return (<div className='bg-light border'>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
    </div>);
}

export default UserForm;