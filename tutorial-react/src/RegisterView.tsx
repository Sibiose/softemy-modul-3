import { useState } from "react"


async function createAccount(username: string, password: string) {
    const path = `http://localhost:5000/users`;
    const body = {
        username,
        password
    }

    const response = await fetch(path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
    });
    return response
}

export const RegisterView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        let res = await createAccount(username, password)
        if (res.ok)
            setMessage('Register was successfull')
        else setMessage('Username Taken')
    }


    return <>
        <h1>Create new account</h1>
        <input value={username} onChange={e => setUsername(e.target.value)} /> <br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <div>{message}</div><br />
        <button onClick={handleRegister}>Create Account</button>
    </>
}