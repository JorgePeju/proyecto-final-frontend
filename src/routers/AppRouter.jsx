import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import { AuthRouter } from './AuthRouter'
import { UserProvider } from '../auth/context/UserProvider'

export const AppRouter = () => {

    return (

        <UserProvider>
            <Routes>

                <Route path='/*' element={<HomePage />} />
                {/* <Route path='/index/*' element={<AdminRouter />} /> */}
                <Route path='/auth/*' element={<AuthRouter />} />

            </Routes>
        </UserProvider>

    )
}
