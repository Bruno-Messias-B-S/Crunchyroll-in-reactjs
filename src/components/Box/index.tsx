import * as C from './style';

type Props = {
    tier: string,
    price:string,
    color: string,
    border: string,
    bgColor: string,
    width: string
}

export const Box = ({ tier, price, color, border, bgColor, width }: Props) => {
    return (
        <>
            <C.Prices>
                <C.Box>
                    <div className="container">
                        <div className="round"></div>
                        <h4>{tier}</h4>
                    </div>

                    <div className="price">
                        <h2>R$ {price}/mês</h2>
                        <p>+ IMPOSTOS APLICÁVEIS</p>
                    </div>

                    <div className="buttons">
                        <button style={{color: color, border: border, backgroundColor: bgColor, width: width}} className="btn1">INICIAR TESTE GRATUITO DE 14 DIAS</button>
                        <button style={{color: 'grey', border: 'none', backgroundColor: bgColor, width: width}} className="btn2">PULAR TESTE GRATUITO</button>
                    </div>
                    </C.Box>
            </C.Prices>
        </>
    )
}