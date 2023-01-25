import style from 'styled-components';

export const Container = style.div`
    width:100%;

    img {
        width:160px;
    }

    @media (min-width: 320px) and (max-width:767px) {
        img {
            width:120px;
        }
     }
`;