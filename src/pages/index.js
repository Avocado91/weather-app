import React from "react"
import Titles from "../components/Titles"
import Form from "../components/Form"
import Weather from "../components/Weather"

import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"

class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }

    getWeather = async (e) => {
        e.preventDefault()
        e.persist()

        const apiKey = "a090b31e9e8134644a2d5cd51b984bf0"
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value

        const apiCall = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
        )
        const response = await apiCall.json()

        // check to make sure fields are filled out
        if (city && country) {
            this.setState({
                city: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: "",
            })
        } else
            this.setState({
                city: undefined,
                country: undefined,
                temp: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter your city and country",
            })

        console.log(response)
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form loadWeather={this.getWeather} />
                                    <Weather
                                        city={this.state.city}
                                        country={this.state.country}
                                        temp={this.state.temp}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
