import {createContext} from 'react';

interface ContextProps {
  //state
  isOpenFilterInventory: boolean;
  isOpenOTModal: boolean;
  isUpdateStocksModal: boolean;
  isSnackbarSuccess: boolean;
  isSnackbarError: boolean;
  //functions
  changeModalFilterInventory: () => void;
  toggleModalOTs: () => void;
  toggleModalStocks: () => void;
  toggleSnackBarSuccess: () => void;
  toggleSnackBarError: () => void;
}

export const UIContext = createContext({} as ContextProps);
