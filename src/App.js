import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('user');
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
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />

      <List 
        reqdata={reqdata}
      />
    
    </div>
  );
}

export default App;
