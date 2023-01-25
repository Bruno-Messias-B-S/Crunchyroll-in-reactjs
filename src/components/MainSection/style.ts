import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    height:700px;
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


    @media (min-width: 320px) and (max-width:768px) {
        height:450px;

        h1 {
            font-size:30px;
        }
    }

    @media (min-width:768px) and (max-width:1000px) {
        h1 {
            font-size:35px;
        }
    }
`;

export const Infos = styles.div`
    width:90%;
    height:500px;
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


    @media (min-width: 320px) and (max-width:768px) {
        width:100%;
        height:100%;
        display:grid;
        grid-template-columns: 2fr 2fr;
        gap:0px;

        .info-divs {
            width:90%;
            height:180px;
            margin:auto;
            justify-content:flex-start;
            gap:10px;

            .icon {
                width:30px;
            }

            p {
                width:140px;
                line-height:20px;
            }
        }
    }

    @media (min-width:768px) and (max-width:1000px) {
        width:75%;
        height:80%;

        .info-divs {
            width:80%;
            height:150px;
            margin:auto;
            justify-content:flex-start;
            gap:10px;
            padding-top:10px;

            .icon {
                width:40px;
            }

            p {
                width:240px;
                line-height:25px;
            }
        }
    }
`;