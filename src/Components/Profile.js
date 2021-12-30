import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

function Profile() {
    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <JSONPretty data={user} />
            </>

        );
    }else{

        return(
            <h1>Please Login</h1>
        );
    }
}

export default Profile;