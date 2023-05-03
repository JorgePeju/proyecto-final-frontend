import { AdminTable, NavBar } from "../components/admin"


export const AdminPage = () => {

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

      <AdminTable />

      <footer className="bg-gray-100 p-6 mt-6 shadow-md">
    <div className="container mx-auto">
      <p className="text-gray-700 font-medium">Footer</p>
    </div>
  </footer>

    </>

  )
}
