import React from 'react';

function City(props) {
// console.log(props)
return (
    <div className='col s6 city-card center' >
        <h3>City: {props.data.Capital}</h3>
        <p>
            Country: {props.data['Country/Territory']} <br></br>
            Rank: {props.data.Rank} <br></br>
            Population: {props.data.Population} <br></br>
            Year: {props.data.Year} <br></br>
            percent: {props.data.percent} <br></br>
        </p>
    </div>
)
}

export default City;