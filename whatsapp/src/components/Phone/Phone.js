import React from 'react';
import './Phone.css';
import Hautwhatsapp from '../Hautwhatsapp/Hautwhatsapp';

import { Camera } from 'lucide-react';
import { Signal } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { Battery } from 'lucide-react';

function Phone(props) {
    return (
        <div className='phone'>
            <div className="hauttel">
                <span> 16:09 </span>
                <div className="encoche"></div>
                <div className="details">
                    <Signal className='signal' />
                    <Wifi className='signal' />
                    <Battery className='signal'/>
                </div>
            </div>

            <div>
                <Hautwhatsapp/>
            </div>
        </div>
    )
}

export default Phone