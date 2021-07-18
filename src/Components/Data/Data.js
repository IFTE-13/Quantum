import React from 'react';
import { useHistory } from 'react-router';
import './Data.css';
import Fade from 'react-reveal/Fade';

const Data = (props) => {
    const { imgUrl, type } = props.ride;
    const history = useHistory()
    const handleBook = (type) => {
        history.push(`/destination/${type}`);
    }
    return (
        <div onClick={() => handleBook(type)} className="col-md-3">
            <Fade left>
                <div className="p-3">
                    <div className="card cartVehicle curd">
                        <div className="d-flex justify-content-center">
                            <img src={imgUrl} className="" alt="" />
                        </div>
                        <div className="card-body text-dark text-center">
                            <p className="card-text text-center"><strong>{type}</strong></p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Data;

