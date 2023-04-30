import { Route, Routes } from 'react-router-dom'
import {Login, Register} from '../auth/components'

export const AuthRouter = () => {

  return (

    <Routes>

    <Route path='login' element={<Login/>} />
    <Route path='register' element={<Register />} />

  </Routes>
    
  )
}
