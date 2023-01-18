import * as C from './style';
import { Box } from '../Box';

export const Prices = () => {
    return (
        <>
            <C.Container>
                <C.Title>
                    <h1>Aproveite mais com Premium</h1>
                    <p>Assinantes podem desfrutar de um monte de vantagens.</p>
                </C.Title>

            <Box tier={'FAN'} price={'14,99'} color={'orange'} border={'2px solid orange'} bgColor={'transparent'} width={'280px'}/>
            </C.Container>
        </>
    )
}