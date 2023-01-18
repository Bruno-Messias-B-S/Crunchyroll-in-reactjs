import * as C from './style';
import { Button } from '../Button';

export const MainSession = () => {
    return (
        <>
            <C.Container>
                <C.Center>
                    <h1>O Maior Catálogo de</h1>
                    <h1>Anime do Mundo</h1>
                    <Button marginTop={40} text={'INICIAR TESTE GRATUITO DE 14 DIAS'}/>
                </C.Center>
                <C.Infos>
                    <div className="info-divs">
                        <svg viewBox="0 0 40 40" role="img" className="icon">
                            <path d="M20 40a20 20 0 110-40 20 20 0 010 40zm0-2a18 18 0 100-36 18 18 0 000 36zm-5.75-12.66L19 20V9h2v11.38a1 1 0 01-.25.66l-5 5.62-1.5-1.32z"></path>
                        </svg>
                        <p>Assista a novos episódios uma hora após a exibição no Japão</p>
                    </div>

                    <div className="info-divs">
                        <svg viewBox="0 0 40 40" role="img" className="icon">
                            <path d="M20 40a6 6 0 11.01-12.01A6 6 0 0120 40zm0-2a4 4 0 100-8 4 4 0 000 8zm0-38a6 6 0 016 6v14a6 6 0 11-12 0V6a6 6 0 016-6zm0 2a4 4 0 00-4 4v14a4 4 0 108 0V6a4 4 0 00-4-4z"></path>
                        </svg>
                        <p>Desfrute de acesso ilimitado a animes, sem propaganda</p>
                    </div>

                    <div className="info-divs">
                        <svg viewBox="0 0 40 40" role="img" className="icon">
                            <path d="M10.59 2H6v4.59L10.59 2zM14 2v8H6v28h28V2H14zM6 0h28a2 2 0 012 2v36a2 2 0 01-2 2H6a2 2 0 01-2-2V2c0-1.1.9-2 2-2zm6 8V3.41L7.41 8H12zm1 19l-3-12 6 3 4-6 4 6 6-3-3 12H13zm1.56-2h10.88L27 18.73l-3.7 1.85L20 15.6l-3.32 4.97L13 18.73 14.56 25z"></path>
                        </svg>
                        <p>Leia centenas de capítulos de dúzias de mangás diferentes</p>
                    </div>

                    <div className="info-divs">
                        <svg viewBox="0 0 40 40" role="img" className="icon">
                            <path d="M11.35 6c1.5-3.86 4.29-6 8.65-6s7.15 2.14 8.65 6H37v34H3V6h8.35zm2.2 0h12.9A6.65 6.65 0 0020 2a6.65 6.65 0 00-6.46 4zm-2.82 2H5v30h30V8h-5.73c.5 2 .73 4.35.73 7h-2c0-2.75-.26-5.1-.8-7H12.8c-.54 1.9-.8 4.25-.8 7h-2c0-2.65.23-5 .73-7z"></path>
                        </svg>
                        <p>Economize com descontos exclusivos na Loja Crunchyroll</p>
                    </div>
                </C.Infos>
            </C.Container>
        </>
    );
}