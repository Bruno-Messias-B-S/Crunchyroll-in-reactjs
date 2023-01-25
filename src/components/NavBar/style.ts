import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    height:60px;
    background-color:transparent;
    position:absolute;
`;

export const Nav = styles.div`
    width:90%;
    height:inherit;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:auto;
`;

export const Logo = styles.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
`;

export const Links = styles.div`
    height:inherit;
    width:200px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:30px;

    button {
        padding:10px 20px;
        background-color:transparent;
        border:none;
        color:white;
        font-size:13px;
        font-weight:bold;
        cursor:pointer;
    }

    button:last-child {
        border:2px solid white;
    }

    @media (min-width: 320px) and (max-width:767px) {
        .loginBtn {
            display:none;
        }
    }
`;