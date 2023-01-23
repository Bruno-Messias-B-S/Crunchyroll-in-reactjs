import styles from 'styled-components';

export const Button = styles.div`
    font-size: 14px;
    font-weight:bold;
    padding:10px 15px;
    background-color:rgb(244, 117, 33);
    border:2px solid transparent;
    cursor:pointer;
    color:rgb(20, 21, 25);
    transition: all 0.2s ease-in-out;
    text-align:center;

    &:hover {
        background-color:rgb(255, 148, 77);
      }
`;