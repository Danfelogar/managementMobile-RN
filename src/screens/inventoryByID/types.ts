import {ISingleReplacement} from '../inventory/types';
export interface IPropsUseInventoryByID {
  singleInventoryID?: string;
  type?: 'repuesto' | 'maquina';
}

export interface IPropsModalStocks {
  isLoading: boolean;
  handleUpdateStock: (data: Partial<ISingleReplacement>) => Promise<void>;
}
