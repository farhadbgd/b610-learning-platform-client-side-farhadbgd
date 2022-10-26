import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()

    const googleSignIn = () => {
        providerLogin(googleProvider)
            .then(reseult => {
                const user = reseult.user;
                console.log(user.displayName);
            })
            .catch(error => console.error(error))
    }
    const gitSignIn = () => {
        providerLogin(gitProvider)
            .then(reseult => {
                const user = reseult.user;
                console.log(user.displayName);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <>
                <div className="d-grid gap-2 my-4">
                    <Button onClick={googleSignIn} variant="primary">Log in with Gmail</Button>{' '}
                </div>
                <div className="d-grid gap-2 my-4">
                    <Link to={'/login/mail'} className="d-grid gap-2 my-4"><Button variant="secondary">Log in with Email</Button>{' '}</Link>
                </div>
                <div className="d-grid gap-2 my-4">
                    <Button onClick={gitSignIn} variant="success">Log in with Git</Button>{' '}
                </div>
                <div className="d-grid gap-2 my-4">
                    <Button variant="success">If you have no account, please <Link to={'/register'} className="text-dark"> Register</Link></Button>{' '}
                </div>

            </>

        </div>
    );
};

export default Login;