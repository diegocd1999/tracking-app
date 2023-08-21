import { useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [lift, setLift] = useState("")
  const [run, setRun] = useState("")
  const [comments, setComments] = useState("")
  const [feeling, setFeeling] = useState("")
  const [date, setDate] = useState("")

  const [workoutList, setWorkoutList] = useState([])

  const addWorkout = () => {
    Axios.post('http://localhost:3001/create', {
      lift: lift,
      run: run, 
      comments: comments, 
      feeling: feeling, 
      date: date
    }).then(() => {
      console.log('Success')
    })
  }

  const getWorkout = () => {
    Axios.get('http://localhost:3001/workouts').then((response) => {
      setWorkoutList(response.data)
    })
  }

  return (
    <div className='App'>
      <div className='information'>
        <h1>Personal Workout Tacking app</h1>
        <label>Lift</label>
        <input 
          type="text" 
          onChange={(event) =>{
            setLift(event.target.value)
          }}/>
        <label>Run</label>
        <input 
           type="text" 
           onChange={(event) =>{
             setRun(event.target.value)
           }}/>
        <label>Comments</label>
        <input 
         type="text" 
         onChange={(event) =>{
           setComments(event.target.value)
         }}/> 
        <label>Feeling</label>
        <input 
           type="text" 
           onChange={(event) =>{
             setFeeling(event.target.value)
          }}/>
        <label>Date</label>
        <input 
           type="text" 
           onChange={(event) =>{
             setDate(event.target.value)
          }}/>
        <button onClick={addWorkout}>Add Workout</button>
      </div>
      --------------------------------------------------------------------------------------------------
      <div>     
        <button onClick={getWorkout} className='workouts'>Show Workouts</button>
          
          {workoutList.map((val, key) => {
            return <div className='workout'> 
              <h3>{val.lift}</h3>
              <h3>{val.run}</h3> 
              <h3>{val.comments}</h3> 
              <h3>{val.feeling}</h3> 
              <h3>{val.date}</h3>  
            </div>
      })}
      </div>
    </div> 
  )
}

export default App
