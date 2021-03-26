import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherTile = ({data}) => {
    const {dt, weather, main} = data;
    const date = new Date(dt * 1000);

    return (
        <Card style={{width: '15rem', marginTop: '30px'}}>
            <Card.Img
                variant='top'
                src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@4x.png`}
            />
            <Card.Body style={{color: 'black', fontSize: '21px'}}>
                <Card.Title>{weather[0]?.main}</Card.Title>
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                <p style={{marginBottom: '0px'}}>Low: {main?.temp_min}</p>
                <p style={{marginBottom: '0px'}}>High: {main?.temp_max}</p>
                <p style={{marginBottom: '0px'}}>Feels Like: {main?.feels_like}</p>
            </Card.Body>
        </Card>
    )
}

export default WeatherTile;