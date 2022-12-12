import {createContext} from 'react';
import {IInventario} from '../../screens';

interface ContextProps {
  //state
  //   msmTextDelete: string;
  //   msmTextUpdate: string;
  isLoading: boolean;
  dataInventory: IInventario[] | [];
  //   isUpdateInventory: Boolean;
  // inventoryForUpdate: IInventario | undefined

  //functions
  getInventoriesData: (
    searchParams?: string,
    tipoInventario?: string,
    estado?: string,
    existencia_init?: string,
    existencia_end?: string,
  ) => Promise<IInventario[]>;
  changeIsLoading: () => void;
  //   changeIsUpdateInventory: (val: boolean) => void;
  // changeInventoryForUpdate: (singleInventory: IInventario) => void
  //   changeMsmTextDelete: (email: string) => void;
  //   changeMsmTextUpdate: (_id: string) => void;
  //TODO:
  //   handleCreateInventory: (data: IInventario) => void;
  //   handleUpdateInventory: (data: Partial<IInventario>) => void;
  //   handleDeleteInventory: (_id: string) => void;
}

export const InventoryContext = createContext({} as ContextProps);
