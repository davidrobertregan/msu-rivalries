import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)


  useEffect(() => {
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          setCurrentUser(user)
          setAuthChecked(true)
        })
      } else {
        setAuthChecked(true)
      }
    })
  }, [])

  if(!authChecked) {return <div></div>}
  return (
    <Router>
    { currentUser ?
      <AuthenticatedApp 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    :
      <UnauthenticatedApp 
        setCurrentUser={setCurrentUser}
      />
    }
    </Router>
  );

}

export default App;
