import React from 'react'
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false)
  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
    <nav>
      <div className='button-container'>
        <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
          Toggle Theme
        </button>
      </div>
    </nav>
    <div className='content'>
      <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>
          <code>HEY!</code> HELLO!
      </p>
    </div>
  </div>
  )
}

export default App