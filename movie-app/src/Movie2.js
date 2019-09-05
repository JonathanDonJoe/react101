import React from 'react';

function Movie2(props) {

    const imagePath = `http://image.tmdb.org/t/p/w300${props.movie.poster_path}`;        
    const moviePath = `http://www.themoviedb.org/movie/${props.movie.id}`

    return(
        <div className="col s3 center">
            <a href={moviePath} target="_onblank">
                <img src={imagePath} alt=""/>
            </a>
            <div>
                {props.movie.title}
            </div>
        </div>
    )




}

export default Movie2