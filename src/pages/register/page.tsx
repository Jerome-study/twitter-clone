import { AuthenticationForm } from "../../components/form/Authentication"
import { inputs } from "./const"

export const RegitserPage = () => {
    return(
        <main>
           <AuthenticationForm inputs={inputs} formType="register"/>
        </main>
    )
}