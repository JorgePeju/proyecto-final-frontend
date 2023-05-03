

export const NavBar = () => {

  return (

    <>
   <nav className="bg-white shadow-md">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      <ul className="flex items-center space-x-4">
        <li>
          <a href="/" className="text-gray-700 font-semibold text-sm hover:text-indigo-600">
            Zona usuario
          </a>
        </li>
        <li>
          <a href="/" className="text-gray-700 font-semibold text-sm hover:text-indigo-600">
            Gestionar Marcadores
          </a>
        </li>
        <li>
          <a href="/" className="text-gray-700 font-semibold text-sm hover:text-indigo-600">
            Gestionar Usuarios
          </a>
        </li>
   
      </ul>
      <div className="border-l-2 border-gray-200 pl-4">
        <a href="#"className="text-gray-700 font-semibold text-sm hover:text-indigo-600">
          Logout
        </a>
      </div>
    </div>
  </div>
</nav>
    </>

  )
}
