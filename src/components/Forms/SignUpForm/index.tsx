import { Link } from 'react-router-dom';
import { Button } from '../../Buttons/Button';
import * as C from './style';

export const SignUpForm = () => {
    return (
        <>
            <C.Container>
                <C.Form>
                    <h1>Criar Conta</h1>

                    <form>
                        <div className="inputBox">
                            <input className='nameInput' name="name" id="name" type='text'></input>
                            <label htmlFor='name' className="userLabel">E-mail ou Nome de usuário</label>
                        </div>

                        <div className="inputBox">
                            <input className='passwordInput' name="password" id="password" type='text'></input>
                            <label htmlFor='password' className='userPassword'>Senha</label>
                        </div>

                        <div className="checkboxDiv">
                            <div>
                                <input className='checkbox' name="password" id="password" type='checkbox'></input>
                            </div>

                            <div>
                                <label htmlFor='password' className="checkText">Quero receber todas as novidades, ofertas e anúncios da Crunchyroll.</label>
                            </div>
                        </div>

                        <Button text='CRIAR CONTA'/>
                    </form>

                    <p>Ao criar uma conta, você declara que possui mais de 16 anos de idade e está de acordo com os <a>Termos de Serviço</a> & <a>Política de Privacidade</a></p>

                    <h3>Já possui uma conta? <Link to="/login" style={{color: 'rgb(244, 117, 33)'}}><a>Login</a></Link></h3>
                </C.Form>
            </C.Container>
        </>
    )
}