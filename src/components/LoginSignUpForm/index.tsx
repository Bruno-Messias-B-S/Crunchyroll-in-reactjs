import { Button } from '../Button';
import * as C from './style';

export const LoginSignUpForm = () => {
    return (
        <>
            <C.Container>
                <C.Form>
                    <h1>Login</h1>

                    <form>
                        <input type='text'></input>
                        <input type='text'></input>
                        <Button text='LOGIN'/>
                    </form>

                    <h5>ESQUECEU SUA SENHA?</h5>

                    <h3>Não possui conta? Crie A Sua</h3>
                </C.Form>
            </C.Container>
        </>
    )
}