import style from 'styled-components';

export const Container = style.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Form = style.div`
    width:400px;
    height:400px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:30px;

    h1 {
        margin-bottom:30px;
    }

    form {
        width:100%;
        display:flex;
        flex-direction:column;
        gap:30px;
        
        .inputBox{
            width:100%;
            height:100%;
            position:relative;
            border-bottom:2px solid #C7C7C7;

            label {
                position:absolute;
                top:0;
                left:0;
                font-size:18px;
                color:rgb(160, 160, 160);
                font-weight:500;
                transition: 0.3s;
                cursor:text;
            }

            input {
                width:100%;
                height:40px;
                background-color:transparent;
                border:none;
                outline:none;
                font-size:17px;
            }

            .nameInput:focus ~ .userLabel,
            .nameInput:valid ~ .userLabel {
                font-size:12px;
                top:-10px;
            }

            .passwordInput:focus ~ .userPassword,
            .passwordInput:valid ~ .userPassword {
                font-size:12px;
                top:-10px;
            }
        }
    }

    h3 {
        font-size:18px;

        a {
            text-decoration:none;
        }

        a:hover {
            text-decoration:underline;
        }
    }

    p {
        font-size:12px;
        text-align:center;
        width:95%;
        margin-top:-10px;
        color:rgb(160, 160, 160);

        a {
            color:#525452;
            text-decoration:none;
            cursor:pointer;
        }

        a:hover {
            text-decoration:underline;
        }
    }

    .checkboxDiv {
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;

        .checkbox {
            width:20px;
            height:20px;
            cursor:pointer;
        }

        .checkText {
            font-size:15px;
        }
    }
`;