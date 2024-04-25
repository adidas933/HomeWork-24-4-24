import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Counter {
  name: string;
  count: number;
}

export interface CounterState {
  counters: Counter[];
}

let initialState: CounterState = {
  counters: [],
};

if (localStorage['counters']) {
  initialState = {
    counters: JSON.parse(localStorage['counters']),
  };
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<string>) => {
      state.counters.push({
        name: action.payload,
        count: 0,
      });
      localStorage['counters'] = JSON.stringify(state.counters);
    },
    increment: (state, action: PayloadAction<string>) => {
      state.counters.forEach((counter) => {
        if (counter.name === action.payload) {
          counter.count++;
        }
      });
      localStorage['counters'] = JSON.stringify(state.counters);
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.counters.forEach((counter) => {
        if (counter.name === action.payload) {
          counter.count--;
        }
      });
      localStorage['counters'] = JSON.stringify(state.counters);
    },
  },
});

export const { addCounter, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
