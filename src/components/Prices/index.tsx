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
                
                <C.Boxes>
                    <Box tier={'FAN'} price={'14,99'} boxBorder={'5px solid rgb(248, 248, 248)'} width={'280px'}/>
                    <Box tier={'MEGA FAN (1 Mês)'} price={'19,99'} boxBorder={'5px solid rgb(42, 189, 187)'} width={'280px'}/>
                    <Box tier={'MEGA FAN (12 Meses)'} price={'199,99'} boxBorder={'5px solid rgb(248, 248, 248)'} width={'280px'}/>
                </C.Boxes>
            </C.Container>
        </>
    )
}