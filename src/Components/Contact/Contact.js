import React from 'react';
import log from '../../images/log.png';
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
    return (
        <div className="text-center">
            <Bounce top cascade>
                <h4 className="text-light pt-5">ＱＵＡＮＴＵＭ</h4>
                <img className="mt-5" src={log} alt="" />
            </Bounce>
        </div>
    );
};

export default Contact;