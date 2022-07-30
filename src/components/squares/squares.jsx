import { useSelector } from "react-redux/es/exports";
import Square from "../square/square";

import styles from './styles.module.css';

const Squares = () => {
  const {squares} = useSelector(store => store)

  return (
    <div className={styles.plate}>
      {squares ? 
      squares.map((start, index) => (
        <Square key={index} start={start} number={index + 1}/>
      )) : 
      <span>Loading</span>
      }
    </div>
  )
}

export default Squares