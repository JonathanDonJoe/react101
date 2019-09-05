import React, { Component } from 'react';
import Movie2 from './Movie2'

class Movie extends Component {
    constructor() {
        super();
        this.state = {movieData: []};
        console.log("Constructor Ran");
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        console.log('Component mounted!!');
        fetch(url).then( (response) => {
            return response.json()
        }).then( (movieJSON) => {
            console.log(movieJSON);
            this.setState({
                movieData: movieJSON.results
            })
        })
    }


    render() {
        console.log('Component rendered')
        console.log(this.state.movieData)

        const movies = this.state.movieData.map( (movie, i) => {
            return (
                <Movie2 key={i} movie={movie}/>
            )
        })

        return(
        <div>
            {movies}
        </div>    
        )
    }
}

export default Movie;