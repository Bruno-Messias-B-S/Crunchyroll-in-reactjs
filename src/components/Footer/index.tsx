import * as C from './styles';

export const Footer = () => {
    return (
        <>
            <C.Container>
                <C.Warning>
                    <p>*Nossos mangás estão disponíveis apenas na língua inglesa. A disponibilidade da Crunchyroll Store pode variar de região para região.</p>
                    <p>**A disponibilidade de conteúdo pode variar de país para país. As novas ofertas de preços são válidas apenas para assinantes que residam nos países afetados. O uso da Crunchyroll está sujeito aos nossos Termos de Serviço e nossa Política de Privacidade. A Crunchyroll se reserva todos os direitos em seus Termos de Serviço, incluindo futuras mudanças de preço.</p>
                </C.Warning>

                <C.CreateAcc><p>Ou crie uma <a>conta gratuita</a> e comece a assistir.</p></C.CreateAcc>

                <C.Questions>
                    <h3>Perguntas?</h3>
                    <p>Visite nosso <a>Centro de Ajuda</a> para saber mais.</p>
                </C.Questions>

                <C.Links>
                    <ul>
                        <a><li>Termos de Serviço</li></a>
                        <li className="thingy">|</li>
                        <a><li>Política de Privacidade</li></a>
                        <li className="thingy">|</li>
                        <a><li>Ferramenta de Consentimento a Cookies</li></a>
                    </ul>
                </C.Links>
            </C.Container>
        </>
    );
}