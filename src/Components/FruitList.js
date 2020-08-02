import React from 'react';

const FruitList = () =>{
    
    const Fruits = [
        { id: 1 ,name: 'Apple', },
        { id: 2, name: 'Banana', },
        { id: 3, name: 'Mango', },
        { id: 4, name: 'Pineapple', },
        { id: 5, name: 'Orange', },
    ]

    return(
        <div>
            {
                Fruits.map( Fruit => (
                   <p key = { Fruit.id}> { Fruit.name }</p>
                ))
            }

        </div>

    )
}


export default FruitList;