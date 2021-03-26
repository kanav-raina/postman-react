import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import CodeEditor from './CodeEditor';
import './style.css';

const RequestComponent = () => {
    const [method,setMethod] = React.useState('get');
    const [url,setUrl] = React.useState('https://jsonplaceholder.typicode.com/posts')
    const [data,setData] = React.useState({sample:'bingo'})
    useEffect(()=>{
  
    },[setData])
    fetch('')
  
  .then(json => console.log(json))
    const handleSubmit = () =>{
      console.log('click')
      if(method === 'get'){
        
      }else if(method==='post'){
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res))
      }
      switch(method){
          case 'get':
                axios.get(url)
                .then(res => setData(res));
                return
          case 'post':
                axios.get(url)
                .then(res => setData(res));
                return
          case 'put':
                axios.get(url)
                .then(res => setData(res));
                return
          case 'patch':
                axios.get(url)
                .then(res => setData(res));
                return
          case 'delete':
                axios.get(url)
                .then(res => setData(res));
                return
          default:
              console.log('no method selected');

      }
    } 
    return (
        <div className='container'>
            <div className='input-container'>
                <input id='search' type='text' value={url} onChange={(e)=>{setUrl(e.target.value)}} />
                <input id='btn' type='button' value='Send' onClick={handleSubmit} />
            </div>
            <div className='method'>
                <div className='method-type'>GET: </div><input type='radio' name='method' value='get' checked={method === 'get'} onChange={(e)=>{setMethod(e.target.value)}} />
            </div>
            <div className='method'>
                <div className='method-type'>POST: </div><input type='radio' name='method' value='post' checked={method === 'post'} onChange={(e)=>{setMethod(e.target.value)}} />
            </div>
            <div className='method'>
                <div className='method-type'>PUT: </div><input type='radio' name='method' value='put' checked={method === 'put'} onChange={(e)=>{setMethod(e.target.value)}} />
            </div>
            <div className='method'>
                <div className='method-type'>PATCH:</div> <input type='radio' name='method' value='patch' checked={method === 'patch'} onChange={(e)=>{setMethod(e.target.value)}} />
            </div>
            <div className='method'>
                <div className='method-type'>DELETE: </div><input type='radio' name='method' value='delete' checked={method === 'delete'} onChange={(e)=>{setMethod(e.target.value)}} />
            </div>
            
            
            <div>
                <CodeEditor code={JSON.stringify(data)} />
            </div>
            
        </div>
    )
}

export default RequestComponent
