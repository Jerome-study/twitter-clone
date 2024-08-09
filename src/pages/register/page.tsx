import { AuthenticationForm } from "../../components/Authentication/main"
import { inputs } from "./const"

export const RegitserPage = () => {
    return(
        <main>
           <AuthenticationForm inputs={inputs} formType="register"/>
        </main>
    )
}