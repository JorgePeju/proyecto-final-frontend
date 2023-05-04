import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'
import { UserProvider, AuthProvider} from '../context'
import { AdminRouters } from './AdminRouters'

export const AppRouter = () => {

    return (


        <UserProvider>
            <AuthProvider>

                <Routes>
                    <Route path='/*' element={<HomePage />} />
                    <Route path='/admin/*' element={<AdminRouters />} />
                    <Route path='/auth/*' element={<LoginPage />} />
                </Routes>

            </AuthProvider>
        </UserProvider>

    )
}
