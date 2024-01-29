import React from 'react';
import data from '../../data.json';

function All() {
  return (
    <div>
        <div className="content">
            {
                data.map((item,index)=>(
                    <div className="carte" key={item.id}>
                        <span> {item.nom} </span>
                        <span> {item.prix} </span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default All