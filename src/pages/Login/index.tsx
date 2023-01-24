import { LoginForm } from "../../components/Forms/LoginForm"
import { NavBar } from "../../components/NavBar"

export const Login = () => {
    return (
        <>
        <NavBar display={'none'}/>
        <LoginForm />
        </>
    )
}