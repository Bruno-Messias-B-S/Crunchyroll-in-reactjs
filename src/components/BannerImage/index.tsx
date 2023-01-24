type Props = {
    src: string,
}

export const BannerImage = ({ src }: Props) => {
    return (
        <>
            <img src={src} style={{width:'160px'}}/>
        </>
    );
}