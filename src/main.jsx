import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

destination path 'Cyberpunk-Theme-To-Do-List' already exists and is not an empty directory.// Preview Wrapper Component
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
