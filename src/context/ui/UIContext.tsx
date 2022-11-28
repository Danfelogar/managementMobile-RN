import {createContext} from 'react';

interface ContextProps {
  //state
  isOpenFilterInventory: boolean;
  //functions
  changeModalFilterInventory: () => void;
}

export const UIContext = createContext({} as ContextProps);
