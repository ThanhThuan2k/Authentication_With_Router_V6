import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PrivateComponents() {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export default PrivateComponents;