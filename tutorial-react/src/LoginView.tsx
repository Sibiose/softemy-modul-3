import { useState } from "react"
import { useToken } from "./TokenContext";


async function login(username: string, password: string) {
    const path = `http://localhost:5000/users?username=${username}&password=${password}`;

    const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return response;
}


export const LoginView = (props: { setToken: (token: string) => void }) => {
    const token = useToken();
    const { setToken } = props
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        let res = await login(username, password);
        let body = await res.json();

        if (res.ok && body.length) {
            setMessage('User is logged in!')
            setToken(body[0].id);
        }

        else
            setMessage('Login was not succesfull!')

    }

    const handleLogout = () => {
        setToken("");
        setMessage("");
    }

    return (
        !token ?
            <div>
                <h1> Login</h1 >
                <input value={username} onChange={e => setUsername(e.target.value)} /> <br />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
                <div>{message}</div><br />

                <br />
                <button onClick={handleLogin}>Login</button>
            </div > : <> <br /><button onClick={handleLogout}>Log out</button></>
    )
}