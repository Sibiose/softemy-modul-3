import { useState } from "react";

export interface RegistrationDetails {
    email?: string;
    password?: string;
    username?: string;
    acceptedTerms?: boolean;
    phoneNr?: string;
    activityField?: string;
    country?: string;
    voucher?: string;
}

export const validateInput = (registrationState: RegistrationDetails): boolean => {
    console.log(registrationState);
    const { email, password, username } = registrationState;
    if (email === undefined || email === "") return false
    if (password === undefined || password === "") return false
    if (username === undefined || username === "") return false

    return true
}

export const register = async (registrationState: RegistrationDetails) => {
    const { email, password, username, acceptedTerms, ...details } = registrationState;
    if (validateInput(registrationState))
        alert(`S-a inregistrat utilizatorul: ${username}, cu email: ${email} \n  Detalii utilizator: ${Object.values(details).filter(el => el !== undefined)}  `);
}



export const RegistrationView = () => {

    const [registrationState, setRegistrationState] = useState<RegistrationDetails>({ acceptedTerms: false });
    return (
        <div className='wrapper'>
            <div className="form-wrapper">
                <div className="col">
                    <h3>Email</h3>
                    <input type="email" required onChange={(e) => {
                        setRegistrationState({ ...registrationState, email: e.target.value ?? "" })
                    }} /></div>
                <div className="col">
                    <h3>Parola</h3>
                    <input type="password" required onChange={(e) => {
                        setRegistrationState({ ...registrationState, password: e.target.value ?? "" })
                    }} /></div>
                <div className="col span-2">
                    <h3>Nume utilizator</h3>
                    <input type="text" required onChange={(e) => {
                        setRegistrationState({ ...registrationState, username: e.target.value ?? "" })
                    }} /></div>
                <div className="col">
                    <h3>Telefon</h3>
                    <input type="text" onChange={(e) => {
                        setRegistrationState({ ...registrationState, phoneNr: e.target.value ?? "" })
                    }} /></div>
                <div className="col">
                    <h3>Domeniul de activitate</h3>
                    <select name="Domeniul-de-activitate" id="" onChange={(e) => {
                        setRegistrationState({ ...registrationState, activityField: e.currentTarget.value })
                    }}>
                        <option value="Industria 1">Industria 1</option>
                        <option value="Industria 2">Industria 2</option>
                        <option value="Industria 3">Industria 3</option>
                    </select></div>
                <div className="col">
                    <h3>Tara</h3>
                    <select name="Tara" id=""
                        onChange={(e) => {
                            setRegistrationState({ ...registrationState, country: e.currentTarget.value })
                        }}>
                        <option value="Romania">Romania</option>
                        <option value="Elvetia">Elvetia</option>
                        <option value="Germania">Germania</option>
                        <option value="Ungaria">Ungaria</option>
                    </select></div>
                <div className="col">
                    <h3>Voucher(optional)</h3>
                    <input type="text" onChange={(e) => {
                        setRegistrationState({ ...registrationState, voucher: e.target.value })
                    }} /></div>
            </div>

            <p>Contul va fi validat folosind adresa de email introdusa</p>

            <div style={{
                display: 'flex',
                justifyContent:'center'
            }}>
                <input type="checkbox" name="Termenii si conditiile" id="" onClick={(e) => {
                    setRegistrationState({ ...registrationState, acceptedTerms: !registrationState.acceptedTerms });
                }} />
                <p>Accepta Termenii si conditiile</p>
            </div>

            <br />
            <button
                onClick={() => {
                    if (registrationState.acceptedTerms === true) {
                        register(registrationState);
                    }
                }}>Creeaza cont </button>
            <p className="disclaimer">*Prin crearea acestui cont sunteți de acord și cu abonarea la newsletter-ul nostru informativ (trimis odată la 2 săptămâni). Puteți gestiona aparteneta la newsletter din linkurile de la subsolul oricarui email primit de la noi.</p>

        </div>
    )
}