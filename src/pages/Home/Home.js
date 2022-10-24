import React, {useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import TourCards from '../../shared/TourCards/TourCards';
import TourInfo from '../../shared/TourInfo/TourInfo';
import '../Home/Home.css'

const Home = () => {

    const {travels1} = useContext(AuthContext)
    console.log(travels1)

    return (
        <div className='row'>
            <div className='col-md-5'>
                <TourInfo></TourInfo>
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