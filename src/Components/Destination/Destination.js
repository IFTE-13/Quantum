import React from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import fakedata from "../../FakeData/fakedata"
import fakePlace from '../../FakePlace/FakePlace';
import Vehicle from './Vehicle';

const Destination = () => {
    const { veh, placeFrom, placeTo } = useParams();
    const { info, imgUrl } = fakedata.find(vehicle => vehicle.type === veh);
    const { gMap } = fakePlace.find(place => place.name === placeFrom);

    return (
        <div>
            <div className="row pt-3 d-flex justify-content-center">
                <div className="col-md-3 card pt-3">
                    <div style={{ fontSize: "18px", fontWeight: "600" }} className="nav p-3 text-light">
                        <p className="mb-0 mx-5"><span className="text-dark">From: </span> {placeFrom}</p>
                        <p className="mb-0 mx-5"><span className="text-dark">To: </span> {placeTo}</p>
                    </div>
                    <br /><br />
                    {info.map(vehicleName => <Vehicle image={imgUrl} vhi={vehicleName}></Vehicle>)}
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center mapOutside rounded">
                        <iframe title="myFrame" src={gMap} className="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Destination;