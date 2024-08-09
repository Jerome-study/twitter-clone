import { AuthenticationForm } from "../../components/Authentication/main"
import { inputs } from "./const"

export const LoginPage = () => {
    return(
        <>
            <main>
                <AuthenticationForm inputs={inputs} formType="login" />
            </main>
        </>
    )
}