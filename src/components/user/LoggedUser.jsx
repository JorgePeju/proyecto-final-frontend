import { useContext } from 'react'
import {UserContext} from '../../context'
import {useLogout} from '../../hooks'

export const LoggedUser = () => {

  const { user} = useContext(UserContext);
  const {handleLogout} = useLogout()
 

  return (

    <>
      <section className="w-80 h-full flex items-center justify-end">
        <div className="bg-backgroundZelda w-full max-w-md h-screen px-6 py-8 ">

            <h2 className='text-zyellow font-bold'>
              Bienvenido {user?.username}
              </h2>

            <div className="text-white ">
              <button onClick={handleLogout} type="submit" className="w-full my-4 block bg-zyellow hover:bg-zbgcosa text-white font-semibold rounded-lg px-4 py-2">
                Log Out
                </button>
              </div>
        </div>
      </section>


    </>

  )
}
