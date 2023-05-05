import { Entry, Users, NavBar, AdminFormEntry } from "../components/admin"
import { useFetchMarkers, useFetchUsers } from '../hooks'
import { Route, Routes } from 'react-router-dom'

export const AdminPage = () => {
  const { markers, isLoading, refreshMarkers } = useFetchMarkers('entries');
  const { users, refreshUsers } = useFetchUsers('users')

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
        <Route path='/entries' element={<Entry markerMongo={markers} isLoading={isLoading} refreshMarkers={refreshMarkers} />} />
        <Route path='/users' element={<Users markerMongo={users} isLoading={isLoading} refreshUsers={refreshUsers} />} />
        <Route path='/entries/:id' element={<AdminFormEntry/>} />
      </Routes>

    </>

  )
}
