import style from 'styled-components';

export const Prices = style.div`
    display:flex;
    flex-direction:column;
`;

export const Box = style.div`
    width:350px;

    .container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:150px;
        gap:10px;
    }

    .crown-div {
        width:80px;
        height:80px;
        background-color:rgb(250, 184, 24);
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
    }

    .crown {
        width:65%;
        height:50%;
        stroke:white;
        stroke-width:2px;
        fill:none;
    }

    .price {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:10px;
        font-size:22px;
        margin-top:-10px;
        
        h2 {
            font-weight:500;
        }

        p {
            font-size:10px;
        }
    }

    .buttons {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-top:20px;
        gap:8px;
        padding-bottom:20px;

        .btn1,
        .btn2 {
            padding:9px 10px;
            cursor:pointer;
            font-size:13px;
            font-weight:bold;
        }
    }

    .advantages {
        margin-bottom:20px;

        ul {
            width:85%;
            margin:auto;

            li {
                list-style-type:none;
                display:flex;
                align-items:center;
                gap:10px;
                padding-bottom:15px;
                color:rgb(89, 89, 91);
                line-height:20px;

                p {
                    font-size:14px;
                    font-weight:bold;
                }
            }
        }

        .mark1 {
            max-width:20px;
            fill: rgb(244, 117, 33);
        }

        .mark2 {
            max-width:20px;
            fill: rgb(218, 218, 218);
        }
    }


    @media (min-width: 320px) and (max-width:767px) {
        width:100%;
        margin:auto;

        .buttons {
            width:80%;
            margin:20px auto;
        }
    }

    @media (min-width:768px) and (max-width:1023px) {
        width:450px;
    }

    @media (min-width:1024px) {
        width:310px;
    }
`;

export const Best = style.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    background-color:rgb(42, 189, 187);
    padding:10px 0;
    margin-top:-45px;
    color:white;
    font-weight:bold;
    font-size:18px;
`;