import logo from './logo.svg';
import './App.css';
import { useState, useEffect}, React from 'react'

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useEffect('user');
  const [reqdata, setReqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}{reqType}`);
        const data = await response.json();
        setReqData(data);
      } catch (err) { 
        console.log(err);
    }
  } 
  fetchData();
}, [reqType])


  return (
    <div className="App">
    </div>
  );
}

export default App;
