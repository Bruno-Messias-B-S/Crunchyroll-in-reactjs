import * as C from './style';

type Props = {
    src: string,
    width?: string
}

export const BannerImage = ({ src, width }: Props) => {
    return (
        <>
        <C.Container>
            <img src={src} style={{width: width}}/>
        </C.Container>
        </>
    );
}