import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TourDetails = () => {

    const [value, onChange] = useState(new Date())

    

    const abc = useLoaderData();
    // console.log(abc)
    const { name, id, description, others_info } = abc;
    const { origin, from } = others_info;

    // data state
    const [date, setDate] = useState();

    return (
        <div className='row my-5'>
            <div className='col-md-6'>
                <div className='text-white'>
                    <h2 className='fw-bold display-4'>{name}</h2>
                    <p className='text-justifed'>{description}</p>
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
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" onChange={(e)=> setDate(e.target.value)}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" onChange={(e)=> setDate(e.target.value)}  />
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