import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import moment from 'moment';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {AuthContext, OTsContext, ThemeContext, UIContext} from '../../context';
import {IOT} from './types';
import {managementApi} from '../../services';
import {validationCreateOT, validationUpdateOT} from '../../helpers';

let objDay = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
let objMonth = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
let dayName = new Date().getDay();
let monthName = new Date().getMonth();
let dayNumber = new Date().getDate();

let yearOfDate = new Date().getFullYear();
let monthOfDate = new Date().getMonth() + 1;
let today = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000,
)
  .toISOString()
  .split('T')[0];

export const useCalendar = () => {
  let labelToday = `${objMonth[monthName]} ${dayNumber}, ${objDay[dayName]}`;
  const {isLoggedIn} = useContext(AuthContext);
  const {
    dataOTsByMonth,
    isLoading,
    oTForUpdate,
    isUpdateOT,
    getOTsDataByMonthQAndYear,
    getOTsByData,
    changeIsUpdateOT,
    changeOTForUpdate,
    changeMsmTextUpdate,
    changeIsLoading,
    handleCreateOT,
    handleUpdateOT,
  } = useContext(OTsContext);
  const {toggleModalOTs, toggleSnackBarSuccess} = useContext(UIContext);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [daySelected, setDaySelected] = useState<string>(today);
  const [idxIdRelationMaq, setIdxIdRelationMaq] = useState<
    Array<{label: string; value: string}>
  >([]);
  const [idxIdRelationRep, setIdxIdRelationRep] = useState<
    Array<{label: string; value: string}>
  >([]);
  const [idxUsersMttos, setIdxUsersMttos] = useState<
    Array<{label: string; value: string}>
  >([]);

  let objOTsByMonth = dataOTsByMonth.reduce((accumulator: {}, value: IOT) => {
    return {
      ...accumulator,
      [moment(value?.fecha_expedicion).format('YYYY-MM-DD')]: {
        marked: true,
      },
    };
  }, {});

  const {
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
  } = colors;

  const navigation = useNavigation<any>();

  const handlerIndexOfIdMaq = async () => {
    await managementApi
      .get('/admin/inventorysMaq')
      .then(({data}) => {
        // console.log({data});
        setIdxIdRelationMaq(
          data.map((item: any) => {
            return {
              label: `MAQ_${item.id_maquina}`,
              value: item.id_maquina.toString(),
            };
          }),
        );
      })
      .catch(err => console.log(err));
  };

  const handlerIndexOfIdRep = async () => {
    await managementApi
      .get('/admin/inventorysRep')
      .then(({data}) => {
        // console.log({data});
        setIdxIdRelationRep(
          data
            .filter((item: any) => item.existencia !== 0)
            .map((item: any) => {
              return {
                label: `${item.nombre} Existencias: ${item.existencia}`,
                value: item._id.toString(),
              };
            }),
        );
      })
      .catch(err => console.log(err));
  };

  const handlerIndexOfUsersMttos = async () => {
    await managementApi
      .get('/admin/usersMttos')
      .then(({data}) => {
        // console.log({data});
        setIdxUsersMttos(
          data.map((item: any) => {
            return {
              label: `${item.nombre}`,
              value: `${item.nombre}`,
            };
          }),
        );
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    handlerIndexOfIdMaq();
    handlerIndexOfIdRep();
    handlerIndexOfUsersMttos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDaySelected = (day: string) => {
    setDaySelected(day);
    // console.log({day});
    getOTsByData(day);
  };

  const changeMonthSelected = (month: number, year: number) => {
    getOTsDataByMonthQAndYear(`${year}-${month}`);
  };

  const formMethodsCreate = useForm<IOT>({
    resolver: yupResolver(validationCreateOT),
  });

  const formMethodsUpdate = useForm<IOT>({
    resolver: yupResolver(validationUpdateOT),
  });

  const changeModalCreate = () => {
    changeIsUpdateOT(false);
    toggleModalOTs();
  };

  const getSingleOT = async (ot_id: number): Promise<IOT[]> => {
    return await managementApi
      .get('/admin/ots', {
        params: {ot_id},
      })
      .then(({data}) => {
        //console.log({data});

        return data;
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const changeModalUpdate = (ot_id: number) => {
    changeIsUpdateOT(true);
    getSingleOT(ot_id).then(res => {
      changeOTForUpdate(res[0]);
      toggleModalOTs();
    });
  };

  useEffect(() => {
    if (oTForUpdate?._id) {
      formMethodsCreate.reset();
      formMethodsUpdate.reset({...oTForUpdate});
    }

    return () => {
      formMethodsUpdate.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oTForUpdate]);

  const handleCreateOrUpdateOT = (data: IOT) => {
    changeIsLoading();
    if (isLoading) {
      return;
    }
    if (isUpdateOT) {
      changeMsmTextUpdate(data._id);
      //TODO: hacer funcionalidad correspondiente al clg
      handleUpdateOT(data)
        .then(res => {
          // console.log({res});
          changeIsLoading();
          getOTsByData(daySelected);
          toggleModalOTs();
          toggleSnackBarSuccess();
        })
        .catch(res => {
          changeIsLoading();
          console.log({res});
          // alert(res);
        });
      //console.log('actualizando:', data)
    } else {
      changeMsmTextUpdate('');
      //TODO: hacer funcionalidad correspondiente al clg
      handleCreateOT(data)
        .then(res => {
          // console.log({res});
          if (res.status === 201) {
            setTimeout(() => {
              getOTsDataByMonthQAndYear(`${yearOfDate}-${monthOfDate}`);
              getOTsByData(daySelected);
              changeIsLoading();
              toggleModalOTs();
              toggleSnackBarSuccess();
            }, 170);
          } else {
            changeIsLoading();

            // return alert(
            //   `ups!, creación de OT no valida puede que el  "slug" se este repitiendo`,;
            // );
            return console.log(
              'ups!, creación de OT no valida puede que el  "slug" se este repitiendo',
            );
          }
        })
        .catch((res: any) => {
          changeIsLoading();
          console.log({res});
          // alert(res);
        });
      // console.log('creando', data)
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return {
    //state
    textPrimary,
    textSecondary,
    background,
    primary,
    secondary,
    tertiary,
    card,
    daySelected,
    objOTsByMonth,
    labelToday,
    idxIdRelationMaq,
    idxIdRelationRep,
    idxUsersMttos,
    //methods
    formMethodsCreate,
    formMethodsUpdate,
    //functions
    changeDaySelected,
    changeMonthSelected,
    changeModalCreate,
    changeModalUpdate,
    handleCreateOrUpdateOT,
  };
};
