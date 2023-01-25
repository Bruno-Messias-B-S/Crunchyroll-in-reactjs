import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;


    @media (min-width: 320px) and (max-width:767px) {
        width:90%;
        margin:auto;

        h1 {
            font-size:25px;
        }
    }
`;

export const Title = styles.div`
    margin-top:100px;
    display:flex;
    flex-direction:column;
    text-align:center;
    gap:12px;

    h1 {
        font-weight:500;
        font-size:34px;
    }

    p {
        font-size:18px;
        color:#595856;
    }


    @media (min-width: 320px) and (max-width:767px) {
        margin-top:55px;

        h1 {
            font-size:25px;
        }
    }
`;

export const Boxes = styles.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:25px;
    margin-top:100px;


    @media (min-width: 320px) and (max-width:1023px) {
        flex-direction:column;
        width:inherit;
        margin:auto;
        margin-top:50px;
        gap:100px;
    }

    @media (min-width:1024px) {
        width:100%;
    }
`;