import * as C from './style';
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <C.Container>
                <C.Nav>
                <C.Logo>
                    <img src="https://static.crunchyroll.com/cr-spa-registration/assets/img/logo/cr_logo.png" />
                </C.Logo>

                <C.Links>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/login"><button style={{border: 'none'}}>LOGIN</button></Link>
                    <button>NAVEGAR</button>
                </C.Links>
                </C.Nav>
            </C.Container>
        </>
    );
}