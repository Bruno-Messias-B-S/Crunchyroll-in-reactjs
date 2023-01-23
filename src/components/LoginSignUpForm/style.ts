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
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;

    form {
        width:100%;
        display:flex;
        flex-direction:column;
        gap:30px;
    }

    input {
        width:100%;
        height:50px;
        background-color:transparent;
        border:none;
        border-bottom:2px solid rgb(160, 160, 160);
        outline:none;
        font-size:17px;
    }
`;