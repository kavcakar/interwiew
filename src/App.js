import InterviewAccord from './components/InterviewAccord';
import './App.css';
import data from "./helpers/data" 


import React from 'react'

const App = () => {
  return (
    <>
    <div className='header'>
    <h2>React Interview Questions And Answers</h2>
    </div>

    <div className='app'>
    <div className='main'>
     <InterviewAccord  data={data}/>
    </div>
    
    </div>
    </>
    )
  }



export default App;
