import React from "react"

const Form = (props) => (
    <form onSubmit={props.loadWeather}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country Code" />
        <button>Get Weather!</button>
    </form>
)

export default Form
