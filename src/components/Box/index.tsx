import { Button } from '../Button';
import { Button2 } from '../Button2';
import * as C from './style';

type Props = {
    tier: string,
    price:string,
    width: string,
    boxBorder: string
}

export const Box = ({ tier, price, boxBorder, width }: Props) => {
    return (
        <>
            <C.Prices>
                {tier === 'MEGA FAN (1 Mês)' &&
                    <C.Best>MELHOR OFERTA!</C.Best>
                }
                <C.Box style={{border: boxBorder}}>
                    <div className="container">
                        <div className="crown-div">
                            {tier === 'FAN' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" className="crown"><path d="M25.9995805 2.1706845L15.5442004 17.9313712 2.0056328 11.2757714 9.2325257 33.8h34.15535L50.0715 11.2378527l-13.615663 6.6935002L25.9995805 2.1706845z"></path></svg>
                                :
                            <svg xmlns="http://www.w3.org/2000/svg" className="crown"><path fill="none" d="M9.25 36L2 11.44l14.5 6.4L26 3l9.5 14.84 14.5-6.4L42.76 36z"></path><path d="M30.5 24.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path></svg>
                            }
                        </div>
                        <h4>{tier}</h4>
                    </div>

                    <div className="price">
                        <h2>R$ {price}/mês</h2>
                        <p>+ IMPOSTOS APLICÁVEIS</p>
                    </div>

                    <div className="buttons">
                        {/* Otimizar as outras partes nessa vibe aqui em baixo :) PS: Fix 'SECTION' */}
                        {tier === 'MEGA FAN (1 Mês)' ? <Button text='INICIAR TESTE GRATUITO DE 14 DIAS'/> : <Button2 text='INICIAR TESTE GRATUITO DE 14 DIAS'/>}
                        <button style={{color: 'rgb(89, 89, 91)', border: 'none', backgroundColor: 'transparent', width: width, fontSize: '12px'}} className="btn2">PULAR TESTE GRATUITO</button>
                    </div>

                    <div className="advantages">
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                <p>Sem anúncios</p>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                <p>Acesso ilimitado ao acervo da Crunchyroll</p>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                <p>Novos episódios logo após a exibição no Japão</p>
                            </li>

                            <li>
                                {tier === 'FAN' ? 
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                    <p>Assista em até 1 tela</p>
                                </>
                                     :
                                <>
                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                     <p>Assista em até 4 telas</p>
                                 </>
                                }
                            </li>

                            <li>
                                {tier === 'FAN' ?
                                <>
                                    <svg viewBox="0 0 20 20" className="mark2"><path d="M11.18 10l4.4-4.41a.83.83 0 00-1.17-1.18L10 8.82 5.59 4.41a.83.83 0 00-1.18 0 .83.83 0 000 1.18L8.82 10l-4.41 4.41a.83.83 0 001.18 1.18L10 11.18l4.41 4.4a.83.83 0 001.18-1.17L11.18 10z"></path></svg>
                                    <p style={{color: 'rgb(218, 218, 218)'}}>Offline Viewing</p>
                                </>
                                    :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                    <p>Offline Viewing</p>
                                </>
                                }
                            </li>

                            <li>
                                {tier === 'MEGA FAN (12 Meses)' ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                    <p>16% de desconto na anuidade (cobrado a cada 12 meses)</p>
                                </>
                                    :
                                <>
                                    <svg viewBox="0 0 20 20" className="mark2"><path d="M11.18 10l4.4-4.41a.83.83 0 00-1.17-1.18L10 8.82 5.59 4.41a.83.83 0 00-1.18 0 .83.83 0 000 1.18L8.82 10l-4.41 4.41a.83.83 0 001.18 1.18L10 11.18l4.41 4.4a.83.83 0 001.18-1.17L11.18 10z"></path></svg>
                                    <p style={{color: 'rgb(218, 218, 218)'}}>16% de desconto na anuidade (cobrado a cada 12 meses)</p>
                                </>
                                }
                            </li>
                        </ul>
                    </div>
                    </C.Box>
            </C.Prices>
        </>
    )
}