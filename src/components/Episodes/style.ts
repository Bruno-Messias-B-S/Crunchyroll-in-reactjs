import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    padding-bottom:40px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:35px;
    margin-top:140px;
    overflow:hidden;
    background-image: linear-gradient( to bottom, white, rgba(218, 218, 218, 0.3) );

    h1 {
        font-weight:500;
        font-size:35px;
    }
`;

export const Images = styles.div`
    display:flex;
    gap:19px;
`;