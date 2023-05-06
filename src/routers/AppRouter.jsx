import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import { UserProvider, AuthProvider, ErrorProvider } from '../context'
import { AdminRouters } from './AdminRouters'

export const AppRouter = () => {

    return (

        <UserProvider>
            <AuthProvider>
                <ErrorProvider>
                    <Routes>
                        <Route path='/*' element={<HomePage />} />
                        <Route path='/admin/*' element={<AdminRouters />} />

                    </Routes>
                </ErrorProvider>
            </AuthProvider>
        </UserProvider>

    )
}
