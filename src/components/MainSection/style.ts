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
    height:100%;

    h1 {
        font-size:55px;
    }
`;

export const Infos = styles.div`
    width:90%;
    height:400px;
    display:flex;
    gap:60px;
    padding-top:50px;
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