import React from 'react';

const Vehicle = (props) => {
    const { driverName, space, price } = props.vhi;
    const imgUrl = props.image;
    console.log(props.image);
    return (
        <div>
            <div className="d-flex justify-content-around pt-3 bg-light my-2 rounded">
                <div className="d-flex align-item-center">
                    <img style={{ width: "80px", borderRadius: "3px" }} src={imgUrl} alt="a" />
                </div>
                <div>
                    <p>{driverName}</p>
                    <div className="d-flex justify-content-around">
                        <p> Seat: {space}</p>
                        <p className="mx-2 text-danger"> ৳{price}</p>
                    </div>
                </div>
            </div>
            <hr style={{ backgroundColor: "crimson" }} />
        </div>
    );
};

export default Vehicle;