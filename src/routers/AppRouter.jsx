import { Route, Routes } from 'react-router-dom'
import { HomePage, AdminPage } from '../pages'
import { AuthRouter } from './AuthRouter'
import { UserProvider } from '../context'

export const AppRouter = () => {

    return (

        <UserProvider>

            <Routes>
                <Route path='/*' element={<HomePage />} />
                <Route path='/admin/*' element={<AdminPage/>} />
                <Route path='/auth/*' element={<AuthRouter />} />
            </Routes>
            
        </UserProvider>

    )
}
