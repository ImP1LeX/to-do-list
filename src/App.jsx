import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToDo } from './components/todo_event'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './redux/todoSlice'

function App() {
  const [title, setTitle]= useState('')
  const todos = useSelector((state) => state.todo.list)
  console.log(todos)
  const dispatch = useDispatch()
  return (
    <>
      <div className='main_body'>
        <div>
          <input value={title} placeholder='Введите текст' onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <button onClick={()=>{
            if(title!=''){
              dispatch(add(title))
            }
          }}>Добавить</button>
        </div>
        <div>
          {todos?.map((elem, index)=>{
            console.log(index)
            return(<>
              <ToDo data = {elem} id = {index}/>
            </>)
            
          })}
          
        </div>
      </div>
    </>
  )
}

export default App
