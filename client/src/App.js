import './App.css';
import { useState, useEffect } from 'react'
import UnauthenticatedApp from './UnauthenticatedApp'

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
    <UnauthenticatedApp 
      setCurrentUser={setCurrentUser}
      currentUser={currentUser}
    />
  );

}

export default App;
