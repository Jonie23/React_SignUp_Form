import React from 'react';

const MovieList = () => {

    const Movies = [
        { id: 1 , name: 'Avatar'},
        { id: 2 , name: 'Inception'},
        { id: 3 , name: 'Shaolin Soccer'},
        { id: 4 , name: 'Seven'},
        { id: 5 , name: 'Beauty and the Beast'},
        { id: 6 , name: 'Memento'},
        { id: 7 , name: 'Last Hero'},
        { id: 8 , name: 'Samurai'},
    ]
    return(
        <ul>
           {
               Movies.map( Movie => (
                   <li key = { Movie.id }> { Movie.name } </li>
               ))
           }
        </ul>
    )
}

export default MovieList;