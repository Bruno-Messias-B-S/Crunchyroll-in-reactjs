import style from 'styled-components';

export const Prices = style.div`
    display:flex;
`;

export const Box = style.div`
    width:350px;
    height:600px;
    border:4px solid grey;

    .container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:150px;
        gap:10px;
    }

    .round {
        width:80px;
        height:80px;
        border-radius:50%;
        background-color:red;
    }

    .price {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:10px;

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

        button {
            padding:9px 14px;
        }
    }
`;