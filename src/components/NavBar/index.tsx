import * as C from './style';
import { Link } from 'react-router-dom'

type Props = {
    display: string
}

export const NavBar = ({ display }: Props) => {
    return (
        <>
            <C.Container>
                <C.Nav>
                <C.Logo>
                    <Link to="/"><img src="https://static.crunchyroll.com/cr-spa-registration/assets/img/logo/cr_logo.png" /></Link>
                </C.Logo>

                <C.Links style={{display: display}}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/login"><button style={{border: 'none'}} className="loginBtn">LOGIN</button></Link>
                    <button className="navBtn">NAVEGAR</button>
                </C.Links>
                </C.Nav>
            </C.Container>
        </>
    );
}