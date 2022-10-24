import React, {useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import TourCards from '../../shared/TourCards/TourCards';
import '../Home/Home.css'

const Home = () => {



    const travels1 = useLoaderData();
    const travels2 = (travels1[0])


    return (
        <div className='row my-5'>
            <div className='col-md-5'>
                <div className='text-white'>
                        <h2 className='fw-bold display-4'>{travels2.name}</h2>
                        <p className='text-justifed'>{travels2.description}</p>
                </div>
            </div>
            <div className='col-md-7'>
                <div className='TourCardsContainer'>
                    {
                        travels1.map(singleFrom => <TourCards
                            key={singleFrom.id}
                            singleFrom={singleFrom}
                        ></TourCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;