import React  from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../TourCards/TourCards.css'




const TourCards = ({ singleFrom }) => {
    // console.log(singleFrom);
    const { description, id, name, image, other_info } = singleFrom;


    return (
        <Link to={`tourDetails/${id}`}>
            <div className={`card-container`} style={{ backgroundImage: `url(${image}`, width: "100%" }}>
                <Card.Title id='card-title'>{name}</Card.Title>
            </div>
        </Link>
    );
};

export default TourCards;