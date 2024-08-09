import { AuthenticationForm } from "../../components/form/Authentication/main"
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