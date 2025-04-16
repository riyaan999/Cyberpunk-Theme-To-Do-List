<<<<<<< HEAD
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
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Preview Wrapper Component
const PreviewWrapper = ({ children }) => {
  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-controls">
          <span className="control red"></span>
          <span className="control yellow"></span>
          <span className="control green"></span>
        </div>
        <h3>Cyberpunk Todo List</h3>
      </div>
      <div className="preview-content">
        {children}
      </div>
>>>>>>> aace99ffd9f634ee0c56e0bc8733a983182ac626
    </div>
  )
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>
            Reload Application
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <PreviewWrapper>
        <App />
      </PreviewWrapper>
    </ErrorBoundary>
  </React.StrictMode>,
)
