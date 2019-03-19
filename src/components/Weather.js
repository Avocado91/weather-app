import React from "react"

const Weather = (props) => (
    <div>
        {props.country && props.city && (
            <p>
                Location: {props.city}, {props.country}
            </p>
        )}
        {props.temp && (
            <p>Temperature: {Math.round(props.temp - 273.15)}&#176;</p>
        )}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)

export default Weather
