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
                <Box tier={'FAN'} price={'14,99'} color={'rgb(244, 117, 33)'} border={'2px solid rgb(244, 117, 33)'} bgColor={'transparent'} width={'280px'}/>
                <Box tier={'MEGA FAN (1 Mês)'} price={'19,99'} color={'black'} border={'2px solid rgb(244, 117, 33)'} bgColor={'rgb(244, 117, 33)'} width={'280px'}/>
                <Box tier={'MEGA FAN (12 Meses)'} price={'199,99'} color={'rgb(244, 117, 33)'} border={'2px solid rgb(244, 117, 33)'} bgColor={'transparent'} width={'280px'}/>
            </C.Boxes>
            </C.Container>
        </>
    )
}