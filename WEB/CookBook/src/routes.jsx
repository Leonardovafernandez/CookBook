/* eslint-disable react/prop-types */
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { MainContextProvider } from './contexts/MainContext';

import App from './App';
import { getItem } from './utils/storage';
import Main from './pages/main';

function MainRoutes() {
    function ProtectedRoutes({ redirectTo }) {
        const token = getItem('token');

        return token ? <Outlet /> : <Navigate to={redirectTo} />
    }

    return (
        <Routes>
            <Route path='/' element={<MainContextProvider><App /></MainContextProvider>} />
            <Route path='/main' element={<MainContextProvider><Main /></MainContextProvider>} />
            <Route element={<ProtectedRoutes redirectTo='/' />} >
                {/* <Route path='/Home' element={<HomeProvider><HomePage /></HomeProvider>} />
                <Route path='/Clients/:status' element={<HomeProvider><ClientsPage /></HomeProvider>} />
                <Route path='/Clients/detalhamento/:id/:name' element={<HomeProvider><ClientDetailPage /></HomeProvider>} />
                <Route path='/Charges/:status' element={<HomeProvider><ChargesPage /></HomeProvider>} /> */}
            </Route>
        </Routes>
    )
}

export default MainRoutes;
