import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import Squares from '../squares/squares';
import Moves from '../moves/moves';
import RestartSuggestion from '../restart-suggestion/restart-suggestion';

import styles from './styles.module.css';
import { startGame } from '../../services/redux/actions/root-actions';

const App = () => {
  const dispatch = useDispatch();
  const {result} = useSelector(store => store);

  useEffect(() => {
    dispatch(startGame());
  },[])

  return (
    <section className={styles.root}>
      {result && <RestartSuggestion />}
      <Squares />
      <Moves />
    </section>
  )
}

export default App;
