import { Route, Routes } from 'react-router-dom'
import { AuthRouter, AdminRouter, UserRouter } from './AuthRoutes'

export const AppRouter = () => {

    return (

        <>
            <Routes>

                <Route path='/*' element={<AuthRouter />} />
                <Route path='/index/*' element={<AdminRouter />} />
                <Route path='/index/*' element={<UserRouter />} />

            </Routes>
        </>

    )
}
