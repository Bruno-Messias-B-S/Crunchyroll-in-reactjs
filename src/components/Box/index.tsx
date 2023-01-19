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
                        <div className="crown-div">
                            <div className="crown">asd</div>
                        </div>
                        <h4>{tier}</h4>
                    </div>

                    <div className="price">
                        <h2>R$ {price}/mês</h2>
                        <p>+ IMPOSTOS APLICÁVEIS</p>
                    </div>

                    <div className="buttons">
                        <button style={{color: color, border: border, backgroundColor: bgColor, width: width}} className="btn1">INICIAR TESTE GRATUITO DE 14 DIAS</button>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                <p>Assista em até 1 tela</p>
                            </li>

                            <li>
                                {tier === 'FAN' &&
                                <>
                                    <svg viewBox="0 0 20 20" className="mark2"><path d="M11.18 10l4.4-4.41a.83.83 0 00-1.17-1.18L10 8.82 5.59 4.41a.83.83 0 00-1.18 0 .83.83 0 000 1.18L8.82 10l-4.41 4.41a.83.83 0 001.18 1.18L10 11.18l4.41 4.4a.83.83 0 001.18-1.17L11.18 10z"></path></svg>
                                    <p style={{color: 'rgb(218, 218, 218)'}}>Offline Viewing</p>
                                </>
                                }

                                {tier === 'MEGA FAN (1 Mês)' &&
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                    <p>Offline Viewing</p>
                                </>
                                }

                                {tier === 'MEGA FAN (12 Meses)' &&
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                    <p>Offline Viewing</p>
                                </>
                                }
                            </li>

                            <li>
                                {tier === 'FAN' &&
                                <>
                                    <svg viewBox="0 0 20 20" className="mark2"><path d="M11.18 10l4.4-4.41a.83.83 0 00-1.17-1.18L10 8.82 5.59 4.41a.83.83 0 00-1.18 0 .83.83 0 000 1.18L8.82 10l-4.41 4.41a.83.83 0 001.18 1.18L10 11.18l4.41 4.4a.83.83 0 001.18-1.17L11.18 10z"></path></svg>
                                    <p style={{color: 'rgb(218, 218, 218)'}}>16% de desconto na anuidade (cobrado a cada 12 meses)</p>
                                </>
                                }

                                {tier === 'MEGA FAN (1 Mês)' &&
                                <>
                                    <svg viewBox="0 0 20 20" className="mark2"><path d="M11.18 10l4.4-4.41a.83.83 0 00-1.17-1.18L10 8.82 5.59 4.41a.83.83 0 00-1.18 0 .83.83 0 000 1.18L8.82 10l-4.41 4.41a.83.83 0 001.18 1.18L10 11.18l4.41 4.4a.83.83 0 001.18-1.17L11.18 10z"></path></svg>
                                    <p style={{color: 'rgb(218, 218, 218)'}}>16% de desconto na anuidade (cobrado a cada 12 meses)</p>
                                </>
                                }

                                {tier === 'MEGA FAN (12 Meses)' &&
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-t="checkmark-svg" aria-labelledby="checkmark-svg" role="img" className="mark1"><title id="checkmark-svg">Checked</title><path d="M8.75 15a1.25 1.25 0 01-.88-.37l-3.75-3.75a1.25 1.25 0 011.76-1.76l2.79 2.78 5.37-6.45a1.25 1.25 0 111.92 1.6l-6.25 7.5c-.23.27-.55.43-.9.45h-.06"></path></svg>
                                    <p>16% de desconto na anuidade (cobrado a cada 12 meses)</p>
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