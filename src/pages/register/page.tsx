import { AuthenticationForm } from "../../components/Authentication/Main"
import { inputs } from "./const"

export const RegitserPage = () => {
    return(
        <main>
           <AuthenticationForm inputs={inputs} formType="register"/>
        </main>
    )
}