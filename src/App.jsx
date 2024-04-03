import {useContext } from 'react'
import './App.css'
import { User } from './components/User/User'
import { UserModalNew } from './components/User/UserModalNew/UserModalNew'
import { UserContext } from './context/UserContext'

function App() {
  const {state} = useContext(UserContext)
  return (
    <div>
      {(state?.isAdding || state?.isEditing) && <UserModalNew />}
      <User />
    </div>
  )
}

export default App
