import {AxiosResponse} from 'axios';
// import moment from 'moment';
import {FC, ReactNode, useReducer, useEffect} from 'react';
import {IOT} from '../../screens';

import {managementApi} from '../../services';

import {OTsContext} from './OTsContext';
import {oTsReducer} from './oTsReducer';

export interface OTsState {
  msmTextUpdate: string;
  isLoading: boolean;
  dataOTs: IOT[] | [];
  dataOTsByMonth: IOT[] | [];
  isUpdateOT: Boolean;
  oTForUpdate: IOT | undefined;
}

const OTS_INITIAL_STATE: OTsState = {
  msmTextUpdate: '',
  isLoading: false,
  dataOTs: [],
  dataOTsByMonth: [],
  isUpdateOT: false,
  oTForUpdate: undefined,
};

interface Props {
  children: ReactNode;
}

export const OTsProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(oTsReducer, OTS_INITIAL_STATE);

  let yearOfDate = new Date().getFullYear();
  let monthOfDate = new Date().getMonth() + 1;
  let dayOfDate = new Date().toISOString().split('T')[0];

  const getOTsByData = async (
    fecha_expedicion_exacta: string,
  ): Promise<IOT[]> => {
    return await managementApi
      .get('/admin/ots', {
        params: {fecha_expedicion_exacta},
      })
      .then(({data}) => {
        dispatch({type: '[OTS] Get ots data', payload: data});
        // console.log({data});

        return data;
      })
      .catch(err => {
        console.log(err.message);
        let arr: [] = [];

        dispatch({type: '[OTS] Get ots data by month', payload: arr});

        return arr;
      });
  };

  const getOTsDataByMonthQAndYear = async (
    fecha_expedicion: string,
  ): Promise<IOT[]> => {
    return await managementApi
      .get('/admin/ots', {
        params: {fecha_expedicion},
      })
      .then(({data}) => {
        dispatch({type: '[OTS] Get ots data by month', payload: data});
        // console.log({data});

        return data;
      })
      .catch(err => {
        console.log(err.message);
        let arr: [] = [];

        dispatch({type: '[OTS] Get ots data by month', payload: arr});

        return arr;
      });
  };

  const handleCreateOT = async (data: Partial<IOT>): Promise<AxiosResponse> => {
    return await managementApi
      .post('/admin/ots', {
        ...data,
        fecha_expedicion: new Date(
          data.fecha_expedicion as string,
        ).toISOString(),
        fecha_cierre: new Date(data.fecha_cierre as string).toISOString(),
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err.message);

        return err.message;
      });
  };

  const handleUpdateOT = async (data: Partial<IOT>): Promise<AxiosResponse> => {
    return await managementApi
      .put('/admin/ots', {
        ...data,
        fecha_expedicion: new Date(
          data.fecha_expedicion as string,
        ).toISOString(),
        fecha_cierre: new Date(data.fecha_cierre as string).toISOString(),
      })
      .then(res => {
        // getOTsData();

        return res;
      })
      .catch(err => {
        console.log(err.message);

        return err.message;
      });
  };

  const changeIsLoading = () => {
    dispatch({type: '[OTS] Change is loading ots'});
  };

  const changeIsUpdateOT = (val: boolean) => {
    dispatch({type: '[OTS] Change is update ot', payload: val});
  };

  const changeOTForUpdate = (singleOT: IOT | undefined) => {
    dispatch({type: '[OTS] Get ot for update', payload: singleOT});
  };

  const changeMsmTextUpdate = (_id: string) => {
    dispatch({type: '[OTS] Change msm text for update ot', payload: _id});
  };

  useEffect(() => {
    getOTsDataByMonthQAndYear(`${yearOfDate}-${monthOfDate}`);
    getOTsByData(dayOfDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OTsContext.Provider
      value={{
        ...state,

        //functions
        getOTsDataByMonthQAndYear,
        getOTsByData,
        changeIsLoading,
        changeIsUpdateOT,
        changeOTForUpdate,
        changeMsmTextUpdate,
        //TODO:
        handleCreateOT,
        handleUpdateOT,
      }}>
      {children}
    </OTsContext.Provider>
  );
};
