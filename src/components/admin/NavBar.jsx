

export const NavBar = () => {

  return (

<>
  <nav className="bg-gray-100 p-4 shadow-md">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-blue-500"
            >
              Zona usuario
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-blue-500"
            >
              Gestionar Marcadores
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-700 font-medium hover:text-blue-500"
            >
              Gestionar Usuario
            </a>
          </li>
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
