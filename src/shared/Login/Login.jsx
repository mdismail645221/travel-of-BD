import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {useLocation, useNavigate} from 'react-router-dom'

const Login = () => {

    const [error, setError] = useState(null)

    const { logIn, googleSingIn } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                form.reset()
                toast.success('Success Login', {duration: 3000})
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
                handlegoogle()
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    form.reset()
                    toast("Successfully Login Good job", {duration: 3000})
                    navigate(from, {replace: true})
                })
                .catch(err => {
                    setError(err.message)
                })
            })
            .catch(e => {
                console.log(e);
                setError(e.message)               
        })
    }

    // google sign in 
    const handlegoogle = () => {
        googleSingIn()
    }


    const handleCheack = (event) => {
        event.preventDefault()
        console.log(!event.target.checked)
    }


    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        borderRadius: "50px"
      };



    return (
        <div className='text-white my-5'>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto my-5 text-start bg-white p-4 border rounded shadow-lg'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-black' >Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-danger fs-5 fw-semibold">
                            {error}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-black' >Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                
                <div className='d-flex justify-content-between align-items-center'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleCheack} className='text-black' type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p><Link className=''>Forget Password</Link></p>
                    </Form.Group>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <div onClick={handlegoogle} className='text-black d-flex align-items-center'><Button  style={mystyle}>Google</Button> <span className='mx-3 text-danger'>---OR---</span></div> 
                    <div><Button  style={mystyle}>Facebook</Button></div>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='text-start text-dark my-2'>If not registered? <Link to='/register'>Then go to this link and register.</Link></p>
            </Form>
        </div>
    );
};

export default Login;