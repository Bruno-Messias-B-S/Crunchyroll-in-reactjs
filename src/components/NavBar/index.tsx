import * as C from './style';

export const NavBar = () => {
    return (
        <>
            <C.Container>
                <C.Nav>
                <C.Logo>
                    <img src="https://static.crunchyroll.com/cr-spa-registration/assets/img/logo/cr_logo.png" />
                </C.Logo>

                <C.Links>
                    <button>LOGIN</button>
                    <button>NAVEGAR</button>
                </C.Links>
                </C.Nav>
            </C.Container>
        </>
    );
}