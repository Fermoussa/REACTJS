import React from 'react';
import './Hautwhatsapp.css';
import { CircleEllipsis } from 'lucide-react';
import { Camera } from 'lucide-react';
import { PlusCircle } from 'lucide-react';


function Hautwhatsapp() {
    return (
        <div className='Hautwhatsapp'>
            <CircleEllipsis className='point'/>
            <div className='double'>
                <Camera />
                <PlusCircle />
            </div>
        </div>
    )
}

export default Hautwhatsapp