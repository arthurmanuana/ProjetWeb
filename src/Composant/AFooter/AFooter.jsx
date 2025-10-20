
import React from 'react';
import './AFooter.css'
import {Phone, Mail, MapPinPlusInside, Building2} from 'lucide-react'

const AFooter = () => {
    return (
        <div className='afooter'>
            <h3>MIAM <span>MIAM.</span></h3>
            <div className='boite-1'>
                <Phone  size={16}/>
                <p>+243 898470969</p>
            </div>
            <div className='boite-1'>
                <Mail  size={16}/>
                <p>restauranmiama@miammiam.com</p>
            </div>
            <div className='boite-1'>
                <MapPinPlusInside size={16} />
                <p>Kimwenza, av LUKUSU </p>
            </div>
            <div className='boite-1'>
                <p className='b-para'>Copyright &copy; 2025 -- Toute Réproduction <br /> INTERDITE -- MIAM MIAM</p>
            </div>
        </div>
    );
};

export default AFooter;