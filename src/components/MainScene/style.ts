import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    height:100vh;
    background-image: url('https://img1.ak.crunchyroll.com/i/spire1/c1484be66b990b9d293d10909145cfe41665701542_main.png');
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Center = styles.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    color:white;
    height:60%;

    h1 {
        font-size:55px;
    }

    button {
        margin-top:40px;
        font-size: 14px;
        font-weight:bold;
        padding:12px;
        background-color:rgb(244, 117, 33);
        border:0px solid transparent;
        cursor:pointer;
    }
`;

export const Infos = styles.div`
    width:90%;
    height:40%;
    display:flex;
    gap:60px;
    margin-top:20px;
    justify-content:center;

    .info-divs {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:17px;
        width:230px;
        color:white;

        p {
            text-align:center;
            line-height:25px;
        }
    }

    .icon {
        width:40px;
        fill:currentcolor;
    }
`;