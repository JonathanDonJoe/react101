import React, { Component } from 'react';
import City from './City'

const citiesData = require('./cities.json')

// console.log(citiesData)

class Cities extends Component {
    
    constructor() {
        super();
        this.state = {citiesData: []}
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('mounted');
        this.setState({
            citiesData: citiesData
        })
    }





    render() {
        console.log('render')
        console.log(this.state.citiesData)
        const cities = this.state.citiesData.map( (city, i) => {
            return (
                <City key={i} data={city} />
            )
        })

        return(
            <div>
                {cities}
            </div>
        )
        
    }


}

export default Cities;