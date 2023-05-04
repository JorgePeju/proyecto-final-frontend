import { Link } from 'react-router-dom'


export const UserPanel = () => {

    return (

        <>
            <div className="user-panel-container z-1k1">
                <p>Elija una opción</p>

                <p className="mt-8">¿Aún no tienes una cuenta? <Link to='/auth/register' className="text-blue-500 hover:text-blue-700 font-semibold">Crea tu cuenta aquí</Link></p>
                <p className="mt-8"><Link to='/auth/login' className="text-blue-500 hover:text-blue-700 font-semibold">¿Ya tienes una cuenta?</Link></p>

               

            </div>
        </>


    )
}
