import { useState } from "react";
import './login.css'

export interface LoginInfo {
    email?: string;
    parola?: string;
}

const login = (loginState: LoginInfo): string => {
    if (loginState.email === 'admin' && loginState.parola === 'admin') {
        alert('WELCOME ADMIN!');
        return "";
    }
    return 'Date de login incorecte!';


}

export const LoginView = () => {

    const [loginState, setLoginState] = useState<LoginInfo>({});
    const [errorState, setErrorState] = useState<string>("");
    const [passwordState, setPasswordState] = useState<boolean>(true);
    const handleLogin = () => {
        console.log(loginState)
        setErrorState(login(loginState))

    };


    return (
        <div id="container">
            {errorState !== "" ? <p className="error">Datele de login sunt incorecte</p> : null}
            <h3>Email</h3>
            <input type="text" onChange={(e) => {
                setLoginState({ ...loginState, parola: e.target.value })
            }} />
            <h3>Parola</h3>
            <div className="pass-container">
                <input id="password-input" type={passwordState ? "password" : 'text'} onChange={(e) => {
                    setLoginState({ ...loginState, email: e.target.value })
                }} />

                <i style={{
                    backgroundImage: passwordState? 'url("/public/hide.png")' : 'url("/public/show.png")'
                }} id="hide-password" onClick={() => {
                    setPasswordState(!passwordState)
                }}></i>
                </div>
            <br />
            <button className="btn-login" onClick={handleLogin}>Log in</button>
        </div>
    )
}