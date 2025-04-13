import React, { useState } from 'react'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  const [theme, setTheme] = useState('cyber-dark')

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>CYBER<span className="neon-text">TASKS</span></h1>
        <button 
          className="theme-toggle"
          onClick={() => setTheme(theme === 'cyber-dark' ? 'cyber-light' : 'cyber-dark')}
        >
          Toggle Theme
        </button>
      </header>
      
      <main className="app-main">
        <ToDoList />
      </main>

      <footer className="app-footer">
        <p className="cyber-text">© 2024 CyberTasks</p>
      </footer>
    </div>
  )
}

export default App
