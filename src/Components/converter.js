import axios from'axios';

const Converter = async () => {
    const response = await axios('http://localhost:4000/csvtojson')
}

export default Converter;

var axios = require('axios');
var data = JSON.stringify({
  "id": "3542519",
  "reference_id": "3542519",
  "name": "swapnil.sharma1998@gmail.com",
  "designation": "user",
  "data": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3542519"
});

var config = {
  method: 'post',
  url: 'http://localhost:4000/csvtojson',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
