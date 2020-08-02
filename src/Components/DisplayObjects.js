import React from 'react';

const DisplayObjects = () => {

    const Actors = [
        {
            id: '01',
            name: 'John Deo',
            email: 'john@gmail.com',
            phone: '202-555-0163'
        },
        {
            id: '02',
            name: 'Brad Pitt',
            email: 'fight@gmail.com',
            phone: '202-555 0105'
        },
    ]

 

    return(
        <div>
                {
                    Actors.map( Actor =>  (
                        <ul key = {Actor.id }>
                        <h3> Actor { Actor.id } </h3>
                        <li>{ Actor.name }</li>
                        <li>{ Actor.email }</li>
                        <li>{ Actor.phone }</li>
                        </ul>
                    ))
                }
        
           
        </div>
    )
    
}

export default DisplayObjects;