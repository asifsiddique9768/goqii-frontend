import {useContext } from 'react'

import { User } from './components/User/User'
import { UserContext } from './context/UserContext'
import { UserModalNew } from './components/User/UserModal/UserModal'

import './App.css'

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
