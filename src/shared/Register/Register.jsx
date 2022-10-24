import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const [error, setError] = useState();

    const {createUser} = useContext(AuthContext)


    const handleSumit = (event) => {
      event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // -------> create user sign in 
        createUser(email, password)
            .then((result) => {
                toast.success('Successfully Register', {duration: 3000})
                form.reset()
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
        })
        
    }



    return (
        <div>
            <h1 className='text-white my-5'>Register</h1>
             <Form onSubmit={handleSumit} className='w-50 mx-auto my-5 text-start bg-white p-4 border rounded shadow-lg'>
                <Form.Group className="mb-3" controlId="formBasicNamed">
                    <Form.Label className='text-black' >Name:</Form.Label>
                    <Form.Control type="text" name='name' placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-black' >Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-black' >Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='text-black' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button><br/><br/>
                 <Form.Text className="text-danger fw-bold fs-5 mt-3">
                        {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;