import { Link } from 'react-router-dom';
import { Button } from '../../Buttons/Button';
import * as C from './style';

export const LoginForm = () => {
    return (
        <>
            <C.Container>
                <C.Form>
                    <h1>Login</h1>

                    <form>
                        <div className="inputBox">
                            <input className='nameInput' name="name" id="name" type='text'></input>
                            <label htmlFor='name' className="userLabel">E-mail ou Nome de usuário</label>
                        </div>

                        <div className="inputBox">
                            <input className='passwordInput' name="password" id="password" type='text'></input>
                            <label htmlFor='password' className='userPassword'>Senha</label>
                        </div>
                        <Button text='LOGIN'/>
                    </form>

                    <h5>ESQUECEU SUA SENHA?</h5>

                    <h3>Não possui conta? <Link to="/signup" style={{color: 'rgb(244, 117, 33)'}}><a>Crie A Sua</a></Link></h3>
                </C.Form>
            </C.Container>
        </>
    )
}