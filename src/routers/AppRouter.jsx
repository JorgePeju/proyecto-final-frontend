import { Route, Routes } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { HomePage } from '../pages'
import { ErrorProvider, MarkerProvider, UserContext } from '../context'
import { AdminRouters } from './AdminRouters'
import { getLocal } from '../helpers'
import { ProtectedRoute } from '../components/auth'

export const AppRouter = () => {

    const { user, setUser } = useContext(UserContext);

    const { userLocal } = getLocal();

    const getUserLocal = () => {

        if (!user && userLocal != null) {
            setUser(userLocal)
        }

    }

    useEffect(() => {
        getUserLocal()
    }, [userLocal, !user]);


    return (

        <>
            <ErrorProvider>
                <MarkerProvider>
                    <Routes>

                        <Route path='/*' element={<HomePage />} />

                        <Route path='/admin/*' element={

                            <ProtectedRoute>
                                <AdminRouters />
                            </ProtectedRoute>
                        } />

                    </Routes>
                </MarkerProvider>
            </ErrorProvider>
        </>

    )
}
