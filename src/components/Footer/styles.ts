import style from 'styled-components';

export const Container = style.div`
    width:100%;
`;

export const Warning = style.div`
    width:1080px;
    text-align:center;
    margin:auto;
    padding-top:15px;
    line-height:19px;
    
    p {
        font-size:13px;
        font-weight:bold;
        color:rgb(160, 160, 160);
    }

    
    @media (min-width: 320px) and (max-width:768px) {
        width:90%;
        
        p {
            font-size:15px;
        }
    }

    @media (min-width:1024px) {
        width:90%;
    }
`;

export const CreateAcc = style.div`
    width:100%;
    text-align:center;
    margin-top:30px;

    a {
        color:rgb(244, 117, 33);
        cursor:pointer;
        text-decoration:none;
    }

    a:hover {
        text-decoration:underline;
        text-decoration-color:rgb(244,117,33);
    }
    
    p {
        font-size:18px;
        font-weight:600;
    }


    @media (min-width: 320px) and (max-width:767px) {
        width:90%;
        margin:30px auto;
    }
`;

export const Questions = style.div`
    margin-top:90px;
    margin-bottom:100px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:13px;

    a {
        color:rgb(244, 117, 33);
        cursor:pointer;
    }
    
    a:hover {
        text-decoration:underline;
        text-decoration-color:rgb(244,117,33);
    }

    h3 {
        font-size:32px;
        font-weight:bold;
    }

    p {
        font-size:18px;
    }


    @media (min-width: 320px) and (max-width:767px) {
        width:90%;
        margin:90px auto;
        text-align:center;
    }
`;

export const Links = style.div`
    margin-bottom:100px;

    ul {
        display:flex;
        justify-content:center;
        gap:20px;

        a {
            text-decoration:none;
        }

        a:hover {
            text-decoration:underline;
            text-decoration-color:rgb(244,117,33);
        }

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


    @media (min-width: 320px) and (max-width:767px) {
        width:90%;
        margin:100px auto;
        text-align:center;

        ul {
            flex-direction:column;

            .thingy {
                display:none;
            }

            a {
                font-size:15px;
            }
        }
    }
`;