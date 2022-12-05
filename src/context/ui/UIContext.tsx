import {createContext} from 'react';

interface ContextProps {
  //state
  isOpenFilterInventory: boolean;
  isOpenOTModal: boolean;
  //functions
  changeModalFilterInventory: () => void;
  toggleModalOTs: () => void;
}

export const UIContext = createContext({} as ContextProps);
