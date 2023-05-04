import { Entry, Users, NavBar } from "../components/admin"
import {useFetchMarkers} from '../hooks'
import { Route, Routes } from 'react-router-dom'

export const AdminPage = () => {
  const { markers, isLoading } = useFetchMarkers('http://localhost:3000/api/v1/entries');

  return (

    <>
      <header className="bg-gray-100 p-6 shadow-md">
    <div className="container mx-auto">
      <h1 className="text-2xl text-gray-700 font-semibold">
        Panel de Administración
      </h1>
    </div>
  </header>

      <NavBar />

         <Routes>
                <Route path='/entries' element={<Entry markerMongo={markers} isLoading={isLoading} /> } />
                <Route path='/users' element={<Users markerMongo={markers} isLoading={isLoading} /> } />
            </Routes>

    </>

  )
}
