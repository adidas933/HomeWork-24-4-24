import { useState } from 'react';
import { Counter, addCounter } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';

export const CreateCounter = () => {
  const counters: Counter[] = useSelector(
    (state: RootState) => state.counter.counters
  );
  const dispatch = useDispatch();
  const [counterName, setCounterName] = useState('');
  const handleChangeCounterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounterName(e.target.value);
  };

  const handleAddCounter = () => {
    let isValidName = true;
    counters.forEach((counter) => {
      if (counterName === counter.name) {
        alert('Already added');
        isValidName = false;
      }
    });
    if (isValidName) {
      dispatch(addCounter(counterName));
    }
  };
  return (
    <div>
      <input
        type='text'
        placeholder='counter name'
        onChange={handleChangeCounterName}
      />
      <button onClick={handleAddCounter}>Add counter</button>
    </div>
  );
};
