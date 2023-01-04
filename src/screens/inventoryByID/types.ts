import {ISingleReplacement} from '../inventory/types';
export interface IPropsUseInventoryByID {
  singleInventoryID?: string;
  type?: 'repuesto' | 'maquina';
}

export interface IPropsModalStocks {
  isLoading: boolean;
  handleUpdateStock: (data: Partial<ISingleReplacement>) => Promise<void>;
}

export interface ISeguimiento {
  _id: string;

  id_seguimiento: number;
  imgDeVerificacion: string;

  comentario: string;
  estadoDeLaMaquina: 'bueno' | 'malo' | 'regular';
  nombreDeObservador: string;

  tiempoDeFuncionamiento: number;
  tiempoDeReparacion: number;

  presentaFalla: 'si' | 'no';
  tiempoDeFalla?: number;

  maquina_id_relacion: number | string;

  createdAt: string;
  updatedAt: string;
}

export interface IPropsModalFollow {
  isLoading: boolean;
  handleCreateFollow: (data: Partial<ISeguimiento>) => Promise<void>;
}
