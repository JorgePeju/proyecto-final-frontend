import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'
import { UserProvider } from '../context'
import { AdminRouters } from './AdminRouters'

export const AppRouter = () => {

    return (

        <UserProvider>

            <Routes>
                <Route path='/*' element={<HomePage />} />
                <Route path='/admin/*' element={<AdminRouters/>} />
                <Route path='/auth/*' element={<LoginPage/>} />
            </Routes>
            
        </UserProvider>

    )
}
