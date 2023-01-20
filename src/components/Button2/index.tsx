import * as C from './style';

type Props = {
    text: string,
    width?: number,
    marginTop?: number
}

export const Button2 = ({ text, width, marginTop }: Props) => {
    return (
        <>
            <C.Button style={{width, marginTop}}>{text}</C.Button>
        </>
    )
}