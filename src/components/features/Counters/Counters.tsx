import type { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import { Counter, decrement, increment, removeCounter } from './counterSlice';
import { Card, IconButton } from '@mui/material';
import './Counters.css';
import CloseIcon from '@mui/icons-material/Close';

export function Counters() {
  const counters = useSelector((state: RootState) => state.counter.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counter: Counter) => {
    dispatch(increment(counter.name));
  };
  const handleDecrement = (counter: Counter) => {
    dispatch(decrement(counter.name));
  };

  const handleRemoveCounter = (counter: Counter) => {
    dispatch(removeCounter(counter.name));
  };

  return (
    <div>
      {counters.map((counter) => {
        return (
          <Card className='muiCard' key={counter.name}>
            <div className='headingAndXbutton'>
              {counter.name}
              <IconButton
                aria-label='delete'
                className='deleteCounterButton'
                onClick={() => handleRemoveCounter(counter)}
              >
                <CloseIcon className='deleteCounterButtonIcon' />
              </IconButton>
            </div>
            <button onClick={() => handleIncrement(counter)}>+</button>
            <span className='spanCounterNumber'>{counter.count} </span>
            <button onClick={() => handleDecrement(counter)}>-</button>
          </Card>
        );
      })}
    </div>
  );
}
