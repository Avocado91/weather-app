import React from "react"
import Titles from "../components/Titles"
import Form from "../components/Form"
import Weather from "../components/Weather"

import "normalize.css"

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault()

        const apiKey = "a090b31e9e8134644a2d5cd51b984bf0"
        const apiCall = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=ottawa,canada&appid=${apiKey}`
        )
        const response = await apiCall.json()

        console.log(response)
    }
    render() {
        return (
            <div>
                <Titles />
                <Form loadWeather={this.getWeather} />
                <Weather />
            </div>
        )
    }
}

export default App
