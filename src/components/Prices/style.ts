import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
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
`;

export const Boxes = styles.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:25px;
    margin-top:100px;
`;