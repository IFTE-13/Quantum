import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <LightSpeed left cascade>
                <div className="footer pt-5 mb-5 d-flex justify-content-center">
                    <Link><h1 className="mx-5 text-dark"><FiFacebook /></h1></Link>
                    <Link><h1 className="mx-5 text-dark"><FiTwitter /></h1></Link>
                    <Link><h1 className="mx-5 text-dark"><FaYoutube /></h1></Link>
                </div>
            </LightSpeed>
            <p className="text-light text-center mt-3">All rights reserved by IFTE'13@2021</p>
        </div>
    );
};

export default Footer;