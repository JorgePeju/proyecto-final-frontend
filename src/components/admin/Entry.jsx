

export const Entry = ({ markerMongo }) => {
  console.log(markerMongo)
  return (

    <>
    
      {markerMongo.map((marker, index) => (
       
      <tr key={index}>
        <td className="px-6 py-4 whitespace-nowrap">{marker.title}</td>
        <td className="px-6 py-4 whitespace-nowrap">{marker.description.substring(0, 10)}</td>
        <td className="px-6 py-4 whitespace-nowrap">{marker.iconType}</td>
        <td className="px-6 py-4 whitespace-nowrap">{marker.user.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Active
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Vista Detalle
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Editar
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Borrar
          </button>
        </td>
      </tr>
      ))}

    </>
  )
}
