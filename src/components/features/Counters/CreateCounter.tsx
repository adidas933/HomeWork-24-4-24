import { useState } from 'react';
import { Counter, addCounter } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import './CreateCounter.css';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { pink } from '@mui/material/colors';

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
        alert('Invalid name');
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
        placeholder='Enter Counter'
        onChange={handleChangeCounterName}
        className='inputCreateCounter'
      />
      <Fab
      size='small'
         sx={{ color: 'black', bgcolor: pink[100]}}
        aria-label='add'
        onClick={handleAddCounter}
        className='fabButtonAdd'
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
