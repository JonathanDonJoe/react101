import React from 'react';

function City(props) {
console.log(props)
return (
    <div>
        <h1>City: {props.data.Capital}</h1>
        <p>
            Country: {props.data.Country} <br></br>
            Rank: {props.data.Rank} <br></br>
            Population: {props.data.Population} <br></br>
            Year: {props.data.Year} <br></br>
            percent: {props.data.percent} <br></br>
        </p>
    </div>
)
}

export default City;