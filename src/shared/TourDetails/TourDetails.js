import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TourDetails = () => {

    const abc = useLoaderData();
    console.log(abc)
    const { name, id, description, others_info } = abc;
    const { origin, from } = others_info;

    return (
        <div className='row my-5'>
            <div className='col-md-6'>
                <div className='text-white'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>

            </div>
            <div className='col-md-6 bg-white px-4 py-3'>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" defaultValue={origin} readOnly />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control defaultValue={from} readOnly type="text" />
                        </Form.Group>


                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control defaultValue={from} readOnly type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control defaultValue={from} readOnly type="text" />
                            </Form.Group>
                        </div>



                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;