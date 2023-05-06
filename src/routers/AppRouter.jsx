import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import { UserProvider, AuthProvider, ErrorProvider, MarkerProvider } from '../context'
import { AdminRouters } from './AdminRouters'
import { Login } from '../components/auth'

export const AppRouter = () => {

    return (

        <UserProvider>
            <AuthProvider>
                <ErrorProvider>
                    <MarkerProvider>
                        <Routes>
                            
                            <Route path='/*' element={<HomePage />} />
                            <Route path='/admin/*' element={<AdminRouters />} />
                            <Route path='/auth/*' element={<Login />} />
                        </Routes>
                    </MarkerProvider>
                </ErrorProvider>
            </AuthProvider>
        </UserProvider>

    )
}
