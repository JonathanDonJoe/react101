import React, { Component } from 'react';
import Movie2 from './Movie2'
const axios = require('axios');

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
            // console.log(movieJSON);
            this.setState({
                movieData: movieJSON.results
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('user submitted form')
        const movieTitle = document.querySelector('#search-term').value;
        console.log(movieTitle);
        const searchUrl = `http://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=fec8b5ab27b292a68294261bb21b04a5`;
        const movieData = axios.get(searchUrl);
        movieData.then( (resp) => {
            console.log(resp.data);
            this.setState({
                movieData: resp.data.results
            })
        })
    }

    render() {
        console.log('Component rendered')
        // console.log(this.state.movieData)

        const movies = this.state.movieData.map( (movie, i) => {
            return (
                <Movie2 key={i} movie={movie}/>
            )
        })

        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' placeholder="Enter a movie title"  id='search-term'/>
                            <input type='submit' className='btn btn-primary' />
                        </form>
                    </div>
                    <div className='row'>
                        {movies}
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;