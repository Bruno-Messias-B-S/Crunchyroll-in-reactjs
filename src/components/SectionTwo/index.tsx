import * as C from './style';
import { Button } from '../Buttons/Button';

export const SectionTwo = () => {
    return (
        <>
            <C.Container>
                <C.WatchText>
                    <h1>Assista onde quiser, quando quiser</h1>
                    <p>Assista no seu PC, celular, Xbox, PS4, Roku, Apple TV e qualquer outro dispositivo que tenha iOS ou Android.</p>
                    <Button marginTop={10} width={190} text={'VER PLANOS PREMIUM'}/>
                </C.WatchText>
                <C.SessionBanner>

                </C.SessionBanner>
            </C.Container>
        </>
    );
}