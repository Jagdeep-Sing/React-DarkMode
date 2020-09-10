import React from 'react'
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = React.useState(getDefaultTheme())

  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme))
  }, [darkTheme])

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }

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