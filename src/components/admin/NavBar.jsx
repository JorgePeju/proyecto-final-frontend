import { NavLink } from "react-router-dom";

export const NavBar = () => {

  return (

    <>
      <nav className="bg-gray-100 p-4 px-8 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <ul className="flex space-x-4">
              <li><NavLink
                to='/'
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                Zona usuario
              </NavLink></li>

              <li><NavLink
                to='/admin/entries'
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                Gestionar Marcadores
              </NavLink></li>

              <li><NavLink
                to='/admin/users'
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                Gestionar Usuarios
              </NavLink></li>
            </ul>
            <div className="">
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

    </>

  )
}
