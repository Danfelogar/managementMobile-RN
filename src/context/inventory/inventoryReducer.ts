import {IInventario} from '../../screens';
import {InventoriesState} from './InventoryProvider';

type InventoriesActionsType =
  | {
      type: '[INVENTORIES] Get inventories data';
      payload: IInventario[];
    }
  | {
      type: '[INVENTORIES] Change is loading inventories';
    }
  | {type: '[INVENTORIES] Change is distance in Km'; payload: number};

export const inventoryReducer = (
  state: InventoriesState,
  action: InventoriesActionsType,
) => {
  switch (action.type) {
    case '[INVENTORIES] Get inventories data':
      return {
        ...state,
        dataInventory: action.payload,
      };
    case '[INVENTORIES] Change is loading inventories':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case '[INVENTORIES] Change is distance in Km':
      return {
        ...state,
        distanceInKm: action.payload,
      };
    default:
      return state;
  }
};
