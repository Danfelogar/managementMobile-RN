import {createContext} from 'react';
import {AxiosResponse} from 'axios';

import {IOT} from '../../screens';

interface ContextProps {
  //state
  msmTextUpdate: string;
  isLoading: boolean;
  dataOTs: IOT[] | [];
  dataOTsByMonth: IOT[] | [];
  isUpdateOT: Boolean;
  oTForUpdate: IOT | undefined;

  //functions
  getOTsDataByMonthQAndYear: (
    fecha_expedicion_exacta: string,
  ) => Promise<IOT[]>;
  getOTsByData: (searchParamsReq?: any) => Promise<IOT[]>;
  changeIsLoading: () => void;
  changeIsUpdateOT: (val: boolean) => void;
  changeOTForUpdate: (singleOT: IOT) => void;
  changeMsmTextUpdate: (_id: string) => void;
  //TODO:
  handleCreateOT: (data: Partial<IOT>) => Promise<AxiosResponse>;
  handleUpdateOT: (data: Partial<IOT>) => Promise<AxiosResponse>;
}

export const OTsContext = createContext({} as ContextProps);
