import * as C from './styles';

export const Footer = () => {
    return (
        <>
            <C.Container>
                <C.Warning>
                    <p>*Nossos mangás estão disponíveis apenas na língua inglesa. A disponibilidade da Crunchyroll Store pode variar de região para região.</p>
                    <p>**A disponibilidade de conteúdo pode variar de país para país. As novas ofertas de preços são válidas apenas para assinantes que residam nos países afetados. O uso da Crunchyroll está sujeito aos nossos Termos de Serviço e nossa Política de Privacidade. A Crunchyroll se reserva todos os direitos em seus Termos de Serviço, incluindo futuras mudanças de preço.</p>
                </C.Warning>

                <C.CreateAcc><p>Ou crie uma <span>conta gratuita</span> e comece a assistir.</p></C.CreateAcc>

                <C.Questions>
                    <h3>Perguntas?</h3>
                    <p>Visite nosso <span>Centro de Ajuda</span> para saber mais.</p>
                </C.Questions>

                <C.Links>
                    <ul>
                        <li>Termos de Serviço</li>
                        <li className="thingy">|</li>
                        <li>Política de Privacidade</li>
                        <li className="thingy">|</li>
                        <li>Ferramenta de Consentimento a Cookies</li>
                    </ul>
                </C.Links>
            </C.Container>
        </>
    );
}