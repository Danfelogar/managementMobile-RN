import {createContext} from 'react';
import {IInventario} from '../../screens';

interface ContextProps {
  //state
  //   msmTextDelete: string;
  //   msmTextUpdate: string;
  isLoading: boolean;
  dataInventory: IInventario[] | [];
  inventoryForUpdate: IInventario | undefined;
  //   isUpdateInventory: Boolean;

  //functions
  getInventoriesData: (
    searchParams?: string,
    tipoInventario?: string,
    estado?: string,
    existencia_init?: string,
    existencia_end?: string,
  ) => Promise<IInventario[]>;
  changeIsLoading: () => void;
  changeInventoryForUpdate: (singleInventory: IInventario) => void;
  //   changeIsUpdateInventory: (val: boolean) => void;
  //   changeMsmTextDelete: (email: string) => void;
  //   changeMsmTextUpdate: (_id: string) => void;
  //TODO:
  //   handleCreateInventory: (data: IInventario) => void;
  //   handleUpdateInventory: (data: Partial<IInventario>) => void;
  //   handleDeleteInventory: (_id: string) => void;
}

export const InventoryContext = createContext({} as ContextProps);
