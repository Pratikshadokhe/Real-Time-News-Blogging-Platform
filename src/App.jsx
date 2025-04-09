import React from 'react'
import Login from './components/Auth/Login'
import UserHomepage from './components/UserHomepage'

const App = () => {
  return (
    <div className='container'>
      <div className='newsblogapp'>
        <UserHomepage />
      </div>
    </div>
  )
}

export default App
