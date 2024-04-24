import type { RootState } from '../../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import { addCounter, decrement, increment } from './counterSlice';
import { useState } from 'react';

export function Counter() {
  const [counterName, setCounterName] = useState('');
  const counters = useSelector((state: RootState) => state.counter.counters);
  const dispatch = useDispatch();
  
  const handleAddCounter = () => {
    let isValidName = true;
    counters.map((counter) => {
      if (counterName === counter.name) {
        alert('Already added');
        isValidName = false;
      }
    });
    if (isValidName) {
      dispatch(addCounter(counterName));
    }
  };
  const handleChangeCounterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounterName(e.target.value);
  };
  return (
    <div>
      {counters.map((counter) => {
        return (
          <div key={counter.name}>
            <div>{counter.name}</div>
            <div>
              <button
                aria-label='Increment value'
                onClick={() => dispatch(increment(counter.name))}
              >
                +
              </button>
              <span>{counter.count}</span>
              <button
                aria-label='Decrement value'
                onClick={() => dispatch(decrement(counter.name))}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      {/* different component: */}
      <input
        type='text'
        placeholder='counter name'
        onChange={handleChangeCounterName}
      />
      <button onClick={handleAddCounter}>Add counter</button>
    </div>
  );
}
