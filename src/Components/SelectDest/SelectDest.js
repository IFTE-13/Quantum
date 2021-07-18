import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakePlace from '../../FakePlace/FakePlace'
import './SelectDest.css';

const SelectDest = () => {
    const [total, setTotal] = useState({
        fromValue: 0
    })

    const currentDay = new Date().toUTCString();
    const initialDay = new Date(total.fromValue)
    let currentDayValue = (new Date()).getTime();
    const handleChange = (e) => {
        if (e.target.name === "from") {
            const newFromInfo = { ...total };
            if (newFromInfo) {
                newFromInfo.fromValue = e.target.value;
            }
            setTotal(newFromInfo)
        }

    }


    const { veh } = useParams();
    const [placeFrom, setPlaceFrom] = useState("");
    const [placeTo, setPlaceTo] = useState("");

    const handlePlaceFrom = (e) => {
        const placeValue = e.target.value
        setPlaceFrom(placeValue)
    }

    const handlePlaceTo = (e) => {
        const placeValue = e.target.value
        setPlaceTo(placeValue)
    }

    let placeMatch = false;
    if (placeFrom !== placeTo && placeFrom !== "" && placeTo !== "" && initialDay >= (currentDayValue - 86400000)) {
        placeMatch = true;
    }

    const placeData = fakePlace.find(place => place.name === placeFrom);
    let mapData = ``;
    if (placeFrom === "") {
        mapData = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746841.2285154527!2d88.09988442764885!3d23.49562207196672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616181841013!5m2!1sen!2sbd`
    } else { mapData = placeData.gMap }
    console.log(placeData)
    return (
        <div className="row pt-3 d-flex justify-content-center">
            <div className="col-md-3 card">
                <p className="mb-0 mt-3">Pick from</p>
                <select onChange={handlePlaceFrom} value={placeFrom} name="category" id="">
                    <option value="">Please Select</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                        ))
                    }
                </select>
                <p className="mb-0 mt-3">Drop</p>
                <select onChange={handlePlaceTo} value={placeTo} name="category" id="">
                    <option value="">Please Select</option>
                    {
                        fakePlace.map(place => (
                            <option value={place.name}>{place.name}</option>
                        ))
                    }
                </select>
                <br />
                <div class="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">From</span>
                    </div>
                    <input type="date" class="form-control" name="from" onChange={handleChange} aria-describedby="basic-addon1" />
                </div>
                <br />
                <br />
                {
                    !placeMatch && <p class="text-danger text-center">Please Select different places &amp select today or Next..!</p>
                }
                <br /> <br />
                {
                    placeMatch && <Link to={`/destination/${veh}/${placeFrom}/${placeTo}`}><button className="text-center btn btn-dark text-info mb-5">Search</button></Link>
                }
            </div>

            <div className="col-md-4">
                <div className="d-flex justify-content-center">
                    <iframe title="myFrame" src={mapData} className="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default SelectDest;