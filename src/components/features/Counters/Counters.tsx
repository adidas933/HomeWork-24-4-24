import type { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import { Counter, decrement, increment } from './counterSlice';
import { Card } from '@mui/material';
import './Counters.css';
import { useEffect } from 'react';

export function Counters() {
  const counters = useSelector((state: RootState) => state.counter.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counter: Counter) => {
    dispatch(increment(counter.name));
  };
  const handleDecrement = (counter: Counter) => {
    dispatch(decrement(counter.name));
  };

  useEffect(() => {
    const localStorageCounters = localStorage.getItem('counters');
    if (localStorageCounters) {
      const parsedCounters: Counter[] = JSON.parse(localStorageCounters);
      dispatch({ type: 'counter/loadCounters', payload: parsedCounters });
    }
    
  }, [dispatch]);

  return (
    <div>
      {counters.map((counter) => {
        return (
          <Card className='muiCard' key={counter.name}>
            <div>{counter.name}</div>
            <button onClick={() => handleIncrement(counter)}>+</button>
            <span className='spanCounterNumber'>{counter.count} </span>
            <button onClick={() => handleDecrement(counter)}>-</button>
          </Card>
        );
      })}
    </div>
  );
}
