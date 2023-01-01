import {FC, ReactNode, useEffect, useReducer} from 'react';

import {IInventario} from '../../screens';
import {managementApi} from '../../services';
import {InventoryContext} from './InventoryContext';
import {inventoryReducer} from './inventoryReducer';

export interface InventoriesState {
  isLoading: boolean;
  dataInventory: IInventario[] | [];
  distanceInKm: number;
}

const INVENTORIES_INITIAL_STATE: InventoriesState = {
  isLoading: false,
  dataInventory: [],
  distanceInKm: 0,
};

interface Props {
  children: ReactNode;
}

export const InventoryProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(
    inventoryReducer,
    INVENTORIES_INITIAL_STATE,
  );

  const getInventoriesData = async (
    searchParams?: string,
    tipoInventario?: string,
    estado?: string,
    existencia_init?: string,
    existencia_end?: string,
  ): Promise<IInventario[]> => {
    changeIsLoading();
    return await managementApi
      .get('/admin/inventorys', {
        params: {
          searchParams,
          tipoInventario,
          estado,
          existencia_init,
          existencia_end,
        },
      })
      .then(({data}) => {
        dispatch({type: '[INVENTORIES] Get inventories data', payload: data});
        changeIsLoading();
        return data;
      })
      .catch(err => {
        console.log(err.message);
        let arr: [] = [];

        dispatch({type: '[INVENTORIES] Get inventories data', payload: arr});
        changeIsLoading();
        return arr;
      });
  };

  const changeIsLoading = () => {
    dispatch({type: '[INVENTORIES] Change is loading inventories'});
  };

  useEffect(() => {
    getInventoriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDistanceInKm = (val: number) => {
    dispatch({type: '[INVENTORIES] Change is distance in Km', payload: val});
  };

  return (
    <InventoryContext.Provider
      value={{
        ...state,
        //functions
        getInventoriesData,
        changeIsLoading,
        changeDistanceInKm,
      }}>
      {children}
    </InventoryContext.Provider>
  );
};
