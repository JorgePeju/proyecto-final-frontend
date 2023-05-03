import { AdminTable, NavBar } from "../components/admin"


export const AdminPage = () => {

  return (

    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-center text-gray-700 font-semibold text-xl">
            Panel de administración
          </h1>
        </div>
      </header>
      <NavBar />

      <AdminTable />

      <footer className="bg-white shadow-md mt-8">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-700 font-semibold text-sm">
            Footer
          </p>
        </div>
      </footer>

    </>

  )
}
