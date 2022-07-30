import { useSelector } from 'react-redux/es/exports';
import arrowImagePath from '../../images/arrow.png';

import styles from './styles.module.css';

const Moves = () => {
  const {arrayOfMoves} = useSelector(store => store)

  if (!arrayOfMoves) {
    return null
  }
  
  return (
    <div className={styles.arrows}>
      {arrayOfMoves.map((arrowDirection, index) => (
        <img className={`${styles.arrow} ${styles[arrowDirection]}`} alt={arrowDirection} src={arrowImagePath} key={index}/>
      ))}
    </div>
  )
}

export default Moves