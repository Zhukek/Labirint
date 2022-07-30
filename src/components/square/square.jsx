import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { buttonClick } from '../../services/redux/actions/root-actions';
import { useEffect, useState } from 'react';

const Square = ({start, number}) => {
  const [color, setColor] = useState('')
  const dispatch = useDispatch();
  const {finishPos, result, clickedOn} = useSelector(store => store);

  useEffect(() => {
    if (result === 'wrong' && clickedOn === number) {
      setColor('red')
    } else if (result && number === finishPos) {
      setColor('green')
    } else {
      setColor('')
    }
  },[result])

  const onClick = () => {
    dispatch(buttonClick(number))
  }

  return (
    <button onClick={onClick} className={`${styles.square} ${styles[color]}`}>
      {start &&
        <span className={styles.start}>START</span>
      }
    </button>
  )
}

export default Square