import './App.css';
import { useState } from 'react';
import axios from 'axios';
import load from './loading.svg';

function App() {

  const [captured, setCaptured] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [policy, setPolicy] = useState(false);

  function policychange() {
    setPolicy(!policy)
  }

  var data = JSON.stringify({
    "id": "3542519",
    "reference_id": "3542519",
    "name": "swapnil.sharma1998@gmail.com",
    "designation": "user",
    "data": captured
  });

  var config = {
    method: 'post',
    url: 'https://new-api-name.herokuapp.com/csvtojson',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  function converter() {
    setLoading(true);
    axios(config)
    .then(function (response) {
      setLoading(false)
      console.log(JSON.stringify(response.data));
      setResponse(JSON.stringify(response.data))
      prettyPrint()
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false)

    });
  }

  function prettyPrint() {
    var ugly = response;
    var obj = JSON.parse(ugly);
    var pretty = JSON.stringify(obj, undefined, 4);
    setResponse(pretty);
}

 
    return (
      <div className="App">
        <header className="App-header">
            <h1> {'{ }'}.CSV to {'{ }'}.JSON Converter</h1>
            <a href='https://hellochemo.tech' targer='_blank'>Portfolio</a>
        </header>
        <body className='input'>
          <div className='main-flag'>
              <textarea className='input-box scroller' type='textarea' onChange={(e) => setCaptured(e.target.value)}/>
              {loading?<img src={load} className='loading' />:null}
              {/* <pre className='input-box scroller' type='textarea' >{JSON.stringify(response, null, 2)}</pre> */}
              <textarea className='input-box scroller' type='textarea' value={response}/>
          </div>
          <div className='toleft'>
              <button onClick={converter} className="button-48" id='convertbutton' role="button"><span class="text">Convert</span></button>
          </div>
         
           
    
  
        </body>
        
      </div>
    );
  

  
}

export default App;
