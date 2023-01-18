import * as C from './style';

type Props = {
    src: string,
    width?: number,
    height?: number
}

export const BannerImage = ({ src, width, height }: Props) => {
    return (
        <>
            <C.Container>
                <img src={src} style={{width:'160px', height}}/>
            </C.Container>
        </>
    );
}