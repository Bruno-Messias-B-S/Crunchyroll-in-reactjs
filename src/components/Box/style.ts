import style from 'styled-components';

export const Prices = style.div`
    display:flex;
`;

export const Box = style.div`
    width:350px;
    border:4px solid rgb(248, 248, 248);

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
        background-color:red;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .crown {
        fill:white;
        width:100%;
        height:10px;
    }

    .price {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:10px;
        font-size:22px;
        
        h2 {
            font-weight:100;
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
        gap:5px;
        padding-bottom:20px;

        button {
            padding:9px 10px;
            cursor:pointer;
            font-size:13px;
            font-weight:bold;
        }
    }

    .advantages {
        ul {
            width:80%;
            margin:auto;

            li {
                list-style-type:none;
                display:flex;
                align-items:center;
                gap:10px;
                padding-bottom:15px;
                color:rgb(89, 89, 91);

                p {
                    font-size:13px;
                }
            }
        }

        .mark1 {
            width:20px;
            fill: rgb(244, 117, 33);
        }

        .mark2 {
            width:20px;
            fill: rgb(74, 78, 88);
        }
    }
`;