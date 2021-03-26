import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';
import WeatherTile from './components/WeatherTile';

function App() {
  const [search, setSearch] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [result, loading] = useAsyncHook(location);

  function useAsyncHook(location) {
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState('false');

    React.useEffect(() => {
      async function fetchLocationWeather() {
        try {
          setLoading('true');
          const response = await fetch(`/weather/${location}`);

          const json = await response.json();
          setResult(json)

        } catch(error) {
          if (Object.values(result).length) {
            setResult([])
          }
          setLoading('null');
        }
      }

      if (location !== "" || (Object.keys(result).length && !location)) {
        fetchLocationWeather();
      }
      
    }, [location])

    return [result, loading];
  }

  function enterPressed(e) {
    let code = e.keyCode || e.which;
    if (code === 13) {
      setLocation(search);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png'} alt="logo" style={{padding: '0 0 20px 0'}}/>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              style={{fontWeight: 'bold'}}
              onChange={e => setSearch(e.target.value)}
              onInput={e => e.target.value = ("" + e.target.value).toUpperCase()}
              onKeyPress={enterPressed}
              placeholder="Enter city"
              aria-label="Enter city"
            />
            <InputGroup.Append>
              <Button variant="dark" onClick={() => setLocation(search)}>Enter</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        {
          Object.values(result).length ? (
            <WeatherTile data={result} />  
          ) : null
        }
        {
          loading === 'null' ? 'City not found.' : null
        }
      </header>
    </div>
  );
}

export default App;
