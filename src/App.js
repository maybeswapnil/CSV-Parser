import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [captured, setCaptured] = useState([]);
  const [response, setResponse] = useState([]);

  var data = JSON.stringify({
    "id": "3542519",
    "reference_id": "3542519",
    "name": "swapnil.sharma1998@gmail.com",
    "designation": "user",
    "data": captured
  });

  var config = {
    method: 'post',
    url: 'http://localhost:4000/csvtojson',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  function converter() {
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setResponse(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>CSVTOJSON CONVERTER</h1>
      </header>
      <body className='input'>
        <textarea className='input-box' type='textarea' onChange={(e) => setCaptured(e.target.value)}/>
        <div className='toleft'>
            <button onClick={converter} className="button-48" id='convertbutton' role="button"><span class="text">Convert</span></button>
        </div>

      </body>
      <body className='input'>
        <textarea className='input-box' type='textarea' value={response}/>
      

      </body>
    </div>
  );
}

export default App;
