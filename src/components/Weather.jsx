import React from 'react'

const Weather = () => {
    let temprature = 13
     
    if(temprature < 15) {
        return <h1>It's cold</h1>
    } else if(temprature>=15 && temprature <= 25) {
        return <h1>It's warm</h1>
    } else {
        return <h1>It's hot</h1>
    }
}

export default Weather