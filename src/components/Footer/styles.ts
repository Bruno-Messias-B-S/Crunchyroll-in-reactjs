import style from 'styled-components';

export const Container = style.div`
    width:100%;
`;

export const Warning = style.div`
    width:86%;
    text-align:center;
    margin:auto;
    padding-top:15px;
    line-height:19px;
    
    p {
        font-size:14px;
        font-weight:bold;
        color:rgb(160, 160, 160);
    }
`;

export const CreateAcc = style.div`
    width:100%;
    text-align:center;
    margin-top:30px;

    span {
        color:rgb(244, 117, 33);
        cursor:pointer;
        text-decoration:none;
    }
    
    p {
        font-size:18px;
        font-weight:600;
    }
`;

export const Questions = style.div`
    margin-top:100px;
    margin-bottom:100px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:13px;

    span {
        color:rgb(244, 117, 33);
        cursor:pointer;
    }

    h3 {
        font-size:32px;
        font-weight:bold;
    }

    p {
        font-size:18px;
    }
`;

export const Links = style.div`
    margin-bottom:100px;

    ul {
        display:flex;
        justify-content:center;
        gap:20px;

        li {
            list-style-type:none;
            font-weight:600;
            color:rgb(244, 117, 33);
            cursor:pointer;
        }

        .thingy {
            color:rgb(218, 218, 218);
            cursor:default;
        }
    }
`;