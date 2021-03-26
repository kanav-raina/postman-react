
import React from 'react'
import Applebar from './components/Applebar';
import RequestComponent from './components/RequestComponent';

//https://jsonplaceholder.typicode.com/


const App = () => {
 
  return (
    <div>
      
      <Applebar />
      <h1 style={{textAlign:'center'}}> <a href='https://jsonplaceholder.typicode.com/'>tested on this sample site</a></h1>
      <RequestComponent />
      
    </div>
  )
}

export default App
