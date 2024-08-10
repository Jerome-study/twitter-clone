import { AuthenticationForm } from "../../components/Authentication/Main"
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