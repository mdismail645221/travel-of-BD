import React, {useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import TourCards from '../../shared/TourCards/TourCards';
import '../Home/Home.css'

const Home = () => {



    const travels1 = useLoaderData();
    console.log(travels1)


    return (
        <div className='row'>
            <div className='col-md-5'>
                <h2>COX\S BAZAR</h2>
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