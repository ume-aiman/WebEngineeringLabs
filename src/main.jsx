import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Events from './Events.jsx'
import Task1 from './Task1.jsx'
import TodoList from './TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
)
