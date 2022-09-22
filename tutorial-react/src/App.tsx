import { useState } from "react";
import { LoginView } from "./LoginView"
import { ProductView } from "./ProductView"
import { RegisterView } from "./RegisterView"
import { TokenContext } from "./TokenContext";

export const App = () => {
    const [token, setToken] = useState("");
    return (
        <div id="App">
            <TokenContext.Provider value={token}>
                <RegisterView />
                <LoginView  setToken={setToken} />
                <ProductView  />
            </TokenContext.Provider>
        </div>
    )
}