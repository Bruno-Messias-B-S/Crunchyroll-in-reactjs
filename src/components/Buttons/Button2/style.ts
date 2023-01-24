import styles from 'styled-components';

export const Button = styles.div`
    font-size: 14px;
    font-weight:bold;
    padding:10px 15px;
    background-color:transparent;
    border:2px solid rgb(244, 117, 33);
    cursor:pointer;
    color:rgb(244, 117, 33);
    transition: all 0.2s ease-in-out;

    &:hover {
      border:2px solid rgb(255, 148, 77);
      color:rgb(255, 148, 77);
      }
`;