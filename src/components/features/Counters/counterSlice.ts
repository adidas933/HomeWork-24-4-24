import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
  name: string;
  count: number;
}

export interface CounterState {
  counters: Counter[];
}

const initialState: CounterState = {
  counters: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<string>) => {
      state.counters.push({
        name: action.payload,
        count: 0,
      });
    },
    increment: (state, action: PayloadAction<string>) => {
      state.counters.forEach((counter) => {
        if (counter.name === action.payload) {
          counter.count++;
        }
      });
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.counters.forEach((counter) => {
        if (counter.name === action.payload) {
          counter.count--;
        }
      });
    },
  },
});

export const { addCounter, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
