import { startGame, RESTART } from '../../services/redux/actions/root-actions';
import { useDispatch } from 'react-redux/es/exports';

import styles from './styles.module.css';

const RestartSuggestion = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({type: RESTART})
    dispatch(startGame())
  }

  return (
    <button onClick={onClick} className={styles.restartButton}>Сыграть еще раз</button>
  )
}

export default RestartSuggestion