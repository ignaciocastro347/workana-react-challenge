import { capFirstLetter, getMatchingWordsWithSymbols } from '@/utils/strings';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  symbols: string[];
  firstName: string;
  firstSymbol: string;
  lastName: string;
  lastSymbol: string;
}

const initialState: InitialState = {
  symbols: [],
  firstName: "",
  firstSymbol: "",
  lastName: "",
  lastSymbol: "",
};

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    setElements: (state, action) => {
      state.symbols = action.payload;
    },
    resetValues: (state) => {
      state.firstName = "";
      state.firstSymbol = "";
      state.lastName = "";
      state.lastSymbol = "";
    },
    startMatching: (state, action) => {

      const firstName = action.payload.firstName.toLowerCase();
      const lastName = action.payload.lastName.toLowerCase();
      
      const { firstSymbol, lastSymbol } =  getMatchingWordsWithSymbols(
        state.symbols,
        firstName,
        lastName,
      );

      // Set FirstName
      state.firstSymbol = capFirstLetter(firstSymbol);
      state.firstName = firstSymbol ? firstName.slice(firstSymbol.length) : capFirstLetter(firstName);

      // Set LastName
      state.lastSymbol = capFirstLetter(lastSymbol);
      state.lastName = lastSymbol ? lastName.slice(lastSymbol.length) : capFirstLetter(lastName);
    }
  },
})

// Thunk function
export const fetchSymbols = () => async (dispatch: any) => {
  const response = await fetch('./elements.json');
  const data = await response.json();
  dispatch(setElements(data))
}

export const {
  setElements,
  startMatching,
  resetValues
} = elementsSlice.actions

export default elementsSlice.reducer