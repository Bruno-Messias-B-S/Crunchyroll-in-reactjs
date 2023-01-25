import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const WatchText = styles.div`
    width:560px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:90px;
    gap:15px;
    z-index:99;

    h1 {
        font-weight:500;
        font-size:34px;
    }

    p {
        font-size:18px;
        color:#595856;
    }


    @media (min-width: 320px) and (max-width:767px) {
        width:100%;

        margin-top:60px;

        h1 {
            font-size:30px;
        }

        p {
            line-height:30px;
        }
    }
`;

export const SessionBanner = styles.div`
    margin-top:-50px;
    background-image: url('https://img1.ak.crunchyroll.com/i/spire2/2e66d7205717a911bfea0f1eee8d89281665701603_main.png');
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    width:100%;
    height:600px;


    @media (min-width: 320px) and (max-width:767px) {
        width:100%;
        margin-top:-70px;
    }
`;